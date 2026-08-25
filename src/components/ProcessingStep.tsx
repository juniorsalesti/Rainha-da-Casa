import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { QUIZ_CONFIG } from '../config/funnelConfig';
import { soundFX } from '../utils/soundEffects';
import { Sparkles, Brain, Cpu, CheckCircle2 } from 'lucide-react';

interface ProcessingStepProps {
  onComplete: () => void;
}

export const ProcessingStep: React.FC<ProcessingStepProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [messageIndex, setMessageIndex] = useState(0);

  const messages = [
    'Identificando seu principal desafio...',
    'Analisando sua rotina e carga mental...',
    'Cruzando dados com o método de manutenção...',
    'Preparando seu diagnóstico personalizado...',
    'Seu resultado está quase pronto...',
  ];

  useEffect(() => {
    const totalDuration = QUIZ_CONFIG.processingDurationMs || 3000;
    const intervalTime = 35;
    const increment = 100 / (totalDuration / intervalTime);

    const timer = setInterval(() => {
      setProgress((prev) => {
        const next = prev + increment;
        if (next >= 100) {
          clearInterval(timer);
          soundFX.playSuccess();
          setTimeout(() => {
            onComplete();
          }, 300);
          return 100;
        }

        // Cycle through messages
        const currentMsgIdx = Math.min(
          messages.length - 1,
          Math.floor((next / 100) * messages.length)
        );
        setMessageIndex(currentMsgIdx);

        return next;
      });
    }, intervalTime);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <div className="w-full max-w-md mx-auto px-4 py-16 sm:py-24 flex flex-col items-center justify-center text-center">
      {/* Animated Glowing Icon */}
      <div className="relative mb-6">
        <motion.div
          animate={{ scale: [1, 1.15, 1], rotate: [0, 5, -5, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="w-20 h-20 rounded-3xl bg-gradient-to-tr from-rose-500 via-pink-500 to-rose-600 flex items-center justify-center text-white shadow-cta relative z-10"
        >
          <Sparkles className="w-10 h-10 animate-spin-slow" />
        </motion.div>
        <div className="absolute inset-0 bg-rose-400/40 rounded-3xl blur-xl animate-pulse"></div>
      </div>

      {/* Title */}
      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-xl sm:text-2xl font-black text-[#4C0519] uppercase tracking-wide font-heading"
      >
        ANALISANDO SUAS RESPOSTAS
      </motion.h2>

      <p className="text-stone-600 text-xs sm:text-sm mt-2 max-w-xs">
        Cruzando suas respostas com os desafios mais comuns da rotina doméstica...
      </p>

      {/* Progress Bar and Percent */}
      <div className="w-full mt-8 bg-rose-100/80 rounded-full h-4 p-1 shadow-inner border border-rose-200 overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-rose-500 via-pink-500 to-emerald-500 rounded-full shadow-xs"
          style={{ width: `${Math.floor(progress)}%` }}
        />
      </div>

      <div className="flex justify-between w-full text-xs font-bold text-stone-500 mt-2 px-1">
        <span>Processando</span>
        <span className="text-rose-700 font-extrabold">{Math.floor(progress)}%</span>
      </div>

      {/* Dynamic Status Text */}
      <motion.div
        key={messageIndex}
        initial={{ opacity: 0, y: 4 }}
        animate={{ opacity: 1, y: 0 }}
        className="mt-6 inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-rose-100 shadow-xs text-xs font-semibold text-rose-900"
      >
        <span className="w-2 h-2 rounded-full bg-rose-500 animate-ping"></span>
        <span>{messages[messageIndex]}</span>
      </motion.div>
    </div>
  );
};
