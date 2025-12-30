import React from 'react';
import ClassificationCard from './ClassificationCard';
import RoutingCard from './RoutingCard';
import SuggestedResponse from './SuggestedResponse';

const ResultsPanel = ({ result }) => {
  if (!result) return null;

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Header with Inquiry ID */}
      <div className="flex items-center justify-between animate-slide-up" style={{ animationDelay: '0.1s' }}>
        <div>
          <p className="text-sm text-white/50">Inquiry ID</p>
          <p className="text-lg font-mono font-semibold text-aigs-orange">{result.inquiry_id}</p>
        </div>
        <div className="text-right">
          <p className="text-sm text-white/50">Processed</p>
          <p className="text-sm font-medium">{formatDate(result.processed_at)}</p>
        </div>
      </div>

      {/* Success Animation */}
      <div className="glass-card p-6 bg-green-500/10 border-green-500/30 animate-slide-up flex items-center gap-3">
        <div className="flex-shrink-0">
          <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <div>
          <p className="font-semibold text-green-400">Inquiry Received & Processed</p>
          <p className="text-sm text-white/60 mt-1">AI analysis complete. Review the details below.</p>
        </div>
      </div>

      {/* AI Summary */}
      <div className="glass-card p-6 bg-aigs-blue/10 border-aigs-blue/30 animate-slide-up" style={{ animationDelay: '0.15s' }}>
        <h3 className="text-lg font-display font-semibold mb-3 flex items-center gap-2">
          <span className="text-aigs-blue">🤖</span>
          AI Summary
        </h3>
        <p className="text-white/90 leading-relaxed">{result.ai_summary}</p>
      </div>

      {/* Classification and Routing Grid */}
      <div className="grid md:grid-cols-2 gap-6">
        <ClassificationCard classification={result.classification} />
        <RoutingCard routing={result.routing} />
      </div>

      {/* Suggested Response */}
      <SuggestedResponse response={result.suggested_response} />
    </div>
  );
};

export default ResultsPanel;
