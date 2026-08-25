import React, { useState, useEffect } from 'react';
import { OFFER_CONFIG } from '../../config/funnelConfig';
import { Clock, Flame } from 'lucide-react';

interface CountdownTimerProps {
  initialMinutes?: number;
  onExpire?: () => void;
}

export const CountdownTimer: React.FC<CountdownTimerProps> = ({
  initialMinutes = OFFER_CONFIG.countdownDurationMinutes || 15,
  onExpire,
}) => {
  const [timeLeft, setTimeLeft] = useState(initialMinutes * 60);

  useEffect(() => {
    if (timeLeft <= 0) {
      if (onExpire) onExpire();
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft, onExpire]);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  const formatNumber = (num: number) => String(num).padStart(2, '0');

  return (
    <div className="w-full bg-gradient-to-r from-rose-900 via-stone-900 to-rose-950 text-white rounded-2xl p-4 sm:p-5 shadow-lg border border-rose-500/30 text-center">
      <div className="flex items-center justify-center gap-1.5 text-xs sm:text-sm font-bold uppercase tracking-wider text-rose-300 mb-2">
        <Flame className="w-4 h-4 text-amber-400 animate-bounce" />
        <span>ESSA CONDIÇÃO ESPECIAL EXPIRA EM:</span>
      </div>

      <div className="flex items-center justify-center gap-3 mt-1">
        {/* Minutes */}
        <div className="flex flex-col items-center">
          <div className="w-14 sm:w-16 h-14 sm:h-16 bg-white/10 backdrop-blur-md rounded-xl border border-white/20 flex items-center justify-center font-mono text-2xl sm:text-3xl font-black text-white shadow-inner">
            {formatNumber(minutes)}
          </div>
          <span className="text-[10px] uppercase font-bold tracking-widest text-stone-300 mt-1">
            MINUTOS
          </span>
        </div>

        <span className="text-2xl font-black text-rose-400 -mt-4">:</span>

        {/* Seconds */}
        <div className="flex flex-col items-center">
          <div className="w-14 sm:w-16 h-14 sm:h-16 bg-white/10 backdrop-blur-md rounded-xl border border-white/20 flex items-center justify-center font-mono text-2xl sm:text-3xl font-black text-rose-400 shadow-inner">
            {formatNumber(seconds)}
          </div>
          <span className="text-[10px] uppercase font-bold tracking-widest text-stone-300 mt-1">
            SEGUNDOS
          </span>
        </div>
      </div>
    </div>
  );
};
