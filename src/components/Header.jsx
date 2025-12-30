import React from 'react';

const Header = () => {
  return (
    <header className="relative z-10 py-8 px-4 text-center animate-fade-in">
      {/* Logo */}
      <div className="mb-4 flex justify-center items-center gap-3">
        <div className="relative">
          <svg width="60" height="60" viewBox="0 0 100 100" className="animate-float">
            <defs>
              <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#dd6b20" />
                <stop offset="100%" stopColor="#ff8c42" />
              </linearGradient>
            </defs>
            <path
              d="M 20 80 L 50 20 L 80 80 L 65 80 L 50 50 L 35 80 Z"
              fill="url(#logoGradient)"
              className="drop-shadow-lg"
            />
            <circle cx="50" cy="20" r="8" fill="url(#logoGradient)" className="glow-orange" />
          </svg>
        </div>
        <h1 className="text-5xl md:text-6xl font-display font-bold tracking-tight">
          Ai<span className="text-aigs-orange">GS</span>
        </h1>
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
