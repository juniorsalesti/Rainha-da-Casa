import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import {
  BRAND_CONFIG,
  PRODUCT_CONFIG,
  BONUS_CONFIG,
  FAST_ACTION_BONUS_CONFIG,
  PRICE_CONFIG,
  OFFER_CONFIG,
  GUARANTEE_CONFIG,
  CHECKOUT_CONFIG,
  TESTIMONIALS_CONFIG,
  IMAGE_CONFIG,
} from '../config/funnelConfig';
import { trackEvent } from '../utils/analytics';
import { soundFX } from '../utils/soundEffects';
import { CountdownTimer } from './sales/CountdownTimer';
import { RecipeAssistantTeaser } from './sales/RecipeAssistantTeaser';
import { FaqAccordion } from './sales/FaqAccordion';
import {
  Check,
  Sparkles,
  ShieldCheck,
  ArrowRight,
  Gift,
  Lock,
  Star,
  CheckCircle2,
  Crown,
  ChevronRight,
  Heart,
  Volume2,
  MessageCircle,
  Zap,
} from 'lucide-react';

interface SalesPitchStepProps {
  onCheckoutClick: () => void;
}

export const SalesPitchStep: React.FC<SalesPitchStepProps> = ({ onCheckoutClick }) => {
  const [showStickyCta, setShowStickyCta] = useState(false);

  useEffect(() => {
    trackEvent('offer_viewed', { price: PRICE_CONFIG.promotionalPrice });

    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowStickyCta(true);
      } else {
        setShowStickyCta(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleCtaClick = () => {
    soundFX.playSuccess();
    trackEvent('checkout_clicked', { price: PRICE_CONFIG.promotionalPrice });
    onCheckoutClick();
  };

  const methodSteps = [
    {
      num: '01',
      title: 'SUA CASA',
      desc: 'Você identifica exatamente onde a rotina está pesando e trava o ciclo de acúmulo.',
      icon: '🏠',
      color: 'bg-rose-50 border-rose-200 text-rose-700',
    },
    {
      num: '02',
      title: 'O MÉTODO',
      desc: 'Você segue uma sequência simples de tarefas e planejamento sem precisar pensar.',
      icon: '📋',
      color: 'bg-purple-50 border-purple-200 text-purple-700',
    },
    {
      num: '03',
      title: 'ROTINA NO AUTOMÁTICO',
      desc: 'A repetição transforma as tarefas em hábitos fáceis de manter em minutos.',
      icon: '⚡',
      color: 'bg-amber-50 border-amber-200 text-amber-700',
    },
    {
      num: '04',
      title: 'SEU OBJETIVO',
      desc: 'Mais organização, mais tranquilidade e mais tempo livre para você e sua família.',
      icon: '🕊️',
      color: 'bg-emerald-50 border-emerald-200 text-emerald-700',
    },
  ];

  return (
    <div className="w-full max-w-xl mx-auto px-4 py-6 sm:py-8 flex flex-col items-center pb-24">
      {/* Exclusive Offer Unlocked Banner */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full bg-gradient-to-r from-rose-600 via-pink-600 to-rose-700 text-white rounded-2xl p-3.5 sm:p-4 text-center shadow-md mb-6"
      >
        <div className="flex items-center justify-center gap-1.5 text-xs font-black uppercase tracking-wider">
          <Crown className="w-4 h-4 text-amber-300" />
          <span>OFERTA EXCLUSIVA DESBLOQUEADA</span>
        </div>
        <p className="text-[11px] sm:text-xs text-rose-100 mt-0.5">
          Condição especial de liberação imediata para quem concluiu o diagnóstico
        </p>
      </motion.div>

      {/* SECTION 1: Product Presentation */}
      <div className="text-center w-full">
        <span className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-[#E11D48]">
          CONHEÇA O MÉTODO OFICIAL
        </span>

        <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#4C0519] leading-tight font-heading mt-1">
          {PRODUCT_CONFIG.name}
        </h1>

        <h2 className="text-sm sm:text-base font-bold text-rose-800 uppercase tracking-wide mt-2">
          {PRODUCT_CONFIG.headline}
        </h2>

        <p className="text-stone-600 text-xs sm:text-sm mt-3 leading-relaxed max-w-md mx-auto">
          {PRODUCT_CONFIG.description}
        </p>

        {/* Product Visual Mockup Card */}
        <div className="w-full mt-6 rounded-3xl overflow-hidden border-2 border-rose-200/90 shadow-soft bg-white relative">
          <img
            src={IMAGE_CONFIG.productMockup}
            alt="Método Rainha da Casa"
            className="w-full h-52 sm:h-64 object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="p-4 bg-gradient-to-b from-white to-rose-50/50 flex items-center justify-between">
            <div className="text-left">
              <span className="text-[10px] font-bold text-rose-600 uppercase tracking-wider">
                ACESSO COMPLETO & VITALÍCIO
              </span>
              <p className="text-xs sm:text-sm font-bold text-stone-900">
                10 Módulos + 8 Bônus Exclusivos
              </p>
            </div>
            <div className="flex items-center gap-1 text-amber-500 text-xs font-bold bg-amber-50 px-2.5 py-1 rounded-full border border-amber-200">
              <Star className="w-3.5 h-3.5 fill-amber-400" />
              <span>4.9 (1.8k avaliações)</span>
            </div>
          </div>
        </div>
      </div>

      {/* SECTION 2: 10 MODULES */}
      <div className="w-full mt-10">
        <div className="text-center mb-6">
          <span className="text-xs font-bold uppercase tracking-widest text-rose-600 bg-rose-50 px-3 py-1 rounded-full border border-rose-200/60">
            CONTEÚDO COMPLETO
          </span>
          <h3 className="text-xl sm:text-2xl font-extrabold text-[#4C0519] font-heading mt-2">
            O QUE VOCÊ VAI RECEBER
          </h3>
          <p className="text-xs sm:text-sm text-stone-600 mt-1">
            Cada módulo foi desenvolvido para resolver um problema específico do seu dia:
          </p>
        </div>

        <div className="grid grid-cols-1 gap-3.5">
          {PRODUCT_CONFIG.modules.map((mod) => (
            <div
              key={mod.id}
              className="p-4 rounded-2xl bg-[#FFF5F6] border border-rose-200/80 shadow-xs flex items-start gap-3.5 hover:bg-rose-50 transition-colors"
            >
              <img
                src={mod.image}
                alt={mod.title}
                className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl object-cover shrink-0 border border-rose-200/70 shadow-xs"
                referrerPolicy="no-referrer"
                loading="lazy"
              />
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-1.5 mb-1">
                  <div className="w-4 h-4 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 shrink-0">
                    <Check className="w-3 h-3 stroke-[3]" />
                  </div>
                  <span className="text-[10px] font-bold text-rose-700 uppercase tracking-wider bg-white/80 px-2 py-0.5 rounded-md border border-rose-200/50">
                    {mod.badge}
                  </span>
                </div>
                <h4 className="text-xs sm:text-sm font-extrabold text-[#4C0519] tracking-tight leading-snug">
                  {mod.title}
                </h4>
                <p className="text-[11px] sm:text-xs text-stone-600 mt-1 leading-relaxed">
                  {mod.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* SECTION 3: HOW IT WORKS (Connected 4-Step Diagram) */}
      <div className="w-full mt-12 bg-white rounded-3xl p-5 sm:p-6 border border-rose-100 shadow-soft">
        <div className="text-center mb-6">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E11D48]">
            PASSO A PASSO
          </span>
          <h3 className="text-lg sm:text-xl font-extrabold text-[#4C0519] font-heading mt-1">
            COMO FUNCIONA O MÉTODO RAINHA DA CASA
          </h3>
        </div>

        <div className="relative">
          {/* Connecting line */}
          <div className="absolute left-6 top-8 bottom-8 w-0.5 bg-gradient-to-b from-rose-400 via-purple-400 to-emerald-500 hidden sm:block"></div>

          <div className="space-y-4">
            {methodSteps.map((step, idx) => (
              <div key={idx} className="flex items-start gap-3.5 relative z-10">
                <div className="w-12 h-12 rounded-2xl bg-white border-2 border-rose-300 shadow-xs flex items-center justify-center shrink-0 font-black text-xs text-rose-900">
                  <span className="text-base">{step.icon}</span>
                </div>
                <div className={`flex-1 p-3.5 rounded-2xl border ${step.color}`}>
                  <div className="flex items-center gap-2 mb-0.5">
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-white text-stone-800">
                      {step.num}
                    </span>
                    <h4 className="text-xs sm:text-sm font-extrabold tracking-wide">
                      {step.title}
                    </h4>
                  </div>
                  <p className="text-xs text-stone-700 leading-snug mt-1">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* SECTION 4: 4 SPECIAL BONUSES */}
      <div className="w-full mt-12">
        <div className="text-center mb-6">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-700 bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
            PRESENTES ESPECIAIS
          </span>
          <h3 className="text-xl sm:text-2xl font-extrabold text-[#4C0519] font-heading mt-2">
            BÔNUS ESPECIAIS INCLUSOS
          </h3>
          <p className="text-xs sm:text-sm text-stone-600 mt-1">
            Ferramentas práticas para potencializar ainda mais seus resultados:
          </p>
        </div>

        {/* Interactive AI Recipe Teaser for Bonus 01 */}
        <div className="mb-4">
          <RecipeAssistantTeaser />
        </div>

        <div className="grid grid-cols-1 gap-3.5">
          {BONUS_CONFIG.map((b) => (
            <div
              key={b.id}
              className="p-4 rounded-2xl bg-white border border-amber-200/80 shadow-xs flex items-start gap-3.5 hover:border-amber-400 transition-colors"
            >
              {b.image && (
                <img
                  src={b.image}
                  alt={b.title}
                  className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl object-cover shrink-0 border border-amber-100"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
              )}
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold text-amber-800 uppercase tracking-wider bg-amber-50 px-2 py-0.5 rounded-md border border-amber-200">
                    {b.number}
                  </span>
                  <span className="text-[10px] font-bold text-stone-400 line-through">
                    R$ {b.estimatedValue.toFixed(2)}
                  </span>
                </div>
                <h4 className="text-xs sm:text-sm font-extrabold text-[#4C0519] tracking-tight mt-1">
                  {b.title}
                </h4>
                <p className="text-[11px] sm:text-xs text-stone-600 mt-1 leading-relaxed">
                  {b.description}
                </p>
                <span className="inline-block text-[10px] font-bold text-emerald-700 mt-2 bg-emerald-50 px-2 py-0.5 rounded-full">
                  ✓ Grátis hoje
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* SECTION 5: FAST ACTION BONUSES (Bônus para quem entrar hoje) */}
      <div className="w-full mt-12 bg-gradient-to-br from-rose-50 via-pink-50 to-rose-100/70 rounded-3xl p-5 sm:p-6 border-2 border-rose-200 shadow-soft">
        <div className="text-center mb-5">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-rose-600 text-white rounded-full text-xs font-bold uppercase tracking-wider mb-2 shadow-xs">
            <Gift className="w-3.5 h-3.5" />
            <span>EXCLUSIVO PARA HOJE</span>
          </div>
          <h3 className="text-lg sm:text-xl font-black text-[#4C0519] font-heading">
            🎁 BÔNUS PARA QUEM ENTRAR HOJE
          </h3>
          <p className="text-xs text-stone-600 mt-1">
            Presentes extras liberados por tempo limitado:
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {FAST_ACTION_BONUS_CONFIG.map((item) => (
            <div
              key={item.id}
              className="p-3.5 rounded-xl bg-white/90 border border-rose-200 shadow-xs flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[10px] font-bold text-rose-700 bg-rose-100 px-2 py-0.5 rounded-full">
                    {item.number}
                  </span>
                  <span className="text-[10px] font-bold text-stone-400 line-through">
                    R$ {item.estimatedValue.toFixed(2)}
                  </span>
                </div>
                <h4 className="text-xs font-extrabold text-[#4C0519] leading-snug">
                  {item.title}
                </h4>
                <p className="text-[11px] text-stone-600 mt-1 leading-tight">
                  {item.description}
                </p>
              </div>
              <span className="text-[10px] font-bold text-emerald-700 mt-2">
                ✓ 100% Grátis
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* SECTION 6: TESTIMONIALS (Social Proof) */}
      <div className="w-full mt-12">
        <div className="text-center mb-6">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
            QUEM USA APROVA
          </span>
          <h3 className="text-xl sm:text-2xl font-extrabold text-[#4C0519] font-heading mt-2">
            HISTÓRIAS DE QUEM TRANSFORMOU A CASA
          </h3>
        </div>

        <div className="space-y-3.5">
          {TESTIMONIALS_CONFIG.map((t) => (
            <div
              key={t.id}
              className="p-4 rounded-2xl bg-white border border-rose-100 shadow-xs"
            >
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2.5">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="w-10 h-10 rounded-full object-cover border border-rose-200"
                    referrerPolicy="no-referrer"
                  />
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-stone-900 flex items-center gap-1">
                      <span>{t.name}</span>
                      {t.verified && (
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 fill-emerald-100" />
                      )}
                    </h4>
                    <span className="text-[10px] text-stone-500">{t.city} • {t.timeAgo}</span>
                  </div>
                </div>
                <div className="flex text-amber-400 text-xs">
                  {'★'.repeat(5)}
                </div>
              </div>
              <p className="text-xs text-stone-700 leading-relaxed italic bg-rose-50/40 p-3 rounded-xl border border-rose-100/60">
                "{t.text}"
              </p>
              <div className="mt-2 text-[10px] font-semibold text-rose-700 flex items-center gap-1">
                <span>🏷️</span>
                <span>{t.tag}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* SECTION 7: VALUE ANCHORING TABLE */}
      <div className="w-full mt-12 bg-white rounded-3xl p-5 sm:p-6 border border-rose-200/90 shadow-soft">
        <div className="text-center mb-5">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E11D48]">
            RESUMO DO VALOR
          </span>
          <h3 className="text-lg sm:text-xl font-black text-[#4C0519] font-heading mt-1">
            VEJA TUDO O QUE VOCÊ LEVA HOJE:
          </h3>
        </div>

        <div className="space-y-2.5 border-b border-rose-100 pb-4 text-xs sm:text-sm">
          {PRICE_CONFIG.itemizedValues.map((item, idx) => (
            <div key={idx} className="flex justify-between items-center text-stone-700">
              <span className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                <span className="leading-snug">{item.name}</span>
              </span>
              <span className="font-bold text-stone-400 line-through shrink-0 ml-2">
                R$ {item.value.toFixed(2)}
              </span>
            </div>
          ))}
        </div>

        {/* Total Anchor Value */}
        <div className="pt-4 flex justify-between items-center">
          <span className="text-xs sm:text-sm font-bold text-stone-600 uppercase tracking-wider">
            VALOR TOTAL DE TUDO:
          </span>
          <span className="text-base sm:text-lg font-bold text-stone-400 line-through">
            R$ {PRICE_CONFIG.calculatedTotalValue.toFixed(2)}
          </span>
        </div>

        <div className="flex justify-between items-center mt-1">
          <span className="text-xs sm:text-sm font-bold text-[#4C0519] uppercase tracking-wider">
            PREÇO NORMAL DE TABELA:
          </span>
          <span className="text-lg sm:text-xl font-bold text-rose-900 line-through">
            R$ {PRICE_CONFIG.anchorFullValue.toFixed(2)}
          </span>
        </div>
      </div>

      {/* SECTION 8: COUNTDOWN TIMER */}
      <div className="w-full mt-6">
        <CountdownTimer />
      </div>

      {/* SECTION 9: GRAND OFFER CARD (R$ 29,90) */}
      <motion.div
        id="offer-card"
        initial={{ opacity: 0, scale: 0.96 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="w-full mt-6 bg-gradient-to-b from-rose-50 via-white to-rose-50 rounded-3xl p-5 sm:p-7 border-3 border-rose-500 shadow-cta relative overflow-hidden text-center"
      >
        {/* Savings Badge */}
        <div className="inline-block bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-extrabold text-xs sm:text-sm uppercase tracking-wider px-4 py-1.5 rounded-full shadow-xs mb-3">
          🎉 VOCÊ ECONOMIZA R$ {PRICE_CONFIG.calculatedSavings.toFixed(2).replace('.', ',')} HOJE
        </div>

        <h3 className="text-lg sm:text-xl font-extrabold text-[#4C0519] font-heading">
          {OFFER_CONFIG.headline}
        </h3>

        <p className="text-xs sm:text-sm text-stone-500 mt-1">
          {OFFER_CONFIG.subheadline}
        </p>

        {/* Pricing block */}
        <div className="my-6 p-4 rounded-2xl bg-white border border-rose-200/80 shadow-xs">
          <div className="text-xs font-semibold text-stone-400 line-through">
            De R$ {PRICE_CONFIG.anchorFullValue.toFixed(2).replace('.', ',')} por apenas:
          </div>

          <div className="flex items-baseline justify-center gap-1 mt-1">
            <span className="text-sm sm:text-base font-bold text-rose-800">R$</span>
            <span className="text-4xl sm:text-5xl font-black text-rose-600 tracking-tight font-heading">
              29,90
            </span>
          </div>

          <p className="text-xs text-stone-600 mt-1 font-medium">
            À vista no PIX ou até {PRICE_CONFIG.installmentCount}x de R$ {PRICE_CONFIG.installmentValue.toFixed(2).replace('.', ',')} no cartão
          </p>
        </div>

        {/* Warning notice */}
        <div className="bg-amber-50 border border-amber-200 rounded-xl p-2.5 text-[11px] sm:text-xs text-amber-900 font-semibold mb-5 flex items-center justify-center gap-1.5">
          <span>⚠️</span>
          <span>Essa condição especial está disponível para quem concluiu o diagnóstico.</span>
        </div>

        {/* Master CTA Button */}
        <motion.button
          id="btn-main-checkout"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          onClick={handleCtaClick}
          className="w-full py-4.5 px-6 bg-gradient-to-r from-emerald-500 via-emerald-600 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white font-black text-lg sm:text-xl rounded-2xl shadow-cta-green flex items-center justify-center gap-2.5 cursor-pointer transition-all uppercase tracking-wider animate-pulse-subtle"
        >
          <span>QUERO MEU ACESSO AGORA</span>
          <ArrowRight className="w-6 h-6 stroke-[3]" />
        </motion.button>

        <p className="text-[11px] sm:text-xs text-stone-500 mt-3 font-medium">
          {CHECKOUT_CONFIG.paymentMethodsText}
        </p>
      </motion.div>

      {/* SECTION 10: 30-DAY GUARANTEE */}
      <div className="w-full mt-8 bg-emerald-50/90 border-2 border-emerald-300 rounded-3xl p-5 sm:p-6 text-center shadow-xs">
        <div className="w-14 h-14 rounded-2xl bg-emerald-600 text-white flex items-center justify-center mx-auto mb-3 shadow-md">
          <ShieldCheck className="w-8 h-8" />
        </div>

        <span className="text-[11px] font-black text-emerald-800 uppercase tracking-widest bg-emerald-200/70 px-3 py-1 rounded-full">
          {GUARANTEE_CONFIG.badgeText}
        </span>

        <h3 className="text-base sm:text-lg font-black text-emerald-950 uppercase tracking-wide font-heading mt-2">
          {GUARANTEE_CONFIG.title}
        </h3>

        <p className="text-xs sm:text-sm text-stone-700 leading-relaxed mt-2 max-w-md mx-auto">
          {GUARANTEE_CONFIG.text}
        </p>
      </div>

      {/* SECTION 11: FAQ */}
      <div className="w-full mt-12">
        <div className="text-center mb-6">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E11D48]">
            TIRE SUAS DÚVIDAS
          </span>
          <h3 className="text-xl sm:text-2xl font-extrabold text-[#4C0519] font-heading mt-1">
            PERGUNTAS FREQUENTES
          </h3>
        </div>

        <FaqAccordion />
      </div>

      {/* SECTION 12: FINAL CALL TO ACTION */}
      <div className="w-full mt-10 text-center">
        <motion.button
          id="btn-footer-checkout"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={handleCtaClick}
          className="w-full py-4.5 px-6 bg-gradient-to-r from-emerald-500 via-emerald-600 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white font-black text-base sm:text-lg rounded-2xl shadow-cta-green flex items-center justify-center gap-2 cursor-pointer transition-all uppercase tracking-wider"
        >
          <span>QUERO MEU ACESSO AGORA</span>
          <ArrowRight className="w-5 h-5 stroke-[3]" />
        </motion.button>

        <p className="text-xs text-stone-500 mt-4">
          {BRAND_CONFIG.copyright}
        </p>
      </div>

      {/* STICKY BOTTOM BAR ON MOBILE SCROLL */}
      {showStickyCta && (
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          className="fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-t border-rose-200 px-4 py-3 shadow-2xl flex items-center justify-between max-w-xl mx-auto"
        >
          <div className="flex flex-col">
            <span className="text-[10px] font-bold text-stone-400 line-through leading-tight">
              De R$ 227,00
            </span>
            <div className="flex items-baseline gap-1">
              <span className="text-[11px] font-bold text-rose-800">Por</span>
              <span className="text-lg sm:text-xl font-black text-rose-600">
                R$ 29,90
              </span>
            </div>
          </div>

          <button
            onClick={handleCtaClick}
            className="py-2.5 px-5 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-extrabold text-xs sm:text-sm rounded-xl shadow-cta-green flex items-center gap-1.5 cursor-pointer uppercase tracking-wider"
          >
            <span>QUERO MEU ACESSO</span>
            <ChevronRight className="w-4 h-4 stroke-[3]" />
          </button>
        </motion.div>
      )}
    </div>
  );
};
