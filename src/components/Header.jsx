import React from 'react';

const Header = () => {
  return (
    <header className="relative z-10 py-8 px-4 text-center animate-fade-in">
      {/* Logo */}
      <div className="mb-4 flex justify-center items-center gap-4">
        <img
          src="/AiGS logo.png"
          alt="AiGS Logo"
          className="h-16 md:h-20 w-auto animate-float drop-shadow-lg"
        />
      </div>

      {/* Tagline */}
      <p className="text-lg md:text-xl text-white/80 font-light mb-2">
        AI-Powered Process Automation & Data Intelligence
      </p>

      {/* Subtitle */}
      <div className="inline-block mt-4">
        <div className="glass-card px-6 py-3 inline-block">
          <p className="text-sm md:text-base font-medium text-aigs-orange">
            Customer Inquiry Router Demo
          </p>
        </div>
      </div>

      {/* Decorative line */}
      <div className="mt-8 max-w-md mx-auto h-px bg-gradient-to-r from-transparent via-aigs-orange/50 to-transparent"></div>
    </header>
  );
};

export default Header;
