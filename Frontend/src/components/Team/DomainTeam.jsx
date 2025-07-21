import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import ProfileCard from './ProfileCard';

const positionRank = {
  "President": 1,
  "Vice President": 2,
  "Secretary": 3,
  "Director": 4,
  "Manager": 5,
  "Member": 6,
};

const DomainTeam = () => {
  const { domainName } = useParams();
  const navigate = useNavigate();
  const [members, setMembers] = useState([]);

  useEffect(() => {
    axios.get("https://sqac-website.onrender.com/api/data")
      .then(res => {
        const filtered = res.data
          .filter(m => m["Your Core Domain"] === domainName)
          .sort((a, b) =>
            (positionRank[a["Position in SQAC"]] || 99) -
            (positionRank[b["Position in SQAC"]] || 99)
          );

        setMembers(filtered);
      })
      .catch(err => console.error("Error loading team:", err));
  }, [domainName]);

  return (
    <div className="min-h-screen px-6 py-10 bg-gradient-to-b from-orange-100 via-white to-pink-100">
      <button onClick={() => navigate(-1)} className="mb-6 px-4 py-2 bg-pink-200 rounded-lg font-semibold hover:bg-pink-300">
        ← Back
      </button>

      <h2 className="text-3xl font-bold text-center mb-8">{domainName} Team</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-10 justify-items-center">
        {members.map((member, idx) => (
          <ProfileCard
            key={idx}
            name={member["Name"]}
            position={member["Position in SQAC"]}
            github={member["GitHub Profile Link"]}
            linkedin={member["LinkedIn Profile Link"]}
            instagram={member["Instagram Profile Link"]}
            image={member["Your Image For Website"]}
          />
        ))}
      </div>
    </div>
  );
};

export default DomainTeam;
