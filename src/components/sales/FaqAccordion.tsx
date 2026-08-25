import React, { useState } from 'react';
import { FAQ_CONFIG } from '../../config/funnelConfig';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { soundFX } from '../../utils/soundEffects';

export const FaqAccordion: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    soundFX.playPop();
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full space-y-2.5">
      {FAQ_CONFIG.map((faq, idx) => {
        const isOpen = openIndex === idx;
        return (
          <div
            key={idx}
            className="rounded-2xl bg-white border border-rose-100 overflow-hidden shadow-xs transition-all"
          >
            <button
              type="button"
              onClick={() => toggle(idx)}
              className="w-full p-4 sm:p-4.5 text-left flex items-center justify-between gap-3 cursor-pointer hover:bg-rose-50/40 transition-colors"
            >
              <div className="flex items-center gap-2.5">
                <HelpCircle className="w-4 h-4 text-rose-500 shrink-0" />
                <span className="text-xs sm:text-sm font-bold text-[#4C0519] leading-snug">
                  {faq.question}
                </span>
              </div>
              <ChevronDown
                className={`w-4 h-4 text-stone-400 shrink-0 transition-transform duration-200 ${
                  isOpen ? 'rotate-180 text-rose-600' : ''
                }`}
              />
            </button>

            {isOpen && (
              <div className="px-4 pb-4 pt-1 text-xs sm:text-sm text-stone-600 leading-relaxed border-t border-rose-50 bg-rose-50/20">
                {faq.answer}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};
