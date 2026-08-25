import React, { useState } from 'react';
import { motion } from 'motion/react';
import { soundFX } from '../utils/soundEffects';
import { Flame, Heart, CheckCircle2, Sparkles } from 'lucide-react';

interface CommitmentStepProps {
  onCommit: (commitment: string) => void;
}

export const CommitmentStep: React.FC<CommitmentStepProps> = ({ onCommit }) => {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const options = [
    {
      id: 'opt1',
      emoji: '🔥',
      text: 'Sim, estou decidida',
      badge: 'Pronta para agir',
    },
    {
      id: 'opt2',
      emoji: '💗',
      text: 'Sim, se for fácil de seguir',
      badge: 'Passo a passo simples',
    },
    {
      id: 'opt3',
      emoji: '✅',
      text: 'Com certeza',
      badge: 'Sem complicação',
    },
  ];

  const handleSelect = (opt: typeof options[0]) => {
    if (selectedId) return;
    setSelectedId(opt.id);
    soundFX.playPop();

    setTimeout(() => {
      onCommit(opt.text);
    }, 350);
  };

  return (
    <div className="w-full max-w-xl mx-auto px-4 py-6 sm:py-8 flex flex-col items-center">
      {/* Eyebrow */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-rose-100 border border-rose-200 rounded-full text-rose-800 text-xs font-bold uppercase tracking-wider mb-3"
      >
        <Sparkles className="w-3.5 h-3.5 text-rose-600" />
        <span>SEU COMPROMISSO</span>
      </motion.div>

      {/* Headline */}
      <motion.h2
        initial={{ opacity: 0, y: -6 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-xl sm:text-2xl md:text-3xl font-extrabold text-[#4C0519] text-center leading-tight font-heading max-w-md"
      >
        Se existisse um caminho simples para organizar sua rotina, <br />
        <span className="text-[#E11D48]">você começaria hoje?</span>
      </motion.h2>

      <p className="text-stone-600 text-xs sm:text-sm text-center mt-2 mb-6">
        Seu diagnóstico personalizado está pronto e será liberado a seguir:
      </p>

      {/* Commitment Options */}
      <div className="w-full space-y-3">
        {options.map((opt, idx) => {
          const isSelected = selectedId === opt.id;
          return (
            <motion.button
              key={opt.id}
              id={`btn-commit-${opt.id}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => handleSelect(opt)}
              className={`w-full p-4 sm:p-5 rounded-2xl text-left flex items-center justify-between border-2 transition-all cursor-pointer shadow-xs ${
                isSelected
                  ? 'bg-rose-50 border-rose-500 ring-4 ring-rose-200/60 scale-[1.01]'
                  : 'bg-white border-rose-100/90 hover:border-rose-300 hover:bg-rose-50/30'
              }`}
            >
              <div className="flex items-center gap-3.5 sm:gap-4">
                <span className="text-2xl sm:text-3xl select-none shrink-0">{opt.emoji}</span>
                <div>
                  <span className={`text-base sm:text-lg font-bold block ${isSelected ? 'text-rose-950' : 'text-stone-900'}`}>
                    {opt.text}
                  </span>
                  <span className="text-xs text-rose-600 font-medium">{opt.badge}</span>
                </div>
              </div>

              <div
                className={`w-6 h-6 rounded-full shrink-0 flex items-center justify-center border-2 transition-all ${
                  isSelected
                    ? 'bg-rose-600 border-rose-600 text-white'
                    : 'border-rose-200 bg-rose-50/50 text-transparent'
                }`}
              >
                <CheckCircle2 className="w-4 h-4 stroke-[3]" />
              </div>
            </motion.button>
          );
        })}
      </div>
    </div>
  );
};
