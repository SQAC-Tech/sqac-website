import React, { useEffect, useMemo, useRef, useState } from 'react';
import axios from 'axios';
import Navbar from '../HomePage/Navbar';
import Footer from '../Footer';
import Teamvh1 from './Teamvh1';
import Teamvh2 from './Teamvh2';
import { FaLinkedin, FaInstagram, FaGithub } from 'react-icons/fa';
import {
  SiReact, SiFlutter, SiFigma, SiAndroid, SiNodedotjs, SiMongodb,
} from 'react-icons/si';

const boardMemberHierarchy = [
  'Secretary','Joint Secretary','Leads','Domain Lead','Associate','Member'
];
const LEAD_ROLES = ['project lead','media lead'];

const techIcons = [
  <SiReact className="text-cyan-400"/>,
  <SiFlutter className="text-sky-400"/>,
  <SiFigma className="text-pink-400"/>,
  <SiAndroid className="text-green-500"/>,
  <SiNodedotjs className="text-lime-400"/>,
  <SiMongodb className="text-emerald-500"/>,
];

const Team = () => {
  const [teamData,setTeamData] = useState([]);
  const [selectedDomain,setSelectedDomain] = useState('Board Member');
  const [loading,setLoading] = useState(true);
  const [activeIndex,setActiveIndex] = useState(-1);

  useEffect(()=>{
    axios.get(import.meta.env.VITE_API).then(res=>{
      setTeamData(res.data?.data||[]);
      setLoading(false);
    });
  },[]);

  const filterMembersByDomain = () => {
    const d = selectedDomain.toLowerCase();
    if(d==='board member') return teamData.filter(m=>m.coredomain?.toLowerCase()==='board member');
    if(LEAD_ROLES.includes(d)) return teamData.filter(m=>m.position?.toLowerCase().includes(d));
    if(['technical','corporate'].includes(d)) return teamData.filter(m=>m.coredomain?.toLowerCase()===d);
    if(d==='media') return teamData.filter(m=>m.coredomain?.toLowerCase()==='corporate' && ['creative','public relations'].includes(m.subdomain?.toLowerCase()));
    return teamData.filter(m=>m.subdomain?.toLowerCase()===d);
  };

  const groupByHierarchy = (members)=>{
    const groups = Object.fromEntries(boardMemberHierarchy.map(r=>[r,[]]));
    members.forEach(m=>{
      const p=(m.position||'').toLowerCase();
      if(selectedDomain.toLowerCase()==='board member'){
        if(p.includes('secretary')) groups.Secretary.push(m);
        else if(p.includes('joint secretary')) groups['Joint Secretary'].push(m);
        else groups.Leads.push(m); return;
      }
      if(p.includes('domain lead')) groups['Domain Lead'].push(m);
      else if(p.includes('associate')) groups.Associate.push(m);
      else if(p.includes('lead')) groups.Leads.push(m);
      else groups.Member.push(m);
    });
    return groups;
  };

  const displayMembers = useMemo(()=>groupByHierarchy(filterMembersByDomain()),[teamData,selectedDomain]);

  useEffect(()=>{
    const obs=new IntersectionObserver(entries=>{
      entries.forEach(e=>e.isIntersecting&&setActiveIndex(Number(e.target.dataset.idx)));
    },{threshold:0.5});
    document.querySelectorAll('[data-idx]').forEach(el=>obs.observe(el));
    return()=>obs.disconnect();
  },[displayMembers]);

  return (
    <div>
      <Navbar/>
      <Teamvh1/>
      <Teamvh2 onSelectDomain={setSelectedDomain}/>

      <div className="relative min-h-screen bg-gradient-to-b from-purple-300 via-pink-200 to-orange-200 py-32">

        {/* CENTER SPINE */}
        <div className="absolute left-1/2 top-0 bottom-0 w-1 -translate-x-1/2 bg-orange-400/30 rounded-full"/>

        {loading?<div>Loading...</div>:boardMemberHierarchy.map((role,i)=>{
          const members=displayMembers[role];
          if(!members?.length) return null;

          return(
            <div key={i} data-idx={i} className="relative mb-40">

              {/* GLOWING BRANCH THROUGH CARDS */}
              <div className={`absolute top-24 left-0 right-0 h-[4px] transition-all duration-700 
                ${activeIndex===i?'bg-gradient-to-r from-transparent via-orange-400 to-transparent shadow-[0_0_30px_orange]':'bg-gray-400/20'}`} />

              {/* ROLE NODE */}
              <div className="relative flex flex-col items-center">
                <div className={`w-6 h-6 rounded-full ${activeIndex===i?'bg-orange-500 shadow-[0_0_40px_orange]':'bg-gray-500/40'}`}/>
                <span className={`mt-2 px-4 py-1 rounded-full font-bold 
                  ${activeIndex===i?'bg-orange-400 text-black shadow-[0_0_20px_orange]':'bg-gray-600/40 text-gray-300'}`}>
                  {role}
                </span>
              </div>

              {/* CARDS */}
              <div className="flex flex-wrap gap-14 justify-center mt-20 relative z-10">
                {members.map((m,idx)=>(
                  <article key={idx} className="group relative w-[22rem] min-h-[18rem]
                    bg-gradient-to-br from-[#041021]/40 to-[#062032]/25 backdrop-blur-md
                    border border-orange-500/20 p-6 rounded-2xl hover:scale-105 hover:ring-8
                    hover:ring-orange-400/45 transition-all">

                    {/* TECH FLOAT ICONS */}
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 flex gap-3 opacity-0 group-hover:opacity-100 group-hover:-translate-y-10 transition-all">
                      {techIcons.map((Icon,i)=><span key={i} style={{transitionDelay:`${i*70}ms`}}>{Icon}</span>)}
                    </div>

                    <img src={m.pic} className="w-44 h-44 rounded-full mx-auto mb-4 object-cover shadow-xl group-hover:scale-110 transition-transform"/>
                    <h4 className="text-xl text-white text-center font-semibold">{m.name}</h4>
                    <p className="text-orange-200 text-center">{m.position}</p>

                    <div className="flex justify-center gap-4 mt-4 text-xl">
                      {m.linkdln&&<a href={m.linkdln}><FaLinkedin/></a>}
                      {m.github&&<a href={m.github}><FaGithub/></a>}
                      {m.insta&&<a href={m.insta}><FaInstagram/></a>}
                    </div>
                  </article>
                ))}
              </div>
            </div>
          );
        })}
      </div>
      <Footer/>
    </div>
  );
};

export default Team;
