import React from 'react';
import { Star, Heart, MessageCircle, Share2 } from 'lucide-react';

export const TestimonialCard: React.FC = () => {
    return (
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 max-w-xl mx-auto my-6">
            <div className="flex gap-3 mb-3">
                <div className="flex-shrink-0">
                    {/* Fernanda Photo Container */}
                    <div className="w-12 h-12 rounded-full overflow-hidden border border-gray-200">
                        <img
                            src="/images/testimonial-profile.jpg"
                            alt="Fernanda Oliveira"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>

                <div className="flex-1">
                    <div className="flex justify-between items-start">
                        <div>
                            <h4 className="font-bold text-gray-900 text-sm">Fernanda Oliveira</h4>
                            <p className="text-gray-500 text-xs">Porto Alegre, RS • 2h atrás</p>
                        </div>
                        <div className="flex text-yellow-400">
                            {[1, 2, 3, 4, 5].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
                        </div>
                    </div>
                </div>
            </div>

            <p className="text-gray-800 text-sm leading-relaxed mb-3">
                Meninas, eu precisava vir aqui compartilhar isso! 🙏😭 <br /><br />
                Eu já tinha tentado de tudo... chá, dieta da sopa, jejum... e nada funcionava. Minha autoestima estava no chão.
                <br /><br />
                Decidi testar essa <span className="text-brand-pink font-bold">#GelatinaBariátrica</span> faz 2 meses e OLHA ISSO! Perdi 11kg! 😍 Sem passar fome e sem ter que me matar na academia. Parece mágica, mas é só a receita mesmo. Podem comprar sem medo!
            </p>

            {/* Social Actions Simulation */}
            <div className="flex items-center gap-6 border-t pt-2 text-gray-500 text-xs font-semibold">
                <button className="flex items-center gap-1 hover:text-red-500 transition-colors text-red-500">
                    <Heart size={16} fill="currentColor" /> 1.243
                </button>
                <button className="flex items-center gap-1 hover:text-gray-700">
                    <MessageCircle size={16} /> Comentar
                </button>
                <button className="flex items-center gap-1 hover:text-gray-700">
                    <Share2 size={16} /> Compartilhar
                </button>
            </div>
        </div>
    );
};