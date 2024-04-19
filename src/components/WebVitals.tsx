'use client';

import { useReportWebVitals } from 'next/web-vitals';

import { sendGTMEvent } from '@next/third-parties/google';

export function WebVitals() {
  useReportWebVitals((metric) => {
    sendGTMEvent({
      event: 'web_vitals',
      metric_id: metric.id,
      metric_name: metric.name,
      metric_value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
      metric_rating: metric.rating,
      navigation_type: metric.navigationType
    });
    console.info('WebVitals : ', metric);
  });

  return <></>;
}

export default WebVitals;
