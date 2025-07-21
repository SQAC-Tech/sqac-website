import React, { useEffect, useState } from "react";
import TeamMembers from "./TeamMembers";

const baseURL = "https://sqac-website.onrender.com/api/data/field";

export default function TeamPage() {
  const [domains, setDomains] = useState([]);
  const [selectedDomain, setSelectedDomain] = useState("");

  useEffect(() => {
    const fetchDomains = async () => {
      const response = await fetch(`${baseURL}/Sub Domain`);
      const data = await response.json();
      setDomains(data);
      if (data.length > 0) setSelectedDomain(data[0]);
    };
    fetchDomains();
  }, []);

  return (
    <div className="min-h-screen bg-white p-6">
      <h1 className="text-4xl font-bold mb-6 text-center">Our Team</h1>

      <div className="flex flex-wrap justify-center gap-4 mb-10">
        {domains.map((domain) => (
          <button
            key={domain}
            className={`px-4 py-2 rounded-xl border text-sm font-medium ${
              selectedDomain === domain
                ? "bg-black text-white"
                : "bg-gray-200 text-black hover:bg-black hover:text-white"
            }`}
            onClick={() => setSelectedDomain(domain)}
          >
            {domain}
          </button>
        ))}
      </div>

      {selectedDomain && <TeamMembers domain={selectedDomain} />}
    </div>
  );
}
