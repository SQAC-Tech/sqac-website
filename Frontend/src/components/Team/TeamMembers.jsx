import React, { useEffect, useState } from "react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const baseURL = "https://sqac-website.onrender.com/api/data/field";

const positionPriority = {
  "Board Member": 1,
  "Domain Lead": 2,
  Associate: 3,
  Member: 4,
};

const getImageURL = (driveLink) => {
  const match = driveLink?.match(/[-\w]{25,}/);
  return match ? `https://drive.google.com/uc?export=view&id=${match[0]}` : "";
};

export default function TeamMembers({ domain }) {
  const [members, setMembers] = useState([]);

  useEffect(() => {
    const fetchMembers = async () => {
      const res = await fetch(`${baseURL}/${domain}`);
      const data = await res.json();
      const sorted = data.sort((a, b) =>
        (positionPriority[a["Position in SQAC"]] || 99) -
        (positionPriority[b["Position in SQAC"]] || 99)
      );
      setMembers(sorted);
    };
    if (domain) fetchMembers();
  }, [domain]);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4">
      {members.map((member, idx) => (
        <div key={idx} className="bg-white shadow-md rounded-2xl p-4 flex flex-col items-center">
          <img
            src={getImageURL(member["Your Image For Website"])}
            alt={member.Name}
            className="w-28 h-28 rounded-full object-cover mb-4 border"
          />
          <h2 className="text-lg font-semibold">{member.Name}</h2>
          <p className="text-gray-500">{member["Position in SQAC"]}</p>
          <div className="flex gap-3 mt-3">
            {member["GitHub Profile Link"] && (
              <a href={member["GitHub Profile Link"]} target="_blank" rel="noopener noreferrer">
                <FaGithub className="text-xl hover:text-black" />
              </a>
            )}
            {member["LinkedIn Profile Link"] && (
              <a href={member["LinkedIn Profile Link"]} target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="text-xl hover:text-blue-600" />
              </a>
            )}
            {member["Instagram Profile Link"] && (
              <a href={member["Instagram Profile Link"]} target="_blank" rel="noopener noreferrer">
                <FaInstagram className="text-xl hover:text-pink-500" />
              </a>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
