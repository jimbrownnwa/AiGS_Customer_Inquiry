import React, { useState } from 'react';
import { demoScenarios } from '../config/scenarios';

const DemoScenarios = ({ onSelectScenario }) => {
  const [isExpanded, setIsExpanded] = useState(true);

  return (
    <div className="glass-card p-6 md:p-8 animate-slide-up" style={{ animationDelay: '0.1s' }}>
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="flex items-center justify-between w-full mb-4 group"
      >
        <h2 className="text-2xl md:text-3xl font-display font-bold flex items-center gap-3">
          <span className="text-2xl">🎯</span>
          Demo Scenarios
        </h2>
        <svg
          className={`w-6 h-6 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isExpanded && (
        <div className="space-y-3 animate-fade-in">
          <p className="text-sm text-white/60 mb-4">
            Click a scenario to pre-fill the form with sample data
          </p>

          {demoScenarios.map((scenario, index) => (
            <button
              key={scenario.id}
              onClick={() => onSelectScenario(scenario.data)}
              className="w-full glass-card-hover p-4 text-left group"
              style={{ animationDelay: `${0.1 + index * 0.05}s` }}
            >
              <div className="flex items-start gap-3">
                <span className="text-3xl flex-shrink-0 group-hover:scale-110 transition-transform duration-200">
                  {scenario.icon}
                </span>
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-white group-hover:text-aigs-orange transition-colors duration-200">
                    {scenario.title}
                  </h3>
                  <p className="text-xs text-white/50 mt-1 line-clamp-2">
                    {scenario.data.message.substring(0, 100)}...
                  </p>
                </div>
                <svg
                  className="w-5 h-5 text-white/40 group-hover:text-aigs-orange group-hover:translate-x-1 transition-all duration-200 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default DemoScenarios;
