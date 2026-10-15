import React from 'react';
import { LEARNING_OUTCOMES } from '../data/workshopData';
import { Eye, MessageSquare, Compass, Sparkles } from 'lucide-react';

export const WhatYoullLearn: React.FC = () => {
  const icons = [
    <Eye className="w-4 h-4 text-[#FFB703]" key="eye" />,
    <MessageSquare className="w-4 h-4 text-[#ff821e]" key="message" />,
    <Compass className="w-4 h-4 text-[#FF6B35]" key="compass" />,
    <Sparkles className="w-4 h-4 text-emerald-600" key="sparkles" />,
  ];

  return (
    <section id="learn" className="py-14 sm:py-20 bg-white border-y border-slate-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-10 sm:mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-[#ff821e] block mb-2">
            Practical Foundations
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0B1B3D] tracking-tight mb-3 [text-wrap:balance]">
            What you'll walk away with
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Volunteering is more than good intentions. Here are the four foundational capabilities you will practice during the 2-hour session.
          </p>
        </div>

        {/* 4 Cards in a single row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 lg:gap-5">
          {LEARNING_OUTCOMES.map((item, idx) => (
            <div
              key={item.number}
              className="relative p-5 rounded-2xl border border-slate-200 bg-[#FAF8F5]/70 hover:bg-[#FAF8F5] transition-all text-left shadow-xs hover:shadow-sm flex flex-col justify-between"
            >
              {/* Tape strip on top */}
              <div 
                className={`absolute -top-2.5 left-5 w-14 h-3.5 tape-strip ${idx % 2 === 0 ? '-rotate-1' : 'rotate-1'} opacity-80 pointer-events-none`} 
              />

              <div>
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-white shadow-xs border border-slate-100 flex items-center justify-center shrink-0">
                    {icons[idx]}
                  </div>
                  <span className="text-lg font-black text-slate-300 tabular-nums">
                    {item.number}
                  </span>
                </div>

                <h3 className="text-base font-bold text-[#0B1B3D] mb-1.5 leading-snug">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                  {item.body}
                </p>
              </div>

              {/* Hand-drawn note without pencil icon */}
              <div className="pt-2.5 border-t border-slate-200/60 mt-auto">
                <span className="handwritten text-base text-[#E76F51] font-bold block leading-tight">
                  {item.note}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
