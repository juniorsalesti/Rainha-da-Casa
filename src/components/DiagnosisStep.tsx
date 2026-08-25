import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import confetti from 'canvas-confetti';
import { DiagnosisProfile } from '../types/funnel';
import { soundFX } from '../utils/soundEffects';
import { Sparkles, CheckCircle2, ArrowRight, Gauge, AlertTriangle } from 'lucide-react';

interface DiagnosisStepProps {
  diagnosis: DiagnosisProfile;
  onProceedToSales: () => void;
}

export const DiagnosisStep: React.FC<DiagnosisStepProps> = ({
  diagnosis,
  onProceedToSales,
}) => {
  useEffect(() => {
    // Launch celebratory confetti when diagnosis is ready
    try {
      confetti({
        particleCount: 60,
        spread: 60,
        origin: { y: 0.6 },
        colors: ['#E11D48', '#F43F5E', '#10B981', '#F59E0B'],
      });
    } catch {
      // Ignore
    }
  }, []);

  const handleNext = () => {
    soundFX.playPop();
    onProceedToSales();
  };

  return (
    <div className="w-full max-w-xl mx-auto px-4 py-6 sm:py-8 flex flex-col items-center">
      {/* Top Badge */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-emerald-100 border border-emerald-200 rounded-full text-emerald-900 text-xs font-bold uppercase tracking-wider mb-2"
      >
        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
        <span>DIAGNÓSTICO CONCLUÍDO</span>
      </motion.div>

      {/* Headline */}
      <motion.h2
        initial={{ opacity: 0, y: -6 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-lg sm:text-xl font-bold text-stone-600 text-center uppercase tracking-wide"
      >
        SEU DIAGNÓSTICO ESTÁ PRONTO
      </motion.h2>

      {/* Diagnosis Result Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.1 }}
        className="w-full bg-gradient-to-b from-rose-50/90 via-white to-rose-50/40 rounded-3xl p-5 sm:p-6 border-2 border-rose-200/90 shadow-soft mt-3 relative overflow-hidden text-center"
      >
        <span className="text-xs font-bold uppercase tracking-widest text-rose-600 block mb-1">
          SEU RESULTADO:
        </span>
        <h3 className="text-2xl sm:text-3xl font-black text-[#4C0519] leading-tight font-heading">
          {diagnosis.title}
        </h3>
        <p className="text-xs sm:text-sm text-stone-500 font-medium mt-1">
          {diagnosis.subtitle}
        </p>

        {/* Visual Stress Scale Gauge */}
        <div className="w-full mt-6 pt-5 border-t border-rose-100">
          <div className="flex items-center justify-between text-[11px] sm:text-xs font-bold mb-2">
            <span className="text-emerald-700">TRANQUILA</span>
            <span className="text-amber-700">NO SUFOCO</span>
            <span className="text-rose-700">SOBRECARREGADA</span>
          </div>

          <div className="relative w-full h-3.5 bg-gradient-to-r from-emerald-400 via-amber-400 to-rose-600 rounded-full p-0.5 shadow-inner">
            <motion.div
              initial={{ left: '0%' }}
              animate={{ left: `${diagnosis.stressPercent}%` }}
              transition={{ duration: 1, ease: 'easeOut', delay: 0.3 }}
              className="absolute -top-2.5 -translate-x-1/2 flex flex-col items-center"
            >
              <div className="w-8 h-8 rounded-full bg-white border-2 border-rose-600 shadow-md flex items-center justify-center text-xs font-black text-rose-900">
                📍
              </div>
            </motion.div>
          </div>

          <div className="mt-3 flex items-center justify-center gap-1.5 text-xs font-semibold text-stone-700">
            <AlertTriangle className="w-3.5 h-3.5 text-rose-600" />
            <span>Nível atual de sobrecarga: <strong className="text-rose-800">{diagnosis.stressLevel} ({diagnosis.stressPercent}%)</strong></span>
          </div>
        </div>

        {/* Diagnosis Detailed Narrative */}
        <div className="mt-5 p-4 rounded-2xl bg-white border border-rose-100 text-left text-xs sm:text-sm text-stone-700 leading-relaxed shadow-xs">
          <p className="font-normal">{diagnosis.description}</p>
        </div>

        {/* Tailored Benefits Intro */}
        <div className="mt-6 text-left">
          <p className="text-xs sm:text-sm font-bold text-[#4C0519] leading-snug">
            O Método Rainha da Casa foi pensado para ajudar justamente nessa parte da sua rotina:
          </p>

          <div className="space-y-2.5 mt-3">
            {diagnosis.personalizedBenefits.map((benefit, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 + idx * 0.1 }}
                className="flex items-start gap-2.5 p-3 rounded-xl bg-emerald-50/70 border border-emerald-200/80 text-xs sm:text-sm text-stone-800"
              >
                <CheckCircle2 className="w-4 h-4 text-emerald-600 stroke-[3] shrink-0 mt-0.5" />
                <span className="font-medium leading-snug">{benefit}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* CTA Button */}
      <motion.button
        id="btn-see-solution"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={handleNext}
        className="w-full mt-6 py-4 px-6 bg-gradient-to-r from-emerald-600 via-emerald-500 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-extrabold text-base sm:text-lg rounded-2xl shadow-cta-green flex items-center justify-center gap-2 cursor-pointer transition-all uppercase tracking-wider"
      >
        <span>VER MINHA SOLUÇÃO</span>
        <ArrowRight className="w-5 h-5" />
      </motion.button>

      <p className="text-[11px] text-stone-500 text-center mt-3">
        Plano de ação e materiais liberados para sua consulta
      </p>
    </div>
  );
};
