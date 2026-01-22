import React from 'react';
import { Button } from './Button';
import { CheckCircle, Lock, Flame } from 'lucide-react';

interface HeroProps {
  scrollToOffer: () => void;
}

export const Hero: React.FC<HeroProps> = ({ scrollToOffer }) => {
  return (
    <section className="bg-gradient-to-b from-pink-50 via-white to-white pt-6 pb-8 px-4 md:pt-12 md:pb-16 overflow-hidden">
      <div className="max-w-3xl mx-auto text-center relative">
        
        {/* Scarcity Banner */}
        <div className="animate-pulse mb-4 inline-block">
            <span className="bg-red-600 text-white text-[10px] md:text-sm font-bold px-3 py-1 md:px-4 md:py-1.5 rounded-full shadow-lg border border-red-500 flex items-center gap-2">
                <Flame size={12} className="text-yellow-300 fill-yellow-300" />
                VIRAL NO TIKTOK: POUCAS VAGAS
            </span>
        </div>

        {/* Super Headline - Direct & Aggressive */}
        <h1 className="text-3xl md:text-6xl font-black text-gray-900 mb-4 leading-[1.1] tracking-tight">
          O Segredo da <br className="hidden md:block"/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-pink to-brand-darkPink">"Bariátrica Caseira"</span>
        </h1>

        {/* Subheadline - The Hook */}
        <p className="text-base md:text-xl text-gray-700 mb-8 max-w-2xl mx-auto leading-relaxed font-medium">
            Descubra a combinação de <b className="text-gray-900">3 ingredientes comuns</b> que ativam o "efeito esponja" no estômago e <span className="bg-yellow-300 px-1 text-gray-900 font-bold">derretem gordura</span> sem remédios.
        </p>

        {/* The "Mystery Card" - Curiosity Hook - More compact for mobile */}
        <div className="max-w-md mx-auto bg-white rounded-xl shadow-xl border-2 border-gray-100 p-4 md:p-6 mb-8 transform rotate-1 hover:rotate-0 transition-transform duration-300 relative overflow-hidden group cursor-pointer" onClick={scrollToOffer}>
            {/* Stamp */}
            <div className="absolute top-2 right-2 md:top-4 md:right-4 opacity-20 group-hover:opacity-40 transition-opacity">
                <Lock size={32} className="text-gray-900" />
            </div>

            <div className="text-left border-2 border-dashed border-brand-pink/30 rounded-lg p-4 bg-pink-50/50">
                <h3 className="font-bold text-gray-800 text-base md:text-lg mb-3 flex items-center gap-2 uppercase tracking-wide border-b border-brand-pink/20 pb-2">
                    📄 Ficha Secreta:
                </h3>
                
                <div className="space-y-3">
                    <div className="flex items-center justify-between">
                        <span className="text-gray-600 font-medium text-sm">Ingrediente 01:</span>
                        <span className="bg-gray-800 text-white px-2 py-0.5 rounded text-xs font-mono tracking-widest blur-[2px] select-none">OVOXXX</span>
                    </div>
                    <div className="flex items-center justify-between">
                        <span className="text-gray-600 font-medium text-sm">Ingrediente 02:</span>
                        <span className="bg-gray-800 text-white px-2 py-0.5 rounded text-xs font-mono tracking-widest blur-[2px] select-none">LIMXXX</span>
                    </div>
                    <div className="flex items-center justify-between">
                        <span className="text-gray-600 font-medium text-sm">Ingrediente 03:</span>
                        <span className="bg-brand-pink text-white px-2 py-0.5 rounded text-xs font-bold animate-pulse">GELATINA</span>
                    </div>
                </div>

                <div className="mt-4 text-center bg-white/80 p-2 rounded border border-red-100">
                    <p className="text-[10px] md:text-xs text-red-600 font-bold uppercase flex justify-center items-center gap-1">
                        <Lock size={10} /> Toque abaixo para liberar
                    </p>
                </div>
            </div>
        </div>

        {/* CTA - Action Trigger */}
        <div className="flex flex-col items-center gap-3 relative z-20">
            <Button onClick={scrollToOffer} pulse fullWidth className="max-w-md text-lg md:text-2xl uppercase tracking-wide font-black shadow-brand-pink/50 border-b-4 border-green-700 bg-green-600 hover:bg-green-500 py-4 md:py-6">
                QUERO A RECEITA AGORA
            </Button>
            
            <div className="flex flex-row justify-center gap-3 text-[10px] md:text-sm text-gray-500 mt-1 font-medium">
                <span className="flex items-center justify-center gap-1"><CheckCircle size={12} className="text-green-500" /> Sem mensalidades</span>
                <span className="flex items-center justify-center gap-1"><CheckCircle size={12} className="text-green-500" /> Entrega imediata</span>
            </div>
        </div>
      </div>
    </section>
  );
};