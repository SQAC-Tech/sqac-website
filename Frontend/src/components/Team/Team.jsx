import React, { useEffect, useMemo, useState } from 'react';
import axios from 'axios';
import Navbar from '../HomePage/Navbar';
import Teamvh1 from './Teamvh1';
import Teamvh2 from './Teamvh2';
import { FaLinkedin, FaInstagram, FaGithub } from 'react-icons/fa';
import { SiReact, SiFlutter, SiFigma, SiAndroid, SiNodedotjs, SiMongodb } from 'react-icons/si';

const hierarchy = ['Secretary','Joint Secretary','Leads','Domain Lead','Associate','Member'];
const LEAD_ROLES = ['project lead','media lead'];

const techIcons = [
  <SiReact className="text-cyan-400"/>,
  <SiFlutter className="text-sky-400"/>,
  <SiFigma className="text-pink-400"/>,
  <SiAndroid className="text-green-500"/>,
  <SiNodedotjs className="text-lime-400"/>,
  <SiMongodb className="text-emerald-500"/>
];

export default function Team(){
  const [team,setTeam] = useState([]);
  const [domain,setDomain] = useState('Board Member');

  useEffect(()=>{
    axios.get(import.meta.env.VITE_API).then(r=>setTeam(r.data?.data||[]));
  },[]);

  const filtered = useMemo(()=>{
    const d = domain.toLowerCase();
    if(d==='board member') return team.filter(m=>m.coredomain?.toLowerCase()==='board member');
    if(LEAD_ROLES.includes(d)) return team.filter(m=>m.position?.toLowerCase().includes(d));
    if(['technical','corporate'].includes(d)) return team.filter(m=>m.coredomain?.toLowerCase()===d);
    if(d==='media') return team.filter(m=>m.coredomain?.toLowerCase()==='corporate' && ['creative','public relations'].includes(m.subdomain?.toLowerCase()));
    return team.filter(m=>m.subdomain?.toLowerCase()===d);
  },[team,domain]);

  const grouped = useMemo(()=>{
    const g = Object.fromEntries(hierarchy.map(h=>[h,[]]));
    filtered.forEach(m=>{
      const p=(m.position||'').toLowerCase();
      if(domain.toLowerCase()==='board member'){
        if(p.includes('secretary')&&!p.includes('joint')) g.Secretary.push(m);
        else if(p.includes('joint')) g['Joint Secretary'].push(m);
        else if(p.includes('technical')) g.Leads.push({...m,position:'Technical Lead'});
        else if(p.includes('corporate')) g.Leads.push({...m,position:'Corporate Lead'});
        return;
      }
      if(p.includes('domain lead')) g['Domain Lead'].push(m);
      else if(p.includes('associate')) g.Associate.push(m);
      else if(p.includes('lead')) g.Leads.push(m);
      else g.Member.push(m);
    });
    return g;
  },[filtered,domain]);

  return(
    <div className="min-h-screen bg-gradient-to-b from-[#1b0033] via-[#240046] to-[#0a0014]">
      <Navbar/>
      <Teamvh1/>
      <Teamvh2 onSelectDomain={setDomain}>
        <div className="relative py-24">
          <div className="absolute left-1/2 top-0 bottom-0 w-1 -translate-x-1/2 bg-orange-400/30 rounded-full"/>
          {hierarchy.map((role,i)=>{
            const members=grouped[role];
            if(!members.length) return null;
            return(
              <div key={i} className="relative mb-48">
                <div className="flex flex-col items-center">
                  <div className="w-6 h-6 rounded-full bg-orange-500 shadow-[0_0_40px_orange]"/>
                  <span className="mt-2 px-5 py-1 rounded-full font-bold bg-orange-400 text-black shadow-[0_0_20px_orange]">{role}</span>
                </div>
               <div className="flex justify-center mt-20">
  <div className="flex flex-wrap justify-center gap-16 w-full max-w-7xl">

                  {members.map((m,idx)=>(
                    <article key={idx} className="group w-[18rem] min-h-[16rem] bg-gradient-to-br from-[#041021]/50 to-[#062032]/30 backdrop-blur-md border border-orange-500/20 p-5 rounded-2xl hover:scale-105 hover:ring-8 hover:ring-orange-400/45 transition-all">
                      <div className="flex justify-center gap-3 mb-3 opacity-0 group-hover:opacity-100 -translate-y-3 group-hover:-translate-y-6 transition-all">
                        {techIcons.map((I,i)=><span key={i}>{I}</span>)}
                      </div>
                      <img src={m.pic} className="w-36 h-36 rounded-full mx-auto mb-3 object-cover shadow-xl"/>
                      <h4 className="text-lg text-white text-center font-semibold">{m.name}</h4>
                      <p className="text-orange-200 text-center">{m.position}</p>
                      <div className="flex justify-center gap-4 mt-3 text-lg">
                        {m.linkdln&&<a href={m.linkdln}><FaLinkedin/></a>}
                        {m.github&&<a href={m.github}><FaGithub/></a>}
                        {m.insta&&<a href={m.insta}><FaInstagram/></a>}
                      </div>
                    </article>
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
