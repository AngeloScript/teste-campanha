import React from 'react';

const images = [
  {
    // Imagem representativa de antes/depois ou calça larga
    src: "/images/result-1.jpg",
    label: "-11kg em 30 dias",
    alt: "Mulher medindo a cintura com fita métrica"
  },
  {
    // Imagem representativa de barriga chapada/fitness
    src: "/images/result-2.jpg",
    label: "Barriga Sumiu",
    alt: "Corpo fitness mostrando resultado"
  },
  {
    // Imagem representativa de roupas largas
    src: "/images/result-3.jpg",
    label: "Roupas Largas",
    alt: "Mulher segurando calça jeans antiga que ficou larga"
  },
  {
    // Imagem representativa de selfie no espelho/autoestima
    src: "/images/result-4.png",
    label: "Autoestima TOP",
    alt: "Selfie no espelho mostrando o corpo novo"
  }
];

export const Gallery: React.FC = () => {
  return (
    <section className="py-8 md:py-12 bg-white">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-6 md:mb-10">
            <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-2">Elas conseguiram, você também consegue!</h2>
            <p className="text-gray-600 text-sm md:text-lg">Resultados reais ativando o efeito da gelatina.</p>
        </div>

        {/* Changed grid-cols-1 to grid-cols-2 for mobile to save vertical space */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6">
            {images.map((img, idx) => (
                <div key={idx} className="group relative rounded-xl overflow-hidden shadow-lg border border-gray-100 bg-gray-50">
                    <div className="relative w-full aspect-[3/4]">
                        <img 
                            src={img.src} 
                            alt={img.alt} 
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            loading="lazy"
                        />
                    </div>
                    <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-2 md:p-4 pt-10">
                        <p className="text-white font-bold text-xs md:text-sm text-center shadow-black drop-shadow-md border-b-2 border-brand-pink pb-1 inline-block">
                            {img.label}
                        </p>
                    </div>
                </div>
            ))}
        </div>
        
        <div className="mt-6 text-center">
            <p className="text-xs text-gray-400 italic bg-gray-50 inline-block px-3 py-1 rounded-full border border-gray-100">
                *Imagens ilustrativas baseadas em relatos reais.
            </p>
        </div>
      </div>
    </section>
  );
};