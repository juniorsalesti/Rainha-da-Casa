export type AnalyticsEventType =
  | 'quiz_started'
  | 'question_answered'
  | 'quiz_completed'
  | 'diagnosis_viewed'
  | 'product_viewed'
  | 'offer_viewed'
  | 'checkout_clicked';

export interface AnalyticsPayload {
  step?: string;
  questionId?: number;
  selectedOption?: string;
  tag?: string;
  diagnosisId?: string;
  price?: number;
  timeSpentSeconds?: number;
  customData?: Record<string, unknown>;
}

export function trackEvent(eventType: AnalyticsEventType, payload: AnalyticsPayload = {}): void {
  const timestamp = new Date().toISOString();
  
  // Console logging for verification
  console.log(`[Analytics Event: ${eventType}]`, {
    timestamp,
    ...payload,
  });

  // Standard window.dataLayer push if Google Tag Manager / Meta Pixel exists
  if (typeof window !== 'undefined') {
    const w = window as unknown as { dataLayer?: unknown[]; fbq?: (...args: unknown[]) => void };
    if (Array.isArray(w.dataLayer)) {
      w.dataLayer.push({
        event: eventType,
        ...payload,
        event_time: timestamp,
      });
    }

    // Meta Pixel standard events if configured
    if (typeof w.fbq === 'function') {
      if (eventType === 'quiz_started') {
        w.fbq('trackCustom', 'QuizStarted', payload);
      } else if (eventType === 'diagnosis_viewed') {
        w.fbq('trackCustom', 'DiagnosisViewed', payload);
      } else if (eventType === 'checkout_clicked') {
        w.fbq('track', 'InitiateCheckout', {
          value: payload.price || 29.90,
          currency: 'BRL',
          content_name: 'Metodo Rainha da Casa',
        });
      }
    }
  }
}
