import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Question, QuestionOption } from '../types/funnel';
import { soundFX } from '../utils/soundEffects';
import { CheckCircle2 } from 'lucide-react';

interface QuestionStepProps {
  question: Question;
  currentQuestionIndex: number;
  totalQuestions: number;
  onAnswer: (option: QuestionOption) => void;
}

export const QuestionStep: React.FC<QuestionStepProps> = ({
  question,
  currentQuestionIndex,
  totalQuestions,
  onAnswer,
}) => {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const handleSelect = (option: QuestionOption) => {
    if (selectedId) return; // Prevent double taps during auto-advance
    setSelectedId(option.id);
    soundFX.playPop();

    // Auto advance after slight highlight animation (350ms)
    setTimeout(() => {
      onAnswer(option);
      setSelectedId(null);
    }, 360);
  };

  return (
    <div className="w-full max-w-xl mx-auto px-4 py-6 sm:py-8 flex flex-col items-center">
      {/* Question Counter Pill */}
      <motion.div
        key={`badge-${question.id}`}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="px-3 py-1 bg-rose-50 border border-rose-200/80 rounded-full text-rose-800 text-xs font-bold uppercase tracking-wider mb-3"
      >
        Pergunta {currentQuestionIndex + 1} de {totalQuestions}
      </motion.div>

      {/* Question Title */}
      <motion.h2
        key={`title-${question.id}`}
        initial={{ opacity: 0, y: -6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="text-xl sm:text-2xl font-bold text-[#4C0519] text-center leading-snug font-heading max-w-md"
      >
        {question.title}
      </motion.h2>

      {/* Subtitle if any */}
      {question.subtitle && (
        <motion.p
          key={`subtitle-${question.id}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-xs sm:text-sm text-stone-500 text-center mt-1.5 mb-5"
        >
          {question.subtitle}
        </motion.p>
      )}

      {/* Optional Context Image (e.g. Question 5) */}
      {question.image && (
        <motion.div
          key={`img-${question.id}`}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="w-full h-40 sm:h-48 rounded-xl overflow-hidden mb-5 border border-rose-100 shadow-xs"
        >
          <img
            src={question.image}
            alt="Ambiente doméstico"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </motion.div>
      )}

      {/* Option Cards */}
      <div className="w-full flex flex-col gap-3 mt-3">
        <AnimatePresence mode="wait">
          {question.options.map((option, idx) => {
            const isSelected = selectedId === option.id;
            return (
              <motion.button
                key={option.id}
                id={`option-${option.id}`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.25, delay: idx * 0.06 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => handleSelect(option)}
                className={`w-full p-4 sm:p-5 rounded-2xl text-left flex items-center justify-between border-2 transition-all cursor-pointer shadow-xs ${
                  isSelected
                    ? 'bg-rose-50 border-rose-500 ring-4 ring-rose-200/60 scale-[1.01]'
                    : 'bg-white border-rose-100/90 hover:border-rose-300 hover:bg-rose-50/30'
                }`}
              >
                <div className="flex items-center gap-3.5 sm:gap-4 pr-2">
                  {option.emoji && (
                    <span className="text-2xl sm:text-3xl shrink-0 select-none">
                      {option.emoji}
                    </span>
                  )}
                  <span
                    className={`text-sm sm:text-base font-semibold leading-snug ${
                      isSelected ? 'text-rose-950 font-bold' : 'text-stone-800'
                    }`}
                  >
                    {option.text}
                  </span>
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
        </AnimatePresence>
      </div>

      <p className="text-[11px] sm:text-xs text-stone-400 text-center mt-6">
        Toque na opção que mais descreve sua rotina para avançar automaticamente
      </p>
    </div>
  );
};
