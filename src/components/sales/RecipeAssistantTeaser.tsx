import React, { useState } from 'react';
import { Bot, Sparkles, ChefHat, ArrowRight, Check } from 'lucide-react';
import { soundFX } from '../../utils/soundEffects';

export const RecipeAssistantTeaser: React.FC = () => {
  const [ingredients, setIngredients] = useState('');
  const [generatedRecipe, setGeneratedRecipe] = useState<{
    title: string;
    time: string;
    instructions: string[];
  } | null>(null);
  const [isThinking, setIsThinking] = useState(false);

  const presets = [
    { label: '🍳 Ovos + Queijo + Tomate', val: 'ovos, queijo, tomate' },
    { label: '🍗 Frango + Batata', val: 'frango desfiado, batata' },
    { label: '🍚 Arroz + Cenoura + Ovos', val: 'arroz de ontem, cenoura, ovos' },
  ];

  const handleGenerate = (query?: string) => {
    const input = query || ingredients;
    if (!input.trim()) return;

    soundFX.playPop();
    setIsThinking(true);

    setTimeout(() => {
      setIsThinking(false);
      soundFX.playSuccess();

      const lower = input.toLowerCase();
      if (lower.includes('frango')) {
        setGeneratedRecipe({
          title: 'Frango Cremoso Gratinado de 15 Minutos',
          time: '⏱ 15 min de preparo',
          instructions: [
            'Refogue o frango com tempero caseiro e azeite por 3 minutos.',
            'Corte as batatas em rodelas finas e cozinhe no vapor rápido.',
            'Monte em refratário com um toque de requeijão ou queijo e gratine até dourar!',
          ],
        });
      } else if (lower.includes('arroz')) {
        setGeneratedRecipe({
          title: 'Arroz de Forno Prático Rainha da Casa',
          time: '⏱ 12 min de preparo',
          instructions: [
            'Misture o arroz com a cenoura ralada e bata 2 ovos com cheiro-verde.',
            'Incorpore tudo com uma pitada de azeite e coloque na travessa.',
            'Leve ao forno por 10 minutos para firmar e criar crosta dourada!',
          ],
        });
      } else {
        setGeneratedRecipe({
          title: 'Omelete Nuvem Recheada com Ervas Frescas',
          time: '⏱ 8 min de preparo',
          instructions: [
            'Bata os ovos com garfo até espumar com uma pitada de sal e orégano.',
            'Aqueça a frigideira untada, despeje e adicione os tomates em cubos e queijo.',
            'Dobre ao meio quando a base soltar e tampe por 1 minuto para derreter!',
          ],
        });
      }
    }, 900);
  };

  return (
    <div className="w-full bg-gradient-to-br from-purple-50 via-white to-pink-50 rounded-2xl p-4 sm:p-5 border-2 border-purple-200/80 shadow-soft">
      <div className="flex items-center gap-2 mb-2">
        <div className="w-8 h-8 rounded-xl bg-purple-600 text-white flex items-center justify-center">
          <Bot className="w-4 h-4" />
        </div>
        <div>
          <span className="text-[10px] font-extrabold uppercase tracking-widest text-purple-600 bg-purple-100 px-2 py-0.5 rounded-full">
            EXPERIMENTE AGORA
          </span>
          <h4 className="text-sm sm:text-base font-bold text-purple-950 font-heading">
            Demonstração do Assistente de Receitas
          </h4>
        </div>
      </div>

      <p className="text-xs text-stone-600 mb-3">
        Digite 2 ou 3 ingredientes que você tem na geladeira e veja a mágica:
      </p>

      {/* Preset Pills */}
      <div className="flex flex-wrap gap-1.5 mb-3">
        {presets.map((p, idx) => (
          <button
            key={idx}
            type="button"
            onClick={() => {
              setIngredients(p.val);
              handleGenerate(p.val);
            }}
            className="text-[11px] font-medium px-2.5 py-1 rounded-lg bg-white border border-purple-200 text-purple-900 hover:bg-purple-100 transition-colors cursor-pointer"
          >
            {p.label}
          </button>
        ))}
      </div>

      {/* Input row */}
      <div className="flex gap-2">
        <input
          type="text"
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
          placeholder="Ex: abobrinha, ovo e queijo..."
          className="flex-1 px-3 py-2 bg-white rounded-xl border border-purple-200 text-xs sm:text-sm text-stone-800 focus:outline-none focus:ring-2 focus:ring-purple-400"
        />
        <button
          type="button"
          onClick={() => handleGenerate()}
          disabled={isThinking}
          className="px-3.5 py-2 bg-purple-600 hover:bg-purple-700 text-white text-xs font-bold rounded-xl transition-all flex items-center gap-1 cursor-pointer shrink-0"
        >
          {isThinking ? (
            <span className="animate-spin text-sm">⏳</span>
          ) : (
            <>
              <span>Gerar</span>
              <Sparkles className="w-3.5 h-3.5" />
            </>
          )}
        </button>
      </div>

      {/* Result Display */}
      {generatedRecipe && (
        <div className="mt-3.5 p-3.5 bg-white rounded-xl border border-purple-200 shadow-xs animate-fadeIn">
          <div className="flex items-center justify-between">
            <h5 className="text-xs sm:text-sm font-bold text-[#4C0519] flex items-center gap-1.5">
              <ChefHat className="w-4 h-4 text-rose-600" />
              {generatedRecipe.title}
            </h5>
            <span className="text-[10px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-100">
              {generatedRecipe.time}
            </span>
          </div>

          <div className="mt-2 space-y-1 text-[11px] sm:text-xs text-stone-700">
            {generatedRecipe.instructions.map((step, i) => (
              <div key={i} className="flex items-start gap-1.5">
                <span className="text-rose-500 font-bold shrink-0">{i + 1}.</span>
                <span>{step}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
