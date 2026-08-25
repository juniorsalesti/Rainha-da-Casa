import React from 'react';
import { motion } from 'motion/react';
import { soundFX } from '../utils/soundEffects';
import { Sparkles, Heart, ArrowRight, CheckCircle2 } from 'lucide-react';

interface TransformationStepProps {
  onContinue: () => void;
}

export const TransformationStep: React.FC<TransformationStepProps> = ({ onContinue }) => {
  const handleNext = () => {
    soundFX.playPop();
    onContinue();
  };

  const cards = [
    {
      emoji: '🏠',
      title: 'CASA MAIS ORGANIZADA',
      text: 'Você acorda sabendo o que precisa ser feito e consegue manter a organização sem começar tudo do zero.',
      highlight: 'Sem bagunça que volta',
      bgColor: 'bg-rose-50/80',
      borderColor: 'border-rose-200/80',
      textColor: 'text-[#4C0519]',
    },
    {
      emoji: '🍽️',
      title: 'COZINHA MAIS LEVE',
      text: 'Você sabe o que preparar com antecedência e consegue organizar melhor sua rotina de refeições sem desperdício.',
      highlight: 'Almoço e jantar resolvidos',
      bgColor: 'bg-amber-50/80',
      borderColor: 'border-amber-200/80',
      textColor: 'text-amber-950',
    },
    {
      emoji: '🕊️',
      title: 'MAIS TEMPO PARA VOCÊ',
      text: 'Menos tempo correndo atrás da casa e mais espaço para descansar, cuidar de você ou aproveitar sua família.',
      highlight: 'Fins de semana livres',
      bgColor: 'bg-emerald-50/80',
      borderColor: 'border-emerald-200/80',
      textColor: 'text-emerald-950',
    },
  ];

  return (
    <div className="w-full max-w-xl mx-auto px-4 py-6 sm:py-8 flex flex-col items-center">
      {/* Eyebrow */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-rose-100 border border-rose-200 rounded-full text-rose-800 text-xs font-bold uppercase tracking-wider mb-3"
      >
        <Sparkles className="w-3.5 h-3.5 text-rose-600" />
        <span>IMAGINE DAQUI A 30 DIAS...</span>
      </motion.div>

      {/* Main Headline */}
      <motion.h2
        initial={{ opacity: 0, y: -6 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-xl sm:text-2xl md:text-3xl font-extrabold text-[#4C0519] text-center leading-tight font-heading max-w-md"
      >
        COMO SERIA SUA VIDA SE A CASA COMEÇASSE A <br />
        <span className="text-[#E11D48] underline decoration-rose-300">
          FUNCIONAR A SEU FAVOR?
        </span>
      </motion.h2>

      <p className="text-stone-600 text-xs sm:text-sm text-center mt-2 max-w-sm">
        Uma nova realidade está ao seu alcance com pequenos ajustes sistemáticos.
      </p>

      {/* 3 Vision Cards */}
      <div className="w-full space-y-3.5 mt-6">
        {cards.map((card, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            className={`p-4 sm:p-5 rounded-2xl ${card.bgColor} border ${card.borderColor} shadow-xs relative overflow-hidden`}
          >
            <div className="flex items-start gap-3.5">
              <div className="text-3xl shrink-0 p-2 bg-white/90 rounded-xl shadow-xs">
                {card.emoji}
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <h3 className={`text-sm sm:text-base font-bold ${card.textColor} tracking-wide`}>
                    {card.title}
                  </h3>
                  <span className="text-[10px] sm:text-xs font-semibold px-2 py-0.5 rounded-full bg-white/80 text-stone-700 border border-stone-200/50">
                    {card.highlight}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-stone-700 mt-1 leading-relaxed">
                  {card.text}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* CTA Button */}
      <motion.button
        id="btn-want-this-life"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={handleNext}
        className="w-full mt-6 py-4 px-6 bg-gradient-to-r from-rose-600 via-pink-600 to-rose-600 hover:from-rose-700 hover:to-pink-700 text-white font-extrabold text-base rounded-2xl shadow-cta flex items-center justify-center gap-2 cursor-pointer transition-all uppercase tracking-wider"
      >
        <Heart className="w-5 h-5 fill-white text-white" />
        <span>EU QUERO ESSA VIDA</span>
      </motion.button>
    </div>
  );
};
