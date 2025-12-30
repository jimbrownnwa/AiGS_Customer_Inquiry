import React from 'react';

const RoutingCard = ({ routing }) => {
  const getPriorityColor = (score) => {
    if (score >= 80) return 'from-red-500 to-orange-500';
    if (score >= 60) return 'from-orange-500 to-yellow-500';
    if (score >= 40) return 'from-yellow-500 to-green-500';
    return 'from-green-500 to-blue-500';
  };

  return (
    <div className="glass-card p-6 animate-slide-up" style={{ animationDelay: '0.3s' }}>
      <h3 className="text-xl font-display font-semibold mb-4 flex items-center gap-2">
        <span className="text-aigs-orange">🎯</span>
        Routing Information
      </h3>

      <div className="space-y-4">
        {/* Assigned Team */}
        <div>
          <span className="text-white/60 text-sm block mb-1">Assigned Team</span>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-aigs-orange animate-pulse"></div>
            <span className="font-semibold text-lg">{routing.assigned_team}</span>
          </div>
        </div>

        {/* Tier */}
        <div className="flex items-center justify-between">
          <span className="text-white/60 text-sm">Support Tier</span>
          <span className="badge bg-aigs-blue/20 text-aigs-blue border border-aigs-blue/30">
            {routing.tier}
          </span>
        </div>

        {/* Estimated Response Time */}
        <div className="flex items-center justify-between">
          <span className="text-white/60 text-sm">Est. Response Time</span>
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4 text-aigs-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="font-semibold">{routing.estimated_response_time}</span>
          </div>
        </div>

        {/* Priority Score */}
        <div>
          <div className="flex items-center justify-between mb-2">
            <span className="text-white/60 text-sm">Priority Score</span>
            <span className="font-bold text-xl">{routing.priority_score}/100</span>
          </div>
          <div className="relative h-3 bg-white/10 rounded-full overflow-hidden">
            <div
              className={`h-full bg-gradient-to-r ${getPriorityColor(routing.priority_score)} rounded-full transition-all duration-1000 ease-out glow-orange`}
              style={{
                width: `${routing.priority_score}%`,
                animationDelay: '0.4s'
              }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoutingCard;
