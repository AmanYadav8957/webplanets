export interface SendEmailPayload {
  name: string;
  email: string;
  subject?: string;
  message?: string;
  phone?: string;
  from_name?: string;
  [key: string]: unknown;
}

export interface EmailServiceResponse {
  success: boolean;
  message?: string;
}

const WEB3FORMS_ACCESS_KEY =
  (import.meta.env.VITE_WEB3FORMS_ACCESS_KEY as string | undefined)

/**
 * Universal email dispatch service using Web3Forms
 */
export async function sendEmail(payload: SendEmailPayload): Promise<EmailServiceResponse> {
  try {
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        access_key: WEB3FORMS_ACCESS_KEY,
        from_name: payload.from_name || 'Pixfix Digital Support',
        ...payload,
      }),
    });

    const data = await response.json().catch(() => null);

    if (response.ok && data?.success) {
      return {
        success: true,
        message: data.message || 'Form submitted successfully',
      };
    }

    return {
      success: false,
      message:
        data?.message ||
        `Submission failed with status ${response.status}. Please try again.`,
    };
  } catch (err) {
    console.error('Universal email submission error:', err);
    return {
      success: false,
      message:
        err instanceof Error
          ? err.message
          : 'Unable to reach the email service. Please check your internet connection.',
    };
  }
}
