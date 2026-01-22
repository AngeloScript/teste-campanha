import React from 'react';
import { Button } from './Button';
import { ShieldCheck, Lock, Check, CreditCard, Smartphone } from 'lucide-react';

interface OfferProps {
    id: string;
}

export const Offer: React.FC<OfferProps> = ({ id }) => {
  const handleCheckout = () => {
    window.location.href = "https://pay.cakto.com.br/dmha2ta_727694";
  };

  return (
    <section id={id} className="py-10 bg-gray-900 text-white relative overflow-hidden">
        {/* Dark overlay for contrast */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-brand-darkPink/40 via-gray-900 to-gray-900"></div>

      <div className="max-w-4xl mx-auto px-4 relative z-10">
        
        {/* Header with Urgency */}
        <div className="text-center mb-8">
            <h2 className="text-2xl md:text-5xl font-black mb-2 text-white uppercase tracking-tight">
                Oferta Exclusiva
            </h2>
            <p className="text-gray-400 text-sm md:text-xl max-w-2xl mx-auto">
                O valor de um lanche para ter o corpo dos seus sonhos.
            </p>
        </div>

        <div className="bg-white text-gray-900 rounded-2xl shadow-2xl overflow-hidden max-w-lg mx-auto border-4 border-white relative">
            
            {/* Best Seller Badge */}
            <div className="absolute top-0 right-0 bg-red-600 text-white text-[10px] md:text-xs font-bold px-3 py-1 md:px-4 md:py-2 rounded-bl-xl shadow-md z-20 animate-pulse">
                🔥 -85% OFF HOJE
            </div>

            <div className="p-6 md:p-8 pb-4">
                <div className="text-center">
                    <h3 className="text-xl md:text-2xl font-black text-gray-800 mb-1">Protocolo Seca Barriga</h3>
                    <div className="text-xs md:text-sm text-gray-500 mb-4 font-medium uppercase tracking-wide">ACESSO VITALÍCIO + BÔNUS</div>
                    
                    {/* Price Anchor */}
                    <div className="flex flex-col items-center justify-center gap-1 mb-6 bg-green-50 p-4 md:p-6 rounded-xl border-2 border-green-100 shadow-inner">
                        <span className="text-gray-400 line-through text-base font-medium">De R$ 197,90</span>
                        <div className="flex items-end gap-1 leading-none my-1">
                            <span className="text-gray-600 text-sm font-bold mb-2">Por</span>
                            <span className="text-5xl md:text-7xl font-black text-green-600 tracking-tighter">29,99</span>
                        </div>
                        <span className="text-[10px] md:text-xs font-bold text-green-700 bg-green-200/50 px-3 py-1 rounded-full uppercase">Pagamento Único</span>
                    </div>
                </div>

                {/* The "What you get" stack */}
                <div className="space-y-3 mb-6 text-left border-t border-b border-gray-100 py-4">
                    <div className="flex items-center gap-3">
                        <div className="bg-green-100 p-0.5 rounded-full"><Check className="text-green-600 w-4 h-4" /></div>
                        <span className="font-semibold text-gray-700 text-sm">Receita Secreta da Gelatina</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <div className="bg-green-100 p-0.5 rounded-full"><Check className="text-green-600 w-4 h-4" /></div>
                        <span className="font-semibold text-gray-700 text-sm">Cronograma Alimentar (Bônus)</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <div className="bg-green-100 p-0.5 rounded-full"><Check className="text-green-600 w-4 h-4" /></div>
                        <span className="font-semibold text-gray-700 text-sm">Acesso Vitalício ao Material</span>
                    </div>
                </div>

                <div className="relative">
                    <div className="absolute inset-0 bg-green-400 blur-lg opacity-20 rounded-xl"></div>
                    <Button fullWidth pulse onClick={handleCheckout} className="relative shadow-xl bg-green-600 hover:bg-green-500 border-green-700 text-lg md:text-xl py-4 md:py-5">
                        QUERO EMAGRECER AGORA
                    </Button>
                </div>
                
                {/* Payment Methods Simulation */}
                <div className="mt-4 flex flex-wrap justify-center gap-2 grayscale opacity-70">
                     <div className="flex items-center gap-1 text-[10px] border rounded px-2 py-1 bg-gray-50">
                        <CreditCard size={12} /> Cartão
                     </div>
                     <div className="flex items-center gap-1 text-[10px] border rounded px-2 py-1 bg-gray-50">
                        <Smartphone size={12} /> PIX
                     </div>
                </div>
            </div>
            
            {/* Footer of Card */}
            <div className="bg-gray-100 p-3 text-center border-t border-gray-200">
                <p className="text-[10px] text-gray-500 flex items-center justify-center gap-1">
                    <Lock size={10} /> Site Blindado e Seguro
                </p>
            </div>
        </div>

        {/* Guarantee - Risk Reversal Trigger */}
        <div className="mt-8 text-center">
            <div className="inline-flex items-center justify-center gap-3 bg-white/5 p-3 rounded-xl backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-colors max-w-xs mx-auto">
                <ShieldCheck className="text-green-400 w-8 h-8 flex-shrink-0" />
                <div className="text-left">
                    <h4 className="font-bold text-white text-sm">Garantia de 7 Dias</h4>
                    <p className="text-[10px] text-gray-400 leading-tight">
                        Risco zero. Se não gostar, devolvemos seu dinheiro.
                    </p>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};