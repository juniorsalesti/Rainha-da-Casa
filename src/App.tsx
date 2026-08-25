import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { FunnelStep, QuestionOption, DiagnosisProfile } from './types/funnel';
import {
  QUESTION_CONFIG,
  DIAGNOSIS_CONFIG,
  CHECKOUT_CONFIG,
  QUIZ_CONFIG,
} from './config/funnelConfig';
import { trackEvent } from './utils/analytics';
import { Header } from './components/Header';
import { LandingStep } from './components/LandingStep';
import { QuestionStep } from './components/QuestionStep';
import { EducationStep } from './components/EducationStep';
import { MentalLoadStep } from './components/MentalLoadStep';
import { TransformationStep } from './components/TransformationStep';
import { ComparisonStep } from './components/ComparisonStep';
import { CommitmentStep } from './components/CommitmentStep';
import { ProcessingStep } from './components/ProcessingStep';
import { DiagnosisStep } from './components/DiagnosisStep';
import { SalesPitchStep } from './components/SalesPitchStep';

export default function App() {
  const [currentStep, setCurrentStep] = useState<FunnelStep>('landing');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [userAnswers, setUserAnswers] = useState<QuestionOption[]>([]);
  const [calculatedDiagnosis, setCalculatedDiagnosis] = useState<DiagnosisProfile>(
    DIAGNOSIS_CONFIG.overwhelmed
  );
  const [userCommitment, setUserCommitment] = useState<string>('');

  // Calculate progress percentage for header
  const getProgressPercentage = (): number => {
    switch (currentStep) {
      case 'landing':
        return 0;
      case 'question':
        return Math.round(((currentQuestionIndex + 1) / (QUESTION_CONFIG.length + 6)) * 100);
      case 'education':
        return 55;
      case 'mental_load':
        return 65;
      case 'transformation':
        return 75;
      case 'comparison':
        return 85;
      case 'commitment':
        return 92;
      case 'processing':
        return 98;
      case 'diagnosis':
      case 'sales':
        return 100;
      default:
        return 0;
    }
  };

  const calculateDiagnosisProfile = (answers: QuestionOption[]): DiagnosisProfile => {
    const tagCounts: Record<string, number> = {
      energy: 0,
      maintenance: 0,
      routine: 0,
      overwhelmed: 0,
    };

    answers.forEach((ans) => {
      if (ans.tag && tagCounts[ans.tag] !== undefined) {
        tagCounts[ans.tag] += 1;
      }
    });

    let topTag = 'overwhelmed';
    let maxCount = -1;

    Object.entries(tagCounts).forEach(([tag, count]) => {
      if (count > maxCount) {
        maxCount = count;
        topTag = tag;
      }
    });

    return DIAGNOSIS_CONFIG[topTag] || DIAGNOSIS_CONFIG.overwhelmed;
  };

  const handleStartQuiz = () => {
    trackEvent('quiz_started');
    setCurrentQuestionIndex(0);
    setUserAnswers([]);
    setCurrentStep('question');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleAnswerQuestion = (option: QuestionOption) => {
    const nextAnswers = [...userAnswers, option];
    setUserAnswers(nextAnswers);

    trackEvent('question_answered', {
      questionId: QUESTION_CONFIG[currentQuestionIndex].id,
      selectedOption: option.text,
      tag: option.tag,
    });

    if (currentQuestionIndex + 1 < QUESTION_CONFIG.length) {
      setCurrentQuestionIndex((prev) => prev + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      // All questions completed -> go to Education step
      trackEvent('quiz_completed');
      const profile = calculateDiagnosisProfile(nextAnswers);
      setCalculatedDiagnosis(profile);
      setCurrentStep('education');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleEducationContinue = () => {
    setCurrentStep('mental_load');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleMentalLoadContinue = () => {
    setCurrentStep('transformation');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleTransformationContinue = () => {
    setCurrentStep('comparison');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleComparisonContinue = () => {
    setCurrentStep('commitment');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCommitment = (commitmentText: string) => {
    setUserCommitment(commitmentText);
    setCurrentStep('processing');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleProcessingComplete = () => {
    trackEvent('diagnosis_viewed', { diagnosisId: calculatedDiagnosis.id });
    setCurrentStep('diagnosis');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleProceedToSales = () => {
    trackEvent('product_viewed');
    setCurrentStep('sales');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCheckoutRedirect = () => {
    if (CHECKOUT_CONFIG.checkoutUrl && CHECKOUT_CONFIG.checkoutUrl !== '') {
      try {
        window.location.href = CHECKOUT_CONFIG.checkoutUrl;
      } catch {
        window.open(CHECKOUT_CONFIG.checkoutUrl, '_blank');
      }
    }
  };

  const handleRestart = () => {
    setCurrentStep('landing');
    setCurrentQuestionIndex(0);
    setUserAnswers([]);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#FFFDFD] text-[#2D1522] flex flex-col font-sans">
      {/* Header */}
      <Header
        showProgress={currentStep !== 'landing' && currentStep !== 'sales'}
        progress={getProgressPercentage()}
        stepNumber={
          currentStep === 'question'
            ? currentQuestionIndex + 1
            : currentStep === 'education'
            ? 8
            : currentStep === 'mental_load'
            ? 9
            : currentStep === 'transformation'
            ? 10
            : currentStep === 'comparison'
            ? 11
            : currentStep === 'commitment'
            ? 12
            : undefined
        }
        totalSteps={13}
        onRestart={currentStep !== 'landing' ? handleRestart : undefined}
      />

      {/* Main Container with Step Transitions */}
      <main className="flex-1 w-full overflow-x-hidden flex flex-col">
        <AnimatePresence mode="wait">
          {currentStep === 'landing' && (
            <motion.div
              key="landing"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.25 }}
              className="w-full flex-1"
            >
              <LandingStep onStart={handleStartQuiz} />
            </motion.div>
          )}

          {currentStep === 'question' && (
            <motion.div
              key={`question-${currentQuestionIndex}`}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.25 }}
              className="w-full flex-1"
            >
              <QuestionStep
                question={QUESTION_CONFIG[currentQuestionIndex]}
                currentQuestionIndex={currentQuestionIndex}
                totalQuestions={QUESTION_CONFIG.length}
                onAnswer={handleAnswerQuestion}
              />
            </motion.div>
          )}

          {currentStep === 'education' && (
            <motion.div
              key="education"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.25 }}
              className="w-full flex-1"
            >
              <EducationStep onContinue={handleEducationContinue} />
            </motion.div>
          )}

          {currentStep === 'mental_load' && (
            <motion.div
              key="mental_load"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.25 }}
              className="w-full flex-1"
            >
              <MentalLoadStep onContinue={handleMentalLoadContinue} />
            </motion.div>
          )}

          {currentStep === 'transformation' && (
            <motion.div
              key="transformation"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.25 }}
              className="w-full flex-1"
            >
              <TransformationStep onContinue={handleTransformationContinue} />
            </motion.div>
          )}

          {currentStep === 'comparison' && (
            <motion.div
              key="comparison"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.25 }}
              className="w-full flex-1"
            >
              <ComparisonStep onContinue={handleComparisonContinue} />
            </motion.div>
          )}

          {currentStep === 'commitment' && (
            <motion.div
              key="commitment"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.25 }}
              className="w-full flex-1"
            >
              <CommitmentStep onCommit={handleCommitment} />
            </motion.div>
          )}

          {currentStep === 'processing' && (
            <motion.div
              key="processing"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="w-full flex-1 flex items-center justify-center"
            >
              <ProcessingStep onComplete={handleProcessingComplete} />
            </motion.div>
          )}

          {currentStep === 'diagnosis' && (
            <motion.div
              key="diagnosis"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="w-full flex-1"
            >
              <DiagnosisStep
                diagnosis={calculatedDiagnosis}
                onProceedToSales={handleProceedToSales}
              />
            </motion.div>
          )}

          {currentStep === 'sales' && (
            <motion.div
              key="sales"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35 }}
              className="w-full flex-1"
            >
              <SalesPitchStep onCheckoutClick={handleCheckoutRedirect} />
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
}
