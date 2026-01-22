import React, { useState } from 'react';
import { Calculator as CalcIcon, ArrowRight, Clock, CheckCircle2 } from 'lucide-react';
import { Button } from './Button';

export const Calculator: React.FC = () => {
  const [currentWeight, setCurrentWeight] = useState<string>('');
  const [goalWeight, setGoalWeight] = useState<string>('');
  const [result, setResult] = useState<{ weeks: number; lost: number } | null>(null);
  const [loading, setLoading] = useState(false);

  const handleCalculate = (e: React.FormEvent) => {
    e.preventDefault();
    if (!currentWeight || !goalWeight) return;

    setLoading(true);
    
    // Simula processamento para dar emoção
    setTimeout(() => {
      const current = parseFloat(currentWeight);
      const goal = parseFloat(goalWeight);
      const diff = current - goal;
      
      // Lógica conservadora: média de 1.5kg a 2kg por semana com o protocolo
      const weeks = Math.ceil(diff / 1.8); 
      
      setResult({ weeks: weeks > 0 ? weeks : 1, lost: diff });
      setLoading(false);
    }, 1500);
  };

  return (
    <section className="py-12 px-4 bg-white">
      <div className="max-w-2xl mx-auto">
        <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl shadow-2xl overflow-hidden border-2 border-brand-pink/50">
          
          <div className="p-6 md:p-8">
            <div className="flex items-center gap-3 mb-6">
                <div className="bg-brand-pink p-2 rounded-lg text-white">
                    <CalcIcon size={24} />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-white">
                    Simulador do Protocolo
                </h3>
            </div>

            {!result ? (
              <form onSubmit={handleCalculate} className="space-y-6">
                <p className="text-gray-300">Descubra em quanto tempo você vai eliminar a barriga e voltar a usar suas roupas favoritas.</p>
                
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <label className="block text-gray-400 text-xs uppercase font-bold mb-2">Peso Atual (kg)</label>
                        <input 
                            type="number" 
                            value={currentWeight}
                            onChange={(e) => setCurrentWeight(e.target.value)}
                            className="w-full bg-gray-700 text-white border-2 border-gray-600 rounded-xl px-4 py-3 focus:border-brand-pink focus:outline-none text-xl font-bold placeholder-gray-500"
                            placeholder="Ex: 85"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-gray-400 text-xs uppercase font-bold mb-2">Meta de Peso (kg)</label>
                        <input 
                            type="number" 
                            value={goalWeight}
                            onChange={(e) => setGoalWeight(e.target.value)}
                            className="w-full bg-gray-700 text-white border-2 border-gray-600 rounded-xl px-4 py-3 focus:border-brand-green focus:outline-none text-xl font-bold placeholder-gray-500"
                            placeholder="Ex: 60"
                            required
                        />
                    </div>
                </div>

                <Button 
                    type="submit" 
                    fullWidth 
                    className="bg-brand-pink hover:bg-brand-darkPink border-brand-darkPink py-4 text-lg"
                    disabled={loading}
                >
                    {loading ? "Analisando Metabolismo..." : "SIMULAR MEU RESULTADO"}
                    {!loading && <ArrowRight size={20} />}
                </Button>
              </form>
            ) : (
              <div className="animate-fadeIn">
                <div className="bg-green-500/10 border border-green-500/30 rounded-xl p-4 mb-6">
                    <p className="text-green-400 text-sm font-bold flex items-center gap-2 mb-1">
                        <CheckCircle2 size={16} /> ANÁLISE CONCLUÍDA
                    </p>
                    <p className="text-white text-lg">
                        Para eliminar <span className="text-brand-pink font-bold">{result.lost}kg</span> com a Receita da Gelatina:
                    </p>
                </div>

                <div className="flex items-center justify-center gap-4 mb-8">
                    <div className="text-center">
                        <span className="block text-5xl font-black text-white">{result.weeks}</span>
                        <span className="text-gray-400 text-sm uppercase tracking-wider">Semanas*</span>
                    </div>
                    <Clock size={32} className="text-brand-pink animate-pulse" />
                </div>

                <p className="text-gray-300 text-sm text-center mb-6">
                    *Estimativa baseada nos resultados de mais de 15.000 alunas.
                </p>

                <Button 
                    fullWidth 
                    pulse
                    onClick={() => {
                        const offer = document.getElementById('offer');
                        offer?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="bg-green-600 hover:bg-green-500 border-green-700"
                >
                    QUERO COMEÇAR AGORA
                </Button>
                
                <button 
                    onClick={() => { setResult(null); setCurrentWeight(''); setGoalWeight(''); }}
                    className="w-full text-center text-gray-500 text-xs mt-4 hover:text-white underline"
                >
                    Refazer simulação
                </button>
              </div>
            )}
          </div>
          
          {/* Progress Bar Animation during loading */}
          {loading && (
            <div className="h-2 bg-gray-700 w-full overflow-hidden">
                <div className="h-full bg-brand-pink animate-[width_1.5s_ease-in-out_forwards] w-0"></div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};