import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProfileCard from "./ProfileCard";

const SubDomainPage = () => {
  const { subdomain } = useParams();
  const [members, setMembers] = useState([]);

  useEffect(() => {
    const fetchSubDomainMembers = async () => {
      try {
        const res = await fetch("/api/data/field/Sub Domain");
        const data = await res.json();
        const filtered = Object.values(data).filter(
          (item) => item["Sub Domain"]?.toLowerCase() === subdomain.toLowerCase()
        );
        setMembers(filtered);
      } catch (err) {
        console.error(err);
      }
    };
    fetchSubDomainMembers();
  }, [subdomain]);

  return (
    <div className="min-h-screen bg-white p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">
        {subdomain} Members
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {members.map((member, index) => (
          <ProfileCard key={index} data={member} />
        ))}
      </div>
    </div>
  );
};

export default SubDomainPage;
