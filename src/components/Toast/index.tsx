'use client';

import { useRouter } from 'next/navigation';
import { memo, useCallback, useEffect } from 'react';

import { useToastAnimation } from './Toast.anime';
import styles from './Toast.module.scss';

const START_TIMER = 5000;
const HIDE_TIMER = 25000;

const Toast = memo(function Toast({ text = 'Available for Freelance Work' }: { text?: string }) {
  const router = useRouter();
  const { ref, tween, showToast, hideToast } = useToastAnimation();

  useEffect(() => {
    const loader = sessionStorage.getItem('hideLoader');
    let startTimer: NodeJS.Timeout;
    let hideTimer: NodeJS.Timeout;
    if (tween && ref) {
      if (loader) {
        showToast();
      } else {
        startTimer = setTimeout(showToast, START_TIMER);
      }
      hideTimer = setTimeout(hideToast, HIDE_TIMER);
    }

    return () => {
      clearTimeout(hideTimer);
      clearTimeout(startTimer);
    };
  }, [tween, ref]);

  const handleToastClick = useCallback(() => {
    const emailId = 'hey@drishxd.dev';
    const subject = 'Freelance Inquiry - [Your Name]';
    const mailtoLink = `mailto:${emailId}?subject=${encodeURIComponent(subject)}}`;
    window?.navigator?.clipboard?.writeText(emailId).then(() => {
      router.push(mailtoLink);
    });
  }, []);

  return (
    <div className={styles.toast} ref={ref}>
      <p onClick={handleToastClick}>{text}</p>
      <button onClick={hideToast}>×</button>
    </div>
  );
});

export default Toast;
