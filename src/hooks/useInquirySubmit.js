import { useState } from 'react';
import { submitInquiry, validateForm } from '../utils/api';

export const useInquirySubmit = () => {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);
  const [validationErrors, setValidationErrors] = useState({});

  const submit = async (formData) => {
    // Clear previous states
    setError(null);
    setResult(null);
    setValidationErrors({});

    // Validate form
    const errors = validateForm(formData);
    if (Object.keys(errors).length > 0) {
      setValidationErrors(errors);
      return { success: false, errors };
    }

    // Submit to API
    setLoading(true);
    try {
      const response = await submitInquiry(formData);

      if (response.success) {
        setResult(response.data);
        return { success: true, data: response.data };
      } else {
        setError(response.error);
        return { success: false, error: response.error };
      }
    } catch (err) {
      const errorMessage = err.message || 'An unexpected error occurred';
      setError(errorMessage);
      return { success: false, error: errorMessage };
    } finally {
      setLoading(false);
    }
  };

  const reset = () => {
    setLoading(false);
    setResult(null);
    setError(null);
    setValidationErrors({});
  };

  return {
    loading,
    result,
    error,
    validationErrors,
    submit,
    reset
  };
};
