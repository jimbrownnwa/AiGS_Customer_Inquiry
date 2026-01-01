const WEBHOOK_URL = import.meta.env.VITE_WEBHOOK_URL || 'https://n8n.srv1234150.hstgr.cloud/webhook-test/customer-inquiry';

export const submitInquiry = async (formData) => {
  try {
    console.log('🔍 Webhook URL being used:', WEBHOOK_URL);
    console.log('🔍 Environment variable:', import.meta.env.VITE_WEBHOOK_URL);

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 30000); // 30 second timeout

    const response = await fetch(WEBHOOK_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
      signal: controller.signal,
    });

    clearTimeout(timeoutId);

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.message || `HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return { success: true, data };

  } catch (error) {

    if (error.name === 'AbortError') {
      return {
        success: false,
        error: 'Request timed out. Please try again.'
      };
    }

    if (error.message.includes('Failed to fetch') || error.message.includes('NetworkError')) {
      return {
        success: false,
        error: 'Network error. Please check your connection and try again.'
      };
    }

    return {
      success: false,
      error: error.message || 'An unexpected error occurred. Please try again.'
    };
  }
};

export const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const validateForm = (formData) => {
  const errors = {};

  if (!formData.name || formData.name.trim().length === 0) {
    errors.name = 'Name is required';
  }

  if (!formData.email || formData.email.trim().length === 0) {
    errors.email = 'Email is required';
  } else if (!validateEmail(formData.email)) {
    errors.email = 'Please enter a valid email address';
  }

  if (!formData.message || formData.message.trim().length === 0) {
    errors.message = 'Message is required';
  } else if (formData.message.trim().length < 10) {
    errors.message = 'Message must be at least 10 characters';
  }

  return errors;
};
