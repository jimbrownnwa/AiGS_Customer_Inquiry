import React from 'react';

const Footer = () => {
  return (
    <footer className="relative z-10 py-8 px-4 mt-16 border-t border-white/10">
      <div className="max-w-6xl mx-auto text-center">
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 text-sm text-white/60">
          <p className="flex items-center gap-2">
            <span className="text-aigs-orange">⚡</span>
            Powered by n8n + OpenAI
          </p>
          <span className="hidden md:inline text-white/30">•</span>
          <p>Demo by AiGS</p>
          <span className="hidden md:inline text-white/30">•</span>
          <a
            href="https://www.aigs.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-aigs-orange hover:text-orange-400 transition-colors duration-200 hover:underline"
          >
            Visit AiGS.com
          </a>
        </div>

        <p className="mt-4 text-xs text-white/40">
          © {new Date().getFullYear()} Ai Global Solutions. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
