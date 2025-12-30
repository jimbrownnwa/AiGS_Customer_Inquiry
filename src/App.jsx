import React, { useState, useRef } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import InquiryForm from './components/InquiryForm';
import DemoScenarios from './components/DemoScenarios';
import ResultsPanel from './components/ResultsPanel';
import { useInquirySubmit } from './hooks/useInquirySubmit';

function App() {
  const { loading, result, error, validationErrors, submit, reset } = useInquirySubmit();
  const formRef = useRef(null);
  const resultsRef = useRef(null);
  const [scenarioData, setScenarioData] = useState(null);

  const handleSubmit = async (formData) => {
    const response = await submit(formData);

    if (response.success && resultsRef.current) {
      // Scroll to results after successful submission
      setTimeout(() => {
        resultsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 300);
    }
  };

  const handleScenarioSelect = (data) => {
    // Scroll to form when scenario is selected
    if (formRef.current) {
      formRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    // Pass the scenario data to the form
    setScenarioData(data);
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Animated Background Particles */}
      <div className="particles">
        <div className="particle" style={{ width: '300px', height: '300px', top: '10%', left: '10%', animationDuration: '25s' }}></div>
        <div className="particle" style={{ width: '200px', height: '200px', top: '60%', right: '15%', animationDuration: '20s', animationDelay: '2s' }}></div>
        <div className="particle" style={{ width: '250px', height: '250px', bottom: '10%', left: '50%', animationDuration: '30s', animationDelay: '4s' }}></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10">
        <Header />

        <main className="max-w-7xl mx-auto px-4 py-8">
          {/* Error Display */}
          {error && (
            <div className="mb-8 glass-card p-6 bg-red-500/10 border-red-500/30 animate-slide-up">
              <div className="flex items-start gap-3">
                <svg className="w-6 h-6 text-red-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div className="flex-1">
                  <p className="font-semibold text-red-400 mb-1">Submission Error</p>
                  <p className="text-white/80">{error}</p>
                  <button
                    onClick={reset}
                    className="mt-3 text-sm text-red-400 hover:text-red-300 underline"
                  >
                    Try Again
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Two-column layout on desktop, stacked on mobile */}
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Left Column - Form and Scenarios */}
            <div className="space-y-8" ref={formRef}>
              <InquiryForm
                onSubmit={handleSubmit}
                loading={loading}
                validationErrors={validationErrors}
                onReset={reset}
                scenarioData={scenarioData}
              />
              <DemoScenarios onSelectScenario={handleScenarioSelect} />
            </div>

            {/* Right Column - Results */}
            <div ref={resultsRef}>
              {result ? (
                <ResultsPanel result={result} />
              ) : (
                <div className="glass-card p-8 md:p-12 text-center animate-fade-in lg:sticky lg:top-8">
                  <div className="max-w-md mx-auto">
                    <div className="mb-6 inline-block">
                      <svg className="w-24 h-24 text-white/20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-display font-semibold mb-3 text-white/80">
                      Ready to Process
                    </h3>
                    <p className="text-white/60 leading-relaxed">
                      Submit a customer inquiry or select a demo scenario to see AI-powered classification, routing, and response generation in action.
                    </p>
                    <div className="mt-8 flex items-center justify-center gap-2 text-sm text-white/40">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                      <span>Powered by AI</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </div>
  );
}

export default App;
