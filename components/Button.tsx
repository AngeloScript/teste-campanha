import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'danger';
  fullWidth?: boolean;
  pulse?: boolean;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  fullWidth = false, 
  pulse = false,
  children, 
  className = '',
  ...props 
}) => {
  const baseStyles = "font-bold py-4 px-6 rounded-xl shadow-lg transition-all duration-300 transform hover:scale-[1.02] active:scale-95 text-lg md:text-xl flex items-center justify-center gap-2 cursor-pointer";
  
  const variants = {
    primary: "bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white border-b-4 border-green-800 shadow-green-500/30",
    secondary: "bg-brand-pink hover:bg-brand-darkPink text-white border-b-4 border-brand-darkPink shadow-brand-pink/30",
    outline: "bg-transparent border-2 border-brand-pink text-brand-pink hover:bg-brand-pink hover:text-white",
    danger: "bg-gradient-to-r from-red-500 to-red-600 text-white border-b-4 border-red-800 shadow-red-500/30"
  };

  const widthClass = fullWidth ? "w-full" : "";
  const pulseClass = pulse ? "animate-pulse-slow" : "";

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${widthClass} ${pulseClass} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};