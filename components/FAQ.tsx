import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { FaqItem } from '../types';

const faqData: FaqItem[] = [
  {
    question: "A gelatina tem gosto ruim?",
    answer: "Não! A receita é deliciosa e pode ser feita em vários sabores como morango, uva ou limão. Você nem vai sentir que está 'tomando remédio'."
  },
  {
    question: "Quanto tempo demora para ver resultados?",
    answer: "A maioria das nossas alunas relata sentir menos fome já no primeiro dia e começa a ver redução de medidas entre 3 a 7 dias de uso contínuo."
  },
  {
    question: "Preciso fazer academia?",
    answer: "Não é obrigatório. O segredo da gelatina funciona acelerando seu metabolismo e reduzindo a ingestão calórica naturalmente. Exercícios ajudam, mas não são o foco principal deste método."
  },
  {
    question: "Tenho diabetes/hipertensão, posso tomar?",
    answer: "Os ingredientes são 100% naturais. No entanto, sempre recomendamos que você mostre a receita ao seu médico se tiver condições de saúde pré-existentes."
  },
  {
    question: "Como recebo o acesso?",
    answer: "Imediatamente após a confirmação do pagamento, você receberá um e-mail com todo o material digital (E-books e Receitas) para acessar pelo celular ou computador."
  }
];

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-10">Perguntas Frequentes</h2>
        
        <div className="space-y-4">
          {faqData.map((item, idx) => (
            <div key={idx} className="border border-gray-200 rounded-lg overflow-hidden">
              <button 
                className="w-full flex justify-between items-center p-5 bg-gray-50 hover:bg-gray-100 transition-colors text-left"
                onClick={() => toggle(idx)}
              >
                <span className="font-semibold text-gray-800">{item.question}</span>
                {openIndex === idx ? <ChevronUp className="text-brand-pink" /> : <ChevronDown className="text-gray-500" />}
              </button>
              
              {openIndex === idx && (
                <div className="p-5 bg-white text-gray-600 border-t border-gray-100 leading-relaxed animate-fadeIn">
                  {item.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};