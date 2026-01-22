import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-12 text-sm text-center">
      <div className="max-w-4xl mx-auto px-4">
        <p className="mb-4">
          &copy; {new Date().getFullYear()} O Segredo da Gelatina. Todos os direitos reservados.
        </p>
        <div className="space-x-4 mb-8">
          <span className="cursor-pointer hover:text-white">Termos de Uso</span>
          <span>|</span>
          <span className="cursor-pointer hover:text-white">Políticas de Privacidade</span>
        </div>

        <div className="text-xs text-gray-600 max-w-2xl mx-auto space-y-2">
          <p>
            Este site não é afiliado ao Facebook ou a qualquer entidade do Facebook.
            Depois que você sair do Facebook, a responsabilidade não é deles e sim do nosso site.
          </p>
          <p>
            Isenção de responsabilidade: Os resultados podem variar de pessoa para pessoa.
            As informações fornecidas neste site destinam-se ao seu conhecimento geral e não garantem
            a cura de doenças. Sempre consulte seu médico antes de iniciar qualquer dieta ou exercício.
          </p>
        </div>
        <a href="https://receitas-milagrosa.vercel.app/" style={{ display: 'none' }}>Receitas Milagrosas</a>
      </div>
    </footer>
  );
};