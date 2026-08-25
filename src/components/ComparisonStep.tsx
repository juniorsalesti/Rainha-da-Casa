import React, { useState } from 'react';
import { motion } from 'motion/react';
import { IMAGE_CONFIG } from '../config/funnelConfig';
import { soundFX } from '../utils/soundEffects';
import { X, Check, ArrowRight, Sparkles } from 'lucide-react';

interface ComparisonStepProps {
  onContinue: () => void;
}

export const ComparisonStep: React.FC<ComparisonStepProps> = ({ onContinue }) => {
  const [selectedSide, setSelectedSide] = useState<'right' | 'left'>('right');

  const handleSelectSide = (side: 'right' | 'left') => {
    setSelectedSide(side);
    soundFX.playPop();
  };

  const handleNext = () => {
    soundFX.playPop();
    onContinue();
  };

  const badItems = [
    'Tarefas acumuladas todos os dias',
    'Sensação constante de atraso',
    'Bagunça que volta horas depois',
    'Cansaço físico e mental constante',
    'Culpa por não conseguir dar conta',
  ];

  const goodItems = [
    'Rotina mais clara e previsível',
    'Casa muito mais fácil de manter',
    'Tarefas distribuídas com leveza',
    'Mais tempo livre para você',
    'Mais tranquilidade e paz no lar',
  ];

  return (
    <div className="w-full max-w-xl mx-auto px-4 py-6 sm:py-8 flex flex-col items-center">
      {/* Eyebrow */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-rose-100 border border-rose-200 rounded-full text-rose-800 text-xs font-bold uppercase tracking-wider mb-2"
      >
        <span>SUA ESCOLHA</span>
      </motion.div>

      {/* Main Title */}
      <motion.h2
        initial={{ opacity: 0, y: -6 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-xl sm:text-2xl md:text-3xl font-extrabold text-[#4C0519] text-center leading-tight font-heading"
      >
        DE QUE LADO VOCÊ QUER ESTAR?
      </motion.h2>

      <p className="text-stone-600 text-xs sm:text-sm text-center mt-1 mb-5">
        Toque no lado que você quer para a sua vida e rotina:
      </p>

      {/* Side-by-Side Comparison Cards */}
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Left Card: SEM O MÉTODO */}
        <motion.div
          whileTap={{ scale: 0.98 }}
          onClick={() => handleSelectSide('left')}
          className={`rounded-2xl p-4 sm:p-5 border-2 transition-all cursor-pointer flex flex-col ${
            selectedSide === 'left'
              ? 'border-stone-400 bg-stone-50 shadow-md ring-2 ring-stone-200'
              : 'border-stone-200 bg-white/70 opacity-70 hover:opacity-100'
          }`}
        >
          <div className="h-28 rounded-xl overflow-hidden mb-3 relative">
            <img
              src={IMAGE_CONFIG.messyHouse}
              alt="Casa desorganizada"
              className="w-full h-full object-cover filter grayscale-30"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-stone-900/30 flex items-center justify-center">
              <span className="text-xs font-bold text-white bg-black/60 px-2.5 py-1 rounded-md backdrop-blur-xs">
                SEM O MÉTODO
              </span>
            </div>
          </div>

          <h3 className="text-xs sm:text-sm font-bold text-stone-700 uppercase tracking-wider mb-2.5 text-center">
            VOCÊ SEM O MÉTODO
          </h3>

          <ul className="space-y-2 text-xs text-stone-600 flex-1">
            {badItems.map((item, idx) => (
              <li key={idx} className="flex items-start gap-1.5">
                <X className="w-3.5 h-3.5 text-rose-500 shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Right Card: COM O MÉTODO (Highlighted) */}
        <motion.div
          whileTap={{ scale: 0.98 }}
          onClick={() => handleSelectSide('right')}
          className={`rounded-2xl p-4 sm:p-5 border-2 transition-all cursor-pointer flex flex-col relative ${
            selectedSide === 'right'
              ? 'border-emerald-500 bg-emerald-50/70 shadow-lg ring-4 ring-emerald-200/70 scale-102'
              : 'border-emerald-200 bg-white hover:bg-emerald-50/40'
          }`}
        >
          {/* Recommendation tag */}
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-emerald-600 text-white text-[10px] sm:text-xs font-extrabold uppercase px-3 py-0.5 rounded-full shadow-xs flex items-center gap-1">
            <Sparkles className="w-3 h-3" />
            <span>VIDA LEVE E ORGANIZADA</span>
          </div>

          <div className="h-28 rounded-xl overflow-hidden mb-3 relative mt-1">
            <img
              src={IMAGE_CONFIG.organizedHouse}
              alt="Casa organizada e aconchegante"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-emerald-950/20 flex items-center justify-center">
              <span className="text-xs font-bold text-white bg-emerald-700/80 px-2.5 py-1 rounded-md backdrop-blur-xs">
                COM O MÉTODO
              </span>
            </div>
          </div>

          <h3 className="text-xs sm:text-sm font-bold text-emerald-900 uppercase tracking-wider mb-2.5 text-center">
            VOCÊ COM O MÉTODO
          </h3>

          <ul className="space-y-2 text-xs text-stone-800 flex-1">
            {goodItems.map((item, idx) => (
              <li key={idx} className="flex items-start gap-1.5 font-medium">
                <Check className="w-3.5 h-3.5 text-emerald-600 stroke-[3] shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>

      {/* Button */}
      <motion.button
        id="btn-confirm-side"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={handleNext}
        className="w-full mt-6 py-4 px-6 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-extrabold text-base rounded-2xl shadow-cta-green flex items-center justify-center gap-2 cursor-pointer transition-all uppercase tracking-wider"
      >
        <span>QUERO ESSA TRANQUILIDADE</span>
        <ArrowRight className="w-5 h-5" />
      </motion.button>
    </div>
  );
};
