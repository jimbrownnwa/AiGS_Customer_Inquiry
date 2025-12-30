import React, { useState, useEffect } from 'react';

const InquiryForm = ({ onSubmit, loading, validationErrors, onReset, scenarioData }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  // Update form when scenario data changes
  useEffect(() => {
    if (scenarioData) {
      setFormData(scenarioData);
    }
  }, [scenarioData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const handleClear = () => {
    setFormData({
      name: '',
      email: '',
      company: '',
      message: ''
    });
    onReset();
  };

  return (
    <div className="glass-card p-6 md:p-8 animate-slide-up">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl md:text-3xl font-display font-bold">
          Submit Inquiry
        </h2>
        <button
          type="button"
          onClick={handleClear}
          className="text-sm text-white/60 hover:text-white transition-colors duration-200"
        >
          Clear Form
        </button>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Name Field */}
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-white/80 mb-2">
            Name <span className="text-aigs-orange">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={`input-field ${validationErrors.name ? 'border-red-500' : ''}`}
            placeholder="John Doe"
            disabled={loading}
          />
          {validationErrors.name && (
            <p className="mt-1 text-sm text-red-400">{validationErrors.name}</p>
          )}
        </div>

        {/* Email Field */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-white/80 mb-2">
            Email <span className="text-aigs-orange">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`input-field ${validationErrors.email ? 'border-red-500' : ''}`}
            placeholder="john.doe@company.com"
            disabled={loading}
          />
          {validationErrors.email && (
            <p className="mt-1 text-sm text-red-400">{validationErrors.email}</p>
          )}
        </div>

        {/* Company Field */}
        <div>
          <label htmlFor="company" className="block text-sm font-medium text-white/80 mb-2">
            Company <span className="text-white/40 text-xs">(optional)</span>
          </label>
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            className="input-field"
            placeholder="Acme Corporation"
            disabled={loading}
          />
        </div>

        {/* Message Field */}
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-white/80 mb-2">
            Message <span className="text-aigs-orange">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="5"
            className={`input-field resize-none ${validationErrors.message ? 'border-red-500' : ''}`}
            placeholder="Describe your inquiry or issue..."
            disabled={loading}
          />
          {validationErrors.message && (
            <p className="mt-1 text-sm text-red-400">{validationErrors.message}</p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={loading}
          className="btn-primary w-full flex items-center justify-center gap-2 relative overflow-hidden group"
        >
          {loading ? (
            <>
              <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                  fill="none"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                />
              </svg>
              <span>Processing...</span>
            </>
          ) : (
            <>
              <span>Submit Inquiry</span>
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </>
          )}
        </button>
      </form>
    </div>
  );
};

export default InquiryForm;
