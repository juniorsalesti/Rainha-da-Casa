import React from 'react';
import { motion } from 'motion/react';
import { soundFX } from '../utils/soundEffects';
import { ArrowRight, PieChart, Lightbulb } from 'lucide-react';

interface EducationStepProps {
  onContinue: () => void;
}

export const EducationStep: React.FC<EducationStepProps> = ({ onContinue }) => {
  const handleNext = () => {
    soundFX.playPop();
    onContinue();
  };

  const chartData = [
    { label: 'Refazendo tarefas que já tinham sido feitas', percent: 47, color: 'from-rose-500 to-rose-600', bg: 'bg-rose-50', text: 'text-rose-700' },
    { label: 'Tentando decidir por onde começar', percent: 32, color: 'from-amber-500 to-amber-600', bg: 'bg-amber-50', text: 'text-amber-700' },
    { label: 'Falta de uma sequência diária previsível', percent: 21, color: 'from-purple-500 to-purple-600', bg: 'bg-purple-50', text: 'text-purple-700' },
  ];

  return (
    <div className="w-full max-w-xl mx-auto px-4 py-6 sm:py-8 flex flex-col items-center">
      {/* Eyebrow */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="inline-flex items-center gap-1.5 px-3 py-1 bg-amber-50 border border-amber-200 rounded-full text-amber-800 text-xs font-bold uppercase tracking-wider mb-3"
      >
        <Lightbulb className="w-3.5 h-3.5 text-amber-600" />
        <span>PONTO DE VIRADA</span>
      </motion.div>

      {/* Main Title */}
      <motion.h2
        initial={{ opacity: 0, y: -6 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-xl sm:text-2xl md:text-3xl font-extrabold text-[#4C0519] text-center leading-tight font-heading"
      >
        NÃO É FALTA DE VONTADE. <br />
        <span className="text-[#E11D48]">É FALTA DE UM SISTEMA.</span>
      </motion.h2>

      {/* Narrative Card */}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="w-full bg-white rounded-2xl p-5 sm:p-6 border border-rose-100 shadow-soft mt-5 text-stone-700 text-sm sm:text-base leading-relaxed space-y-3"
      >
        <p>
          Quando você tenta cuidar da casa <span className="font-semibold text-rose-900">apenas quando percebe que tudo acumulou</span>, cada tarefa parece muito maior e mais pesada do que realmente é.
        </p>
        <p>
          Você acaba gastando a maior parte da sua energia <span className="font-semibold text-[#4C0519]">refazendo o que já tinha feito</span>, tentando decidir por onde começar e correndo sem parar atrás da bagunça.
        </p>
      </motion.div>

      {/* Statistical / Energy Distribution Visual Graphic */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="w-full bg-rose-50/70 border border-rose-200/70 rounded-2xl p-4 sm:p-5 mt-5"
      >
        <div className="flex items-center gap-2 mb-4">
          <PieChart className="w-4 h-4 text-rose-600" />
          <h3 className="text-xs font-bold uppercase tracking-wider text-[#4C0519]">
            Para onde vai a energia gasta na rotina sem método:
          </h3>
        </div>

        <div className="space-y-3.5">
          {chartData.map((item, index) => (
            <div key={index} className="space-y-1.5">
              <div className="flex justify-between text-xs sm:text-sm font-medium text-stone-700">
                <span>{item.label}</span>
                <span className={`font-bold ${item.text}`}>{item.percent}%</span>
              </div>
              <div className="w-full h-3 bg-white rounded-full overflow-hidden border border-rose-100 shadow-inner">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${item.percent}%` }}
                  transition={{ duration: 0.8, delay: 0.2 + index * 0.15, ease: 'easeOut' }}
                  className={`h-full bg-gradient-to-r ${item.color} rounded-full`}
                />
              </div>
            </div>
          ))}
        </div>

        <p className="text-[10px] sm:text-[11px] text-stone-400 mt-3.5 italic text-center">
          *Estimativa baseada em relatos e padrões observados de sobrecarga doméstica.
        </p>
      </motion.div>

      {/* Solution Insight */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.35 }}
        className="w-full bg-emerald-50/80 border border-emerald-200/80 rounded-xl p-4 mt-5 text-emerald-950 text-xs sm:text-sm text-center font-medium leading-relaxed"
      >
        ✨ <span className="font-bold">A boa notícia:</span> Quando existe uma rotina simples e organizada, a manutenção da casa deixa de depender de força de vontade o tempo inteiro.
      </motion.div>

      {/* Action Button */}
      <motion.button
        id="btn-edu-continue"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={handleNext}
        className="w-full mt-6 py-4 px-6 bg-gradient-to-r from-rose-600 to-pink-600 hover:from-rose-700 hover:to-pink-700 text-white font-extrabold text-base rounded-2xl shadow-cta flex items-center justify-center gap-2 cursor-pointer transition-all uppercase tracking-wider"
      >
        <span>CONTINUAR</span>
        <ArrowRight className="w-5 h-5" />
      </motion.button>
    </div>
  );
};
