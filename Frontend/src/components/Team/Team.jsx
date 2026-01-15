import React, { useEffect, useMemo, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';
import Navbar from '../HomePage/Navbar';
import Teamvh1 from './Teamvh1';
import Teamvh2 from './Teamvh2';
import { useTheme } from '../../contexts/ThemeContext';
import { FaLinkedin, FaInstagram, FaGithub } from 'react-icons/fa';
import { SiReact, SiFlutter, SiFigma, SiAndroid, SiNodedotjs, SiMongodb } from 'react-icons/si';

const hierarchy = ['Secretary','Joint Secretary','Leads','Domain Lead','Associate','Member'];
const LEAD_ROLES = ['project lead','media lead'];

const techIcons = [
  { Icon: SiReact, color: '#06b6d4' },
  { Icon: SiFlutter, color: '#38bdf8' },
  { Icon: SiFigma, color: '#fb7185' },
  { Icon: SiAndroid, color: '#22c55e' },
  { Icon: SiNodedotjs, color: '#a3e635' },
  { Icon: SiMongodb, color: '#10b981' },
];

export default function Team() {
  const [team, setTeam] = useState([]);
  const [domain, setDomain] = useState('Board Member');
  const cardsRowRefs = useRef({});
  const [connectorsMap, setConnectorsMap] = useState({});

  useEffect(() => {
    axios.get(import.meta.env.VITE_API)
      .then(r => setTeam(r.data?.data || []));
  }, []);

  const filtered = useMemo(() => {
    const d = domain.toLowerCase();
    if (d === 'board member') return team.filter(m => m.coredomain?.toLowerCase() === 'board member');
    if (LEAD_ROLES.includes(d)) return team.filter(m => m.position?.toLowerCase().includes(d));
    if (['technical','corporate'].includes(d)) return team.filter(m => m.coredomain?.toLowerCase() === d);
    if (d === 'media')
      return team.filter(m =>
        m.coredomain?.toLowerCase() === 'corporate' &&
        ['creative','public relations'].includes(m.subdomain?.toLowerCase())
      );
    return team.filter(m => m.subdomain?.toLowerCase() === d);
  }, [team, domain]);

  const grouped = useMemo(() => {
    const g = Object.fromEntries(hierarchy.map(h => [h, []]));
    filtered.forEach(m => {
      const p = (m.position || '').toLowerCase();
      if (domain.toLowerCase() === 'board member') {
        if (p.includes('secretary') && !p.includes('joint')) g.Secretary.push(m);
        else if (p.includes('joint')) g['Joint Secretary'].push(m);
        else if (p.includes('technical')) g.Leads.push({ ...m, position: 'Technical Lead' });
        else if (p.includes('corporate')) g.Leads.push({ ...m, position: 'Corporate Lead' });
        return;
      }
      if (p.includes('domain lead')) g['Domain Lead'].push(m);
      else if (p.includes('associate')) g.Associate.push(m);
      else if (p.includes('lead')) g.Leads.push(m);
      else g.Member.push(m);
    });
    return g;
  }, [filtered, domain]);

  useEffect(() => {
    const computeAll = () => {
      const newMap = {};
      Object.keys(cardsRowRefs.current).forEach(key => {
        const container = cardsRowRefs.current[key];
        if (!container) return;
        const rect = container.getBoundingClientRect();
        const spineX = rect.width / 2;
        const conns = [];
        const articles = Array.from(container.querySelectorAll('article'));
        articles.forEach(a => {
          const r = a.getBoundingClientRect();
          const centerX = (r.left - rect.left) + r.width / 2;
          const top = (r.top - rect.top) + r.height / 2;
          const left = Math.min(spineX, centerX);
          const width = Math.max(2, Math.abs(centerX - spineX));
          conns.push({ left, top, width });
        });
        newMap[key] = conns;
      });
      setConnectorsMap(newMap);
    };

    computeAll();
    window.addEventListener('resize', computeAll);
    window.addEventListener('scroll', computeAll, { passive: true });
    return () => {
      window.removeEventListener('resize', computeAll);
      window.removeEventListener('scroll', computeAll);
    };
  }, [grouped, domain, team]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1b0033] via-[#240046] to-[#0a0014]">
      <Navbar />
      <Teamvh1 />
      <Teamvh2 onSelectDomain={setDomain}>
        <div className="relative py-24">
          <div className="absolute left-1/2 top-0 bottom-0 w-1 -translate-x-1/2 rounded-full bg-orange-500/70 shadow-[0_0_60px_rgba(249,115,22,0.6)]" />

          {hierarchy.map((role, i) => {
            const members = grouped[role];
            if (!members.length) return null;

            return (
              <div key={i} className="relative mb-20">
                <div className="flex flex-col items-center">
                  <motion.div
                    className="w-6 h-6 rounded-full bg-orange-500"
                    animate={{ scale: [1, 1.15, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  <span className="mt-2 px-5 py-1 rounded-full font-bold bg-orange-400 text-black">
                    {role}
                  </span>
                </div>

                <div className="flex justify-center mt-20">
                  <div
                    ref={el => cardsRowRefs.current[i] = el}
                    className="relative flex flex-wrap justify-center gap-16 w-full max-w-7xl"
                  >
                    {connectorsMap[i]?.map((c, ci) => (
                      <motion.div
                        key={ci}
                        className="absolute bg-orange-500 rounded-full"
                        style={{ left: c.left, top: c.top, width: c.width, height: 6 }}
                        animate={{ opacity: [0.6, 1, 0.6] }}
                        transition={{ duration: 1.6, repeat: Infinity }}
                      />
                    ))}

                    {members.map((m, idx) => (
                      <motion.article
                        key={idx}
                        className="
                          group w-[18rem] min-h-[18rem] p-5 rounded-2xl
                          bg-gradient-to-br from-[#041021]/60 to-[#062032]/40 shadow-lg shadow-orange-500
                          backdrop-blur-md border border-orange-500/20
                        "
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        whileHover={{ scale: 1.06, y: -10 }}
                        transition={{ duration: 0.45 }}
                        viewport={{ once: true }}
                      >
                        <div className="flex justify-center gap-3 mb-3 opacity-0 group-hover:opacity-100 transition">
                          {techIcons.map(({ Icon, color }, i) => (
                            <span key={i} className="w-8 h-8 rounded-full flex items-center justify-center bg-white/10">
                              <Icon className="w-4 h-4" style={{ color }} />
                            </span>
                          ))}
                        </div>

                        <div className="mx-auto mb-3 w-36 h-36 rounded-full overflow-hidden">
                          <img src={m.pic} className="w-full h-full object-cover" />
                        </div>

                        <h4 className="text-lg text-center font-semibold text-white">{m.name}</h4>
                        <p className="text-center text-orange-200 text-sm">{m.position}</p>

                        <div className="flex justify-center gap-4 mt-4 text-xl">
                          {m.linkdln && <a href={m.linkdln}><FaLinkedin color="#0ea5e9" /></a>}
                          {m.github && <a href={m.github}><FaGithub color="#fff" /></a>}
                          {m.insta && <a href={m.insta}><FaInstagram color="#f472b6" /></a>}
                        </div>
                      </motion.article>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Teamvh2>
    </div>
  );
}
