import React, { useState } from 'react';

const SuggestedResponse = ({ response }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(response);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <div className="glass-card p-6 animate-slide-up" style={{ animationDelay: '0.5s' }}>
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-display font-semibold flex items-center gap-2">
          <span className="text-aigs-orange">💬</span>
          Suggested Response
        </h3>
        <button
          onClick={handleCopy}
          className="flex items-center gap-2 px-3 py-1.5 text-sm bg-white/5 hover:bg-white/10 border border-white/20 rounded-lg transition-all duration-200 group"
        >
          {copied ? (
            <>
              <svg className="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-green-400">Copied!</span>
            </>
          ) : (
            <>
              <svg className="w-4 h-4 group-hover:text-aigs-orange transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
              <span className="group-hover:text-aigs-orange transition-colors">Copy</span>
            </>
          )}
        </button>
      </div>

      <div className="relative">
        <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-aigs-orange to-transparent rounded-full"></div>
        <div className="pl-4 text-white/90 leading-relaxed">
          {response}
        </div>
      </div>
    </div>
  );
};

export default SuggestedResponse;
