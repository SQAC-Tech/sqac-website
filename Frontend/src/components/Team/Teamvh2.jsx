import React,{useState} from 'react';
import {
  Users,Code2,Building2,Camera,Palette,Globe,
  Brain,Smartphone,Megaphone,HandCoins,Calendar,
  ChevronDown,Crown
} from 'lucide-react';

export default function Teamvh2({onSelectDomain,children}){
  const [open,setOpen]=useState(null);
  const [lead,setLead]=useState(null);

  const select=v=>{onSelectDomain(v);setOpen(null);setLead(null);};

  return(
    <section
      className="
        w-full flex flex-col items-center pt-16
        bg-gradient-to-b from-orange-200 via-pink-200 to-cyan-200
        dark:from-[#0f0a1a] dark:via-[#1b0b2e] dark:to-zinc-800
      "
    >
      <h1 className="text-5xl font-extrabold mb-12 bg-gradient-to-r from-orange-400 via-pink-500 to-purple-500 bg-clip-text text-transparent">
        Choose Your Domain
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-14 mb-20 dark:text-white">
        <div
          className="cursor-pointer flex flex-col items-center hover:scale-110 transition"
          onClick={()=>select('Board Member')}
        >
          <Users className="w-20 h-20 text-orange-500 dark:text-white"/>
          Board Members
        </div>

        <div className="flex flex-col items-center">
          <div
            className="cursor-pointer flex flex-col items-center hover:scale-110 transition"
            onClick={()=>setOpen(open==='Technical'?null:'Technical')}
          >
            <Code2 className="w-20 h-20 text-indigo-500"/>
            Technical <ChevronDown/>
          </div>

          {open==='Technical'&&(
            <div className="mt-3 bg-white/20 dark:bg-white/10 backdrop-blur-xl rounded-xl px-4 py-3 space-y-2">
              <div
                onClick={()=>setLead(lead==='Technical'?null:'Technical')}
                className="flex gap-2 text-orange-400 cursor-pointer"
              >
                <Crown className="w-4"/>Leads
              </div>

              {lead==='Technical'&&(
                <div
                  onClick={()=>select('Project Lead')}
                  className="ml-6 font-semibold cursor-pointer"
                >
                  Project Lead
                </div>
              )}

              <div onClick={()=>select('Web Dev')} className="flex gap-2 cursor-pointer">
                <Globe className="w-4"/>Web Dev
              </div>
              <div onClick={()=>select('App Dev')} className="flex gap-2 cursor-pointer">
                <Smartphone className="w-4"/>App Dev
              </div>
              <div onClick={()=>select('AI/ML')} className="flex gap-2 cursor-pointer">
                <Brain className="w-4"/>AI / ML
              </div>
            </div>
          )}
        </div>

        <div className="flex flex-col items-center">
          <div
            className="cursor-pointer flex flex-col items-center hover:scale-110 transition"
            onClick={()=>setOpen(open==='Corporate'?null:'Corporate')}
          >
            <Building2 className="w-20 h-20 text-emerald-500"/>
            Corporate <ChevronDown/>
          </div>

          {open==='Corporate'&&(
            <div className="mt-3 bg-white/20 dark:bg-white/10 backdrop-blur-xl rounded-xl px-4 py-3 space-y-2">
              <div onClick={()=>select('Sponsorship')} className="flex gap-2 cursor-pointer">
                <HandCoins className="w-4"/>Sponsorship
              </div>
              <div onClick={()=>select('Events')} className="flex gap-2 cursor-pointer">
                <Calendar className="w-4"/>Events
              </div>
            </div>
          )}
        </div>

        <div className="flex flex-col items-center">
          <div
            className="cursor-pointer flex flex-col items-center hover:scale-110 transition"
            onClick={()=>setOpen(open==='Media'?null:'Media')}
          >
            <Camera className="w-20 h-20 text-pink-500"/>
            Media <ChevronDown/>
          </div>

          {open==='Media'&&(
            <div className="mt-3 bg-white/20 dark:bg-white/10 backdrop-blur-xl rounded-xl px-4 py-3 space-y-2">
              <div
                onClick={()=>setLead(lead==='Media'?null:'Media')}
                className="flex gap-2 text-orange-400 cursor-pointer"
              >
                <Crown className="w-4"/>Leads
              </div>

              {lead==='Media'&&(
                <div
                  onClick={()=>select('Media Lead')}
                  className="ml-6 font-semibold cursor-pointer"
                >
                  Media Lead
                </div>
              )}

              <div onClick={()=>select('Creative')} className="flex gap-2 cursor-pointer">
                <Palette className="w-4"/>Creative
              </div>
              <div onClick={()=>select('Public Relations')} className="flex gap-2 cursor-pointer">
                <Megaphone className="w-4"/>PR
              </div>
            </div>
          )}
        </div>
      </div>

      {children}
    </section>
  );
}
