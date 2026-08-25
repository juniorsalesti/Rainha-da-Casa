import React from 'react';
import { motion } from 'motion/react';
import { soundFX } from '../utils/soundEffects';
import { Brain, CheckCheck, Sparkles, HeartHandshake, ShieldAlert } from 'lucide-react';

interface MentalLoadStepProps {
  onContinue: () => void;
}

export const MentalLoadStep: React.FC<MentalLoadStepProps> = ({ onContinue }) => {
  const handleNext = () => {
    soundFX.playPop();
    onContinue();
  };

  const mentalItems = [
    { text: 'Lembrar constantemente o que precisa ser lavado e estendido', emoji: '🧺' },
    { text: 'Checar o que está acabando na despensa e fazer lista de compras', emoji: '🛒' },
    { text: 'Decidir todos os dias o que preparar para almoço e jantar', emoji: '🍳' },
    { text: 'Controlar quando cada ambiente precisa de faxina ou manutenção', emoji: '📅' },
    { text: 'Saber onde está cada objeto que as outras pessoas da casa procuram', emoji: '🔑' },
    { text: 'Gerenciar a casa inteira na cabeça sem conseguir relaxar de verdade', emoji: '🤯' },
  ];

  return (
    <div className="w-full max-w-xl mx-auto px-4 py-6 sm:py-8 flex flex-col items-center">
      {/* Eyebrow */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="inline-flex items-center gap-1.5 px-3 py-1 bg-rose-100 border border-rose-200 rounded-full text-rose-800 text-xs font-bold uppercase tracking-wider mb-3"
      >
        <Brain className="w-3.5 h-3.5 text-rose-600" />
        <span>O PESO INVISÍVEL</span>
      </motion.div>

      {/* Main Headline */}
      <motion.h2
        initial={{ opacity: 0, y: -6 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-xl sm:text-2xl md:text-3xl font-extrabold text-[#4C0519] text-center leading-tight font-heading"
      >
        VOCÊ NÃO ESTÁ CANSADA SÓ DE LIMPAR. <br />
        <span className="text-[#E11D48]">
          VOCÊ ESTÁ CANSADA DE TER QUE PENSAR EM TUDO.
        </span>
      </motion.h2>

      <p className="text-stone-600 text-xs sm:text-sm text-center mt-2.5 max-w-md">
        A organização física é apenas 20% do trabalho. Os outros 80% são a <strong className="text-stone-900">carga mental invisível</strong> de planejar, lembrar e gerenciar a casa sem trégua.
      </p>

      {/* Mental Load Checklist Cards */}
      <div className="w-full grid grid-cols-1 gap-2.5 mt-5">
        {mentalItems.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: -8 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: idx * 0.06 }}
            className="p-3.5 rounded-xl bg-white border border-rose-100/90 shadow-xs flex items-center gap-3"
          >
            <span className="text-xl shrink-0">{item.emoji}</span>
            <span className="text-xs sm:text-sm text-stone-700 font-medium leading-snug">
              {item.text}
            </span>
          </motion.div>
        ))}
      </div>

      {/* Research / Academic Placeholder Box */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.45 }}
        className="w-full mt-5 p-4 rounded-xl bg-purple-50/60 border border-purple-200/70 text-purple-950 text-xs leading-relaxed"
      >
        <div className="flex items-center gap-1.5 font-bold text-purple-900 uppercase tracking-wider text-[11px] mb-1">
          <ShieldAlert className="w-3.5 h-3.5 text-purple-600" />
          <span>ESTUDO SOBRE A CARGA MENTAL DOMÉSTICA</span>
        </div>
        <p className="text-stone-600 italic">
          [Estudos sobre economia do cuidado e psicologia demonstram que a sobrecarga mental feminina não vem da execução física, mas do estado de alerta ininterrupto de gerenciar um lar sem ferramentas sistemáticas].
        </p>
      </motion.div>

      {/* High-Empathy Resonance CTA Button */}
      <motion.button
        id="btn-mental-load-agree"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={handleNext}
        className="w-full mt-6 py-4 px-6 bg-gradient-to-r from-rose-600 via-rose-500 to-pink-600 hover:from-rose-700 hover:to-pink-700 text-white font-extrabold text-base rounded-2xl shadow-cta flex items-center justify-center gap-2 cursor-pointer transition-all uppercase tracking-wider"
      >
        <CheckCheck className="w-5 h-5 stroke-[2.5]" />
        <span>É EXATAMENTE ISSO</span>
      </motion.button>
    </div>
  );
};
