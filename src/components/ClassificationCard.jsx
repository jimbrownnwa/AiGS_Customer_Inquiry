import React from 'react';
import { categoryIcons, sentimentEmojis } from '../config/scenarios';

const ClassificationCard = ({ classification }) => {
  const urgencyColors = {
    low: 'bg-green-500/20 text-green-400 border-green-500/30',
    medium: 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30',
    high: 'bg-orange-500/20 text-orange-400 border-orange-500/30',
    critical: 'bg-red-500/20 text-red-400 border-red-500/30'
  };

  const sentimentColors = {
    positive: 'bg-green-500/20 text-green-400',
    neutral: 'bg-blue-500/20 text-blue-400',
    frustrated: 'bg-orange-500/20 text-orange-400',
    angry: 'bg-red-500/20 text-red-400'
  };

  return (
    <div className="glass-card p-6 animate-slide-up" style={{ animationDelay: '0.2s' }}>
      <h3 className="text-xl font-display font-semibold mb-4 flex items-center gap-2">
        <span className="text-aigs-orange">🏷️</span>
        Classification
      </h3>

      <div className="space-y-4">
        {/* Category */}
        <div className="flex items-center justify-between">
          <span className="text-white/60 text-sm">Category</span>
          <div className="flex items-center gap-2">
            <span className="text-2xl">
              {categoryIcons[classification.category] || '📋'}
            </span>
            <span className="font-semibold">
              {classification.category_display}
            </span>
          </div>
        </div>

        {/* Urgency */}
        <div className="flex items-center justify-between">
          <span className="text-white/60 text-sm">Urgency</span>
          <span className={`badge border ${urgencyColors[classification.urgency] || urgencyColors.medium}`}>
            {classification.urgency.toUpperCase()}
          </span>
        </div>

        {/* Sentiment */}
        <div className="flex items-center justify-between">
          <span className="text-white/60 text-sm">Sentiment</span>
          <div className="flex items-center gap-2">
            <span className="text-xl">
              {sentimentEmojis[classification.sentiment] || '😐'}
            </span>
            <span className={`badge ${sentimentColors[classification.sentiment] || sentimentColors.neutral}`}>
              {classification.sentiment.charAt(0).toUpperCase() + classification.sentiment.slice(1)}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClassificationCard;
