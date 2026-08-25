import React from 'react';
import { motion } from 'motion/react';
import { IMAGE_CONFIG } from '../config/funnelConfig';
import { Sparkles, Home, Clock, Heart, ShieldCheck, Lock, ChevronRight, CheckCircle2 } from 'lucide-react';
import { soundFX } from '../utils/soundEffects';

interface LandingStepProps {
  onStart: () => void;
}

export const LandingStep: React.FC<LandingStepProps> = ({ onStart }) => {
  const handleStart = () => {
    soundFX.playPop();
    onStart();
  };

  return (
    <div className="w-full max-w-xl mx-auto px-4 py-6 sm:py-8 flex flex-col items-center">
      {/* Small Eyebrow Badge */}
      <motion.div
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-rose-100/80 border border-rose-200/70 text-rose-800 text-xs sm:text-sm font-semibold mb-4"
      >
        <Sparkles className="w-3.5 h-3.5 text-rose-600" />
        <span>DIAGNÓSTICO PERSONALIZADO DE ROTINA</span>
      </motion.div>

      {/* Main Headline */}
      <motion.h1
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.1 }}
        className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#4C0519] text-center leading-[1.2] tracking-tight font-heading"
      >
        TENHA UMA CASA ORGANIZADA <br />
        <span className="text-[#E11D48] underline decoration-rose-200 decoration-wavy decoration-2">
          SEM PASSAR O DIA INTEIRO ARRUMANDO
        </span>
      </motion.h1>

      {/* Subheadline */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.2 }}
        className="text-stone-600 text-center text-sm sm:text-base mt-3 sm:mt-4 leading-relaxed max-w-lg"
      >
        Aprenda a criar uma <span className="font-semibold text-stone-800">rotina simples</span> para manter a casa limpa, organizada e agradável sem viver presa às tarefas domésticas.
      </motion.p>

      {/* Hero Visual Mockup */}
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.25 }}
        className="relative w-full mt-6 rounded-2xl overflow-hidden shadow-soft border-2 border-rose-100/80 group"
      >
        <img
          src={IMAGE_CONFIG.landingHero}
          alt="Mulher com casa limpa e tranquila"
          className="w-full h-56 sm:h-64 object-cover object-center group-hover:scale-102 transition-transform duration-700"
          referrerPolicy="no-referrer"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-4">
          <div className="bg-white/95 backdrop-blur-xs rounded-xl p-2.5 px-3.5 shadow-md flex items-center gap-2.5 border border-rose-100">
            <span className="flex h-3 w-3 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
            </span>
            <p className="text-xs font-semibold text-stone-800">
              Mais de <span className="text-rose-600 font-bold">14.800 mulheres</span> já transformaram suas casas
            </p>
          </div>
        </div>
      </motion.div>

      {/* 3 Main Benefits Cards */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.35 }}
        className="w-full grid grid-cols-1 gap-3 mt-6"
      >
        {/* Benefit 1 */}
        <div className="p-4 rounded-xl bg-white border border-rose-100 shadow-xs flex items-start gap-3.5 hover:border-rose-200 transition-colors">
          <div className="w-10 h-10 rounded-xl bg-rose-50 border border-rose-100 flex items-center justify-center text-rose-600 shrink-0 text-xl">
            🏠
          </div>
          <div>
            <h2 className="text-sm sm:text-base font-bold text-[#4C0519] uppercase tracking-wide">
              CASA ORGANIZADA
            </h2>
            <p className="text-xs sm:text-sm text-stone-600 mt-0.5 leading-snug">
              Uma rotina que ajuda a manter tudo no lugar sem desespero.
            </p>
          </div>
        </div>

        {/* Benefit 2 */}
        <div className="p-4 rounded-xl bg-white border border-rose-100 shadow-xs flex items-start gap-3.5 hover:border-rose-200 transition-colors">
          <div className="w-10 h-10 rounded-xl bg-amber-50 border border-amber-100 flex items-center justify-center text-amber-600 shrink-0 text-xl">
            ⏰
          </div>
          <div>
            <h2 className="text-sm sm:text-base font-bold text-[#4C0519] uppercase tracking-wide">
              ROTINA MAIS LEVE
            </h2>
            <p className="text-xs sm:text-sm text-stone-600 mt-0.5 leading-snug">
              Saiba exatamente o que fazer sem perder horas pensando.
            </p>
          </div>
        </div>

        {/* Benefit 3 */}
        <div className="p-4 rounded-xl bg-white border border-rose-100 shadow-xs flex items-start gap-3.5 hover:border-rose-200 transition-colors">
          <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600 shrink-0 text-xl">
            ✨
          </div>
          <div>
            <h2 className="text-sm sm:text-base font-bold text-[#4C0519] uppercase tracking-wide">
              CASA CHEIROSA E AGRADÁVEL
            </h2>
            <p className="text-xs sm:text-sm text-stone-600 mt-0.5 leading-snug">
              Métodos simples para cuidar da casa sem sobrecarga mental.
            </p>
          </div>
        </div>
      </motion.div>

      {/* Discovery Prompt */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.45 }}
        className="text-stone-700 text-center text-xs sm:text-sm mt-6 leading-relaxed bg-rose-50/70 p-3.5 rounded-xl border border-rose-100"
      >
        Descubra em poucos minutos qual é o principal motivo que faz sua casa voltar à bagunça e veja qual caminho pode funcionar melhor para sua rotina.
      </motion.p>

      {/* Main High-Converting CTA Button */}
      <motion.button
        id="btn-start-quiz"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={handleStart}
        className="w-full mt-5 py-4 px-6 bg-gradient-to-r from-rose-600 via-rose-500 to-pink-600 hover:from-rose-700 hover:to-pink-700 text-white font-extrabold text-base sm:text-lg rounded-2xl shadow-cta flex items-center justify-center gap-2 cursor-pointer transition-all uppercase tracking-wider"
      >
        <span>QUERO DESCOBRIR</span>
        <ChevronRight className="w-5 h-5 stroke-[2.5]" />
      </motion.button>

      {/* Trust Badges */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.55 }}
        className="flex flex-wrap items-center justify-center gap-3 sm:gap-5 mt-4 text-[11px] sm:text-xs text-stone-500 font-medium"
      >
        <div className="flex items-center gap-1">
          <Clock className="w-3.5 h-3.5 text-rose-500" />
          <span>Leva poucos minutos</span>
        </div>
        <div className="flex items-center gap-1">
          <Lock className="w-3.5 h-3.5 text-rose-500" />
          <span>Respostas privadas</span>
        </div>
        <div className="flex items-center gap-1">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
          <span>Seus dados protegidos</span>
        </div>
      </motion.div>
    </div>
  );
};
