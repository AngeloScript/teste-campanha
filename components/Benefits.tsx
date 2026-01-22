import React from 'react';
import { Sparkles, Shirt, Ban, Smile, CheckSquare } from 'lucide-react';

export const Benefits: React.FC = () => {
  const benefits = [
    {
      icon: <Shirt className="w-8 h-8 text-brand-darkPink" />,
      title: "Volte a Usar Suas Roupas",
      description: "Sabe aquela calça jeans que não fecha mais? Em 15 dias ela vai entrar folgada na sua cintura."
    },
    {
      icon: <Ban className="w-8 h-8 text-brand-darkPink" />,
      title: "Sem Passar Fome",
      description: "O efeito 'esponja' da gelatina preenche seu estômago, fazendo você se sentir cheia comendo 3x menos."
    },
    {
      icon: <Sparkles className="w-8 h-8 text-brand-darkPink" />,
      title: "Pele Firme e Bonita",
      description: "Rica em colágeno natural, essa fórmula evita que sua pele fique flácida enquanto a gordura vai embora."
    },
    {
      icon: <Smile className="w-8 h-8 text-brand-darkPink" />,
      title: "Recupere sua Autoestima",
      description: "Volte a se olhar no espelho e gostar do que vê. Sinta-se desejada e confiante novamente."
    }
  ];

  const targetAudience = [
    "Já tentou dietas malucas e nada funcionou.",
    "Sente muita ansiedade e acaba descontando na comida.",
    "Tem o metabolismo lento e engorda até 'com o vento'.",
    "Não tem tempo (ou paciência) para fazer academia.",
    "Quer uma solução natural, sem remédios perigosos."
  ];

  return (
    <section className="bg-gray-50 pb-16 pt-8">
      {/* Target Audience Section - Qualification */}
      <div className="max-w-3xl mx-auto px-4 mb-16">
        <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 border-2 border-brand-pink/20">
            <h3 className="text-2xl font-bold text-center text-gray-900 mb-6">
                Essa Receita é <span className="text-brand-pink underline decoration-wavy">Exclusiva</span> Para Mulheres Que:
            </h3>
            <ul className="space-y-4">
                {targetAudience.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                        <CheckSquare className="w-6 h-6 text-green-500 flex-shrink-0 fill-green-50" />
                        <span className="text-gray-700 font-medium text-lg">{item}</span>
                    </li>
                ))}
            </ul>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-black text-center text-gray-900 mb-12 leading-tight">
          Por que o <span className="bg-brand-pink text-white px-2 transform -rotate-1 inline-block rounded">Protocolo da Gelatina</span><br/>é diferente de tudo que você já viu?
        </h2>
        
        <div className="grid md:grid-cols-2 gap-6">
            {benefits.map((benefit, idx) => (
                <div key={idx} className="bg-white p-6 rounded-2xl shadow-md flex items-start gap-4 border-l-4 border-brand-pink hover:-translate-y-1 transition-transform duration-300">
                    <div className="flex-shrink-0 bg-pink-50 rounded-full p-3">
                        {benefit.icon}
                    </div>
                    <div>
                        <h3 className="font-bold text-xl text-gray-800 mb-2">{benefit.title}</h3>
                        <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};