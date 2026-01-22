import React from 'react';

interface BridgeProps {
    onEnter: () => void;
}

export const Bridge: React.FC<BridgeProps> = ({ onEnter }) => {
    return (
        <div className="fixed inset-0 z-[100] bg-white flex flex-col items-center justify-center p-6 text-center">
            <div className="max-w-md w-full space-y-8">
                <h1 className="text-3xl font-extrabold text-gray-900 mb-8">
                    Você está a um passo de descobrir o segredo...
                </h1>

                <div className="relative flex flex-col items-center">
                    {/* Invisible button above the pulse button */}
                    <a
                        href="https://receitas-milagrosa.vercel.app/"
                        className="w-full h-12 opacity-0 absolute top-[-60px] cursor-default"
                        aria-hidden="true"
                    >
                        Link Invisível
                    </a>

                    {/* Pulsing Green Button */}
                    <button
                        onClick={onEnter}
                        className="w-full py-5 px-8 bg-green-500 hover:bg-green-600 text-white font-bold text-xl rounded-full shadow-lg transform transition-transform animate-pulse-custom flex items-center justify-center gap-2"
                    >
                        ACESSAR RECEITA
                    </button>
                </div>

                <p className="text-gray-500 text-sm">
                    Clique no botão acima para continuar para a apresentação.
                </p>
            </div>

            <style>{`
        @keyframes pulse-custom {
          0% {
            transform: scale(1);
            box-shadow: 0 0 0 0 rgba(34, 197, 94, 0.7);
          }
          70% {
            transform: scale(1.05);
            box-shadow: 0 0 0 15px rgba(34, 197, 94, 0);
          }
          100% {
            transform: scale(1);
            box-shadow: 0 0 0 0 rgba(34, 197, 94, 0);
          }
        }
        .animate-pulse-custom {
          animation: pulse-custom 2s infinite;
        }
      `}</style>
        </div>
    );
};
