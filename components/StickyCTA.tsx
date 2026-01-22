import React, { useState, useEffect } from 'react';
import { Button } from './Button';

interface StickyCTAProps {
  onClick: () => void;
}

export const StickyCTA: React.FC<StickyCTAProps> = ({ onClick }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show button after scrolling down 300px
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 p-3 bg-white/95 backdrop-blur-md border-t border-brand-pink/30 shadow-[0_-5px_20px_rgba(0,0,0,0.15)] z-50 md:hidden animate-slideUp">
      <div className="text-center text-xs text-gray-500 mb-1 flex justify-center items-center gap-1">
        <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
        3 vagas restantes
      </div>
      <Button fullWidth onClick={onClick} className="text-lg py-3 shadow-lg font-black uppercase tracking-wide">
        ACESSAR RECEITA AGORA
      </Button>
    </div>
  );
};