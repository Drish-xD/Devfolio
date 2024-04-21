'use client';

import { useReportWebVitals } from 'next/web-vitals';

import { sendGTMEvent } from '@next/third-parties/google';

export function WebVitals() {
  useReportWebVitals((metric) => {
    const webVitals = {
      ...metric,
      value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value)
    };
    sendGTMEvent({ event: 'web_vitals', web_vitals: webVitals });
    console.info('WebVitals : ', webVitals);
  });

  return <></>;
}

export default WebVitals;
