import React from 'react';
import { ArrowRight } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'electric';
  icon?: boolean;
  fullWidth?: boolean;
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  icon = false, 
  fullWidth = false,
  className = '',
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center px-6 py-4 text-sm font-bold uppercase tracking-widest transition-all duration-300 rounded-sm hover:scale-105 active:scale-95 cursor-pointer";
  
  const variants = {
    // Primary: White background, Black text (High contrast for Dark Mode)
    primary: "bg-white text-black hover:bg-neutral-200 border border-transparent shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)]",
    
    // Secondary: Dark background, White border
    secondary: "bg-transparent text-white border border-white/20 hover:bg-white hover:text-black hover:border-white hover:shadow-[0_0_20px_rgba(255,255,255,0.2)]",
    
    // Outline: Fully transparent, subtle border
    outline: "bg-transparent text-white border border-white/10 hover:border-white/50 hover:bg-white/5 hover:shadow-[0_0_15px_rgba(255,255,255,0.1)]",
    
    // Electric: Brand blue accent
    electric: "bg-electric text-white hover:bg-blue-600 border border-transparent shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_40px_rgba(37,99,235,0.6)]"
  };

  const widthClass = fullWidth ? "w-full" : "";

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${widthClass} ${className}`}
      {...props}
    >
      {children}
      {icon && <ArrowRight className="ml-2 w-4 h-4" />}
    </button>
  );
};

export default Button;