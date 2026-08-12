const fs = require('fs');
const path = require('path');

const TEAM_CACHE_TTL_MS = 5 * 60 * 1000;
const TEAM_FETCH_TIMEOUT_MS = 3000;

let cachedTeamMembers = null;
let cachedAt = 0;

function formatMembers(rawMembers) {
  return rawMembers.map((member) => {
    const name = member.name || 'Unknown Member';
    const nameParts = name.split(' ');
    const initials = nameParts.length > 1
      ? `${nameParts[0][0]}${nameParts[nameParts.length - 1][0]}`.toUpperCase()
      : (nameParts[0] ? nameParts[0].substring(0, 2).toUpperCase() : 'SQ');

    let domain = 'Technical';
    let role = member.position || 'Member';
    let subDomain = member.subdomain || '';

    const posLow = role.toLowerCase();
    const coreLow = (member.coredomain || '').toLowerCase();
    const subLow = subDomain.toLowerCase();

    if (posLow === 'board member' || posLow === 'board-member' || coreLow === 'board member') {
      domain = 'Board';
    } else if (
      coreLow === 'media' ||
      subLow.includes('creative') ||
      subLow.includes('pr') ||
      subLow.includes('media') ||
      subLow.includes('design')
    ) {
      domain = 'Media';
    } else if (coreLow === 'technical') {
      domain = 'Technical';
    } else if (coreLow === 'corporate') {
      domain = 'Corporate';
    } else if (coreLow === 'both') {
      if (subLow.includes('web') || subLow.includes('app') || subLow.includes('ai') || subLow.includes('ml')) {
        domain = 'Technical';
      } else {
        domain = 'Corporate';
      }
    }

    let contributions = [
      'Contributed to core team initiatives and deliverables.',
      'Collaborated across domains to support SQAC activities.',
    ];

    if (domain === 'Technical') {
      contributions = [
        'Developed and optimized core software modules.',
        'Ensured code quality through rigorous testing and code reviews.',
      ];
    } else if (domain === 'Corporate') {
      contributions = [
        'Managed corporate partnerships and sponsor outreach.',
        'Organized and coordinated logistics for major events.',
      ];
    } else if (domain === 'Media') {
      contributions = [
        'Designed high-fidelity UI/UX mockups and graphic assets.',
        'Led public relations campaigns and social media presence.',
      ];
    } else if (domain === 'Board') {
      contributions = [
        'Shaped the strategic vision and direction of SQAC.',
        'Mentored members and oversaw operations across all domains.',
      ];
    }

    const roleName = role || 'Core Member';
    const bio = `${name} is a dedicated ${roleName.toLowerCase()} at SQAC, focusing on driving quality, collaboration, and excellence across projects.`;

    return {
      id: member._id || `${name}-${role}`.replace(/\s+/g, '-').toLowerCase(),
      name,
      initials,
      role,
      bio,
      contributions,
      domain,
      subDomain,
      position: role,
      pic: member.pic || '',
      linkedin: member.linkdln || '#',
      github: member.github || '#',
      instagram: member.insta || '#',
      portfolio: member.portfolio || '#',
    };
  });
}

function resolveFallbackDataPath() {
  const candidates = [
    path.join(__dirname, '..', 'test-getdata.json'),
    path.join(__dirname, '..', '..', 'Frontend', 'api', 'test-getdata.json'),
  ];

  return candidates.find((candidate) => fs.existsSync(candidate));
}

function updateTeamCache(formattedMembers) {
  cachedTeamMembers = formattedMembers;
  cachedAt = Date.now();
}

function getFreshCache() {
  if (cachedTeamMembers && Date.now() - cachedAt < TEAM_CACHE_TTL_MS) {
    return cachedTeamMembers;
  }

  return null;
}

async function fetchGatewayMembers(apiUrl) {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), TEAM_FETCH_TIMEOUT_MS);

  try {
    const response = await fetch(apiUrl, { signal: controller.signal });

    if (!response.ok) {
      throw new Error(`Failed to fetch from gateway: ${response.statusText}`);
    }

    const json = await response.json();
    const rawMembers = json.data || [];

    if (rawMembers.length === 0) {
      throw new Error('API returned 0 members');
    }

    return formatMembers(rawMembers);
  } finally {
    clearTimeout(timeout);
  }
}

function loadFallbackMembers() {
  const localDataPath = resolveFallbackDataPath();

  if (!localDataPath) {
    throw new Error('No local team fallback data file was found.');
  }

  const raw = fs.readFileSync(localDataPath, 'utf8');
  const json = JSON.parse(raw);
  const fallbackMembers = json.data || json || [];

  if (!Array.isArray(fallbackMembers) || fallbackMembers.length === 0) {
    throw new Error('Fallback team data is empty.');
  }

  return formatMembers(fallbackMembers);
}

exports.getTeam = async (req, res) => {
  const cachedMembers = getFreshCache();

  if (cachedMembers) {
    return res.json(cachedMembers);
  }

  try {
    const apiUrl = process.env.MEMBER_FORM_API_URL;

    if (!apiUrl) {
      throw new Error('MEMBER_FORM_API_URL environment variable is not defined');
    }

    const members = await fetchGatewayMembers(apiUrl);
    updateTeamCache(members);
    return res.json(members);
  } catch (err) {
    console.error('Error fetching team data from gateway, using fallback local data:', err.message);

    try {
      const fallbackMembers = loadFallbackMembers();
      updateTeamCache(fallbackMembers);
      return res.json(fallbackMembers);
    } catch (fallbackErr) {
      console.error('Fallback error:', fallbackErr.message);
    }

    res.status(500).json({ message: err.message });
  }
};
