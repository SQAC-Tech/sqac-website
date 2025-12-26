import React, { useEffect, useMemo, useState, useRef } from 'react';
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

export default function Team(){
  const [team,setTeam] = useState([]);
  const [domain,setDomain] = useState('Board Member');
  const cardsRowRefs = useRef({});
  const [connectorsMap, setConnectorsMap] = useState({});
  const { isDarkMode } = useTheme();

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

  useEffect(()=>{
    const computeAll = ()=>{
      const newMap = {};
      Object.keys(cardsRowRefs.current).forEach(key=>{
        const container = cardsRowRefs.current[key];
        if(!container) return;
        const containerRect = container.getBoundingClientRect();
        const spineX = containerRect.width/2;
        const conns = [];
        const articles = Array.from(container.querySelectorAll('article'));
        articles.forEach(a=>{
          const r = a.getBoundingClientRect();
          const centerX = (r.left - containerRect.left) + r.width/2;
          const top = (r.top - containerRect.top) + r.height/2;
          const left = Math.min(spineX, centerX);
          const width = Math.max(2, Math.abs(centerX - spineX));
          conns.push({left, top, width});
        });
        newMap[key]=conns;
      });
      setConnectorsMap(newMap);
    };
    computeAll();
    window.addEventListener('resize', computeAll);
    window.addEventListener('scroll', computeAll, {passive:true});
    return ()=>{
      window.removeEventListener('resize', computeAll);
      window.removeEventListener('scroll', computeAll);
    };
  },[grouped, domain, team]);

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
              <div key={i} className="relative mb-20">
                <div className="flex flex-col items-center">
                  <div className="w-6 h-6 rounded-full bg-orange-500 shadow-[0_0_40px_orange]"/>
                  <span className="mt-2 px-5 py-1 rounded-full font-bold bg-orange-400 text-black shadow-[0_0_20px_orange]">{role}</span>
                </div>
               <div className="flex justify-center mt-20">
  <div ref={el=>cardsRowRefs.current[i]=el} className="relative flex flex-wrap justify-center gap-16 w-full max-w-7xl">
    {/* connectors overlay for this row (computed in JS) */}
    {connectorsMap[i] && connectorsMap[i].length>0 && (
      <div className="absolute inset-0 pointer-events-none">
        {connectorsMap[i].map((c,ci)=> (
          <div key={ci} style={{position:'absolute', left: `${c.left}px`, top: `${c.top}px`, width: `${c.width}px`, height: '4px', borderRadius: '999px', boxShadow: '0 0 18px rgba(255,140,0,0.8)'}} className="bg-orange-400" />
        ))}
      </div>
    )}

                  {members.map((m,idx)=>{
                    const cardBase = 'group w-[18rem] min-h-[18rem] p-5 rounded-2xl transition-all relative overflow-hidden';
                    const cardVariant = isDarkMode
                      ? 'bg-gradient-to-br from-[#041021]/50 to-[#062032]/30 backdrop-blur-md border border-orange-500/20 hover:scale-105 hover:ring-8 hover:ring-orange-400/45'
                      : 'bg-gradient-to-br from-white/95 to-white/90 border border-gray-200/60';
                    // For light mode, add refined inner styling: soft shadow, subtle pattern and a top accent stripe
                    const innerStyle = !isDarkMode ? {
                      boxShadow: '0 18px 50px rgba(15,23,42,0.08)',
                      backgroundImage: 'linear-gradient(180deg, rgba(255,255,255,0.9), rgba(250,250,250,0.98)), repeating-linear-gradient(135deg, rgba(0,0,0,0.015) 0 2px, transparent 2px 8px)'
                    } : {};
                    return (
                      <div key={idx} className={`${!isDarkMode ? 'p-[1px] rounded-2xl bg-gradient-to-r from-orange-300/50 via-yellow-200/30 to-transparent' : ''}`}>
                        <article className={`${cardBase} ${cardVariant} ${!isDarkMode ? 'hover:scale-105 hover:-translate-y-2' : 'hover:scale-105'}`} style={innerStyle}>
                          {/* left/right gradient edges, corner accents and hover glow for light mode */}
                          {!isDarkMode && (
                            <>
                              <div className="absolute left-0 top-0 h-full w-1 rounded-l-2xl transition-all duration-300 group-hover:blur-sm" style={{background:'linear-gradient(180deg,#ffd3a5,#ff9a5a)', boxShadow:'0 0 18px rgba(255,160,60,0.12)'}} />
                              <div className="absolute right-0 top-0 h-full w-1 rounded-r-2xl transition-all duration-300 group-hover:blur-sm" style={{background:'linear-gradient(180deg,#ffd3f0,#ffd3a5)', boxShadow:'0 0 18px rgba(255,160,120,0.06)'}} />
                              {/* corner highlight shapes */}
                              <div className="absolute -top-3 -left-3 w-6 h-6 rotate-45" style={{background:'linear-gradient(135deg,#fff6e6,#ffd3a5)', boxShadow:'0 6px 18px rgba(255,200,140,0.12)'}} />
                              <div className="absolute -bottom-3 -right-3 w-6 h-6 -rotate-12" style={{background:'linear-gradient(135deg,#ffd3f0,#ffe7a8)', boxShadow:'0 6px 18px rgba(255,150,200,0.06)'}} />
                              {/* subtle top shimmer line - reduced to avoid double top-line */}
                              <div className="absolute top-3 left-8 right-8 h-px rounded-full opacity-40 pointer-events-none" style={{background:'linear-gradient(90deg, rgba(255,211,165,0.18), rgba(255,231,168,0.12), rgba(255,211,240,0.14))'}} />
                              {/* glowing outline on hover */}
                              <div className="absolute inset-0 rounded-2xl transition-shadow duration-300 pointer-events-none group-hover:shadow-[0_8px_40px_rgba(255,160,60,0.16)]" />
                            </>
                          )}
                          {/* top accent stripe for light theme */}
                          {!isDarkMode && <div className="absolute left-0 right-0 top-0 h-1 rounded-t-2xl" style={{background:'linear-gradient(90deg,#ffd3a5,#ff9a5a,#ffd3f0)', boxShadow:'0 6px 20px rgba(255,140,40,0.08)'}} />}
                          {/* bottom accent stripe to match edges */}
                          {!isDarkMode && <div className="absolute left-0 right-0 bottom-0 h-1 rounded-b-2xl" style={{background:'linear-gradient(90deg,#ffd3a5,#ff9a5a,#ffd3f0)', boxShadow:'0 -6px 20px rgba(255,140,40,0.06)'}} />}
                          <div className={`flex justify-center gap-3 mb-3 transition-all ${isDarkMode ? 'opacity-0 group-hover:opacity-100 -translate-y-3 group-hover:-translate-y-6' : 'opacity-0 group-hover:opacity-100 -translate-y-1 group-hover:-translate-y-3'}`}>
                            {techIcons.map(({Icon, color}, i) => (
                              <span key={i} className={`flex items-center justify-center w-8 h-8 rounded-full ${!isDarkMode ? 'bg-white/90 border border-white/60 shadow-sm' : ''}`}>
                                <Icon className="w-4 h-4" style={{ color }} />
                              </span>
                            ))}
                          </div>
                          {/* avatar with orange edge ring for light theme */}
                          <div className={`mx-auto mb-3 w-36 h-36 ${!isDarkMode ? 'relative p-1 rounded-full bg-gradient-to-br from-orange-50 to-white shadow-lg' : 'rounded-full overflow-hidden'}`}>
                            <div className={`w-full h-full rounded-full overflow-hidden ${isDarkMode ? '' : 'bg-white'}`}>
                              <img src={m.pic} className="w-full h-full object-cover" />
                            </div>
                            {!isDarkMode && (
                              <div className="absolute inset-0 rounded-full pointer-events-none" style={{boxShadow:'inset 0 0 0 4px rgba(255,160,60,0.14), 0 8px 30px rgba(255,140,40,0.06)'}} />
                            )}
                          </div>
                          <h4 className={`text-lg text-center font-semibold ${isDarkMode ? 'text-white' : 'bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-pink-500'}`}>{m.name}</h4>
                          {/* show plain position only in dark mode; light theme uses the role pill */}
                          {isDarkMode ? (
                            <p className="text-center text-orange-200">{m.position}</p>
                          ) : (
                            <div className="flex justify-center mt-2"><span className="text-xs px-3 py-1 rounded-full bg-orange-50 text-orange-600 font-medium shadow-sm">{m.position}</span></div>
                          )}
                          <div className={`flex justify-center gap-4 mt-3 text-lg ${isDarkMode ? '' : 'text-slate-700'}`}>
                            {m.linkdln&&<a href={m.linkdln} className={!isDarkMode?'inline-flex items-center justify-center w-9 h-9 rounded-full bg-gradient-to-br from-sky-100 to-sky-50 text-sky-600 hover:from-sky-200 hover:to-sky-100 shadow-md transition-all':'text-white'}><FaLinkedin style={isDarkMode?{color:'#0ea5e9'}:{}}/></a>}
                            {m.github&&<a href={m.github} className={!isDarkMode?'inline-flex items-center justify-center w-9 h-9 rounded-full bg-gradient-to-br from-slate-100 to-slate-50 text-slate-800 hover:from-slate-200 hover:to-slate-100 shadow-md transition-all':'text-white'}><FaGithub style={{color:'#000'}}/></a>}
                            {m.insta&&<a href={m.insta} className={!isDarkMode?'inline-flex items-center justify-center w-9 h-9 rounded-full bg-gradient-to-br from-pink-100 to-pink-50 text-pink-500 hover:from-pink-200 hover:to-pink-100 shadow-md transition-all':'text-white'}><FaInstagram style={isDarkMode?{color:'#f973a4'}:{}}/></a>}
                          </div>
                        </article>
                      </div>
                    );
                  })}
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
