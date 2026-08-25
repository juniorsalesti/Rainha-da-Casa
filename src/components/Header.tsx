import React from 'react';
import { BRAND_CONFIG } from '../config/funnelConfig';
import { Sparkles, Crown, Volume2, VolumeX, RotateCcw } from 'lucide-react';
import { soundFX } from '../utils/soundEffects';

interface HeaderProps {
  progress?: number; // 0 to 100
  stepNumber?: number;
  totalSteps?: number;
  showProgress?: boolean;
  onRestart?: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  progress = 0,
  stepNumber,
  totalSteps,
  showProgress = false,
  onRestart,
}) => {
  const [muted, setMuted] = React.useState(soundFX.isMuted());

  const handleToggleSound = () => {
    const isNowMuted = !soundFX.toggleMute();
    setMuted(isNowMuted);
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-md border-b border-rose-100/80 shadow-xs transition-all">
      <div className="max-w-xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo Textual */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-rose-500 to-rose-700 flex items-center justify-center text-white shadow-xs">
            <Crown className="w-4 h-4" />
          </div>
          <div className="flex items-baseline tracking-tight font-extrabold text-lg sm:text-xl font-heading">
            <span className="text-[#4C0519]">{BRAND_CONFIG.namePrefix}</span>
            <span className="text-[#E11D48] ml-1">{BRAND_CONFIG.nameSuffix}</span>
          </div>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-2">
          {showProgress && stepNumber && totalSteps && (
            <span className="text-xs font-semibold text-rose-700 bg-rose-50 px-2.5 py-1 rounded-full border border-rose-200/60">
              {stepNumber} de {totalSteps}
            </span>
          )}

          {onRestart && (
            <button
              onClick={onRestart}
              title="Reiniciar diagnóstico"
              className="p-1.5 text-stone-400 hover:text-stone-700 hover:bg-rose-50 rounded-full transition-colors"
              aria-label="Reiniciar"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
          )}

          <button
            onClick={handleToggleSound}
            title={muted ? 'Ativar sons' : 'Silenciar sons'}
            className="p-1.5 text-stone-400 hover:text-stone-700 hover:bg-rose-50 rounded-full transition-colors"
            aria-label="Controle de Som"
          >
            {muted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4 text-rose-600" />}
          </button>
        </div>
      </div>

      {/* Dynamic Progress Bar */}
      {showProgress && (
        <div className="w-full bg-rose-100/70 h-1.5 overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-rose-500 via-pink-500 to-rose-600 transition-all duration-500 ease-out shadow-xs"
            style={{ width: `${Math.max(5, Math.min(100, progress))}%` }}
          />
        </div>
      )}
    </header>
  );
};
