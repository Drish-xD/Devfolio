'use client';

import { useRouter } from 'next/navigation';
import { useCallback, useEffect, useRef, useState } from 'react';

import { useToastAnimation } from './Toast.anime';
import styles from './Toast.module.scss';

const START_TIMER = 5000;
const HIDE_TIMER = 20000;

const Toast = ({ text = 'Available for Freelance Work' }: { text?: string }) => {
  const router = useRouter();
  const [copied, setCopied] = useState(false);
  const timerRef = useRef<NodeJS.Timeout>();
  const { ref, showToast, hideToast } = useToastAnimation();

  useEffect(() => {
    return clearTimeout(timerRef.current);
  }, []);

  useEffect(() => {
    const loader = sessionStorage.getItem('hideLoader');
    let startTimer: NodeJS.Timeout;
    let hideTimer: NodeJS.Timeout;

    if (loader) {
      showToast();
    } else {
      startTimer = setTimeout(showToast, START_TIMER);
    }
    hideTimer = setTimeout(hideToast, HIDE_TIMER);

    return () => {
      clearTimeout(hideTimer);
      clearTimeout(startTimer);
    };
  }, []);

  const handleToastClick = useCallback(() => {
    const emailId = 'hey@drishxd.dev';
    const subject = 'Freelance Inquiry - [Your Name]';
    const mailtoLink = `mailto:${emailId}?subject=${encodeURIComponent(subject)}}`;
    window?.navigator?.clipboard?.writeText(emailId).then(() => {
      setCopied(true);
      router.push(mailtoLink);
    });
    timerRef.current = setTimeout(() => setCopied(false), 500);
  }, []);

  return (
    <div className={styles.toast} ref={ref}>
      <p onClick={handleToastClick}>{copied ? 'Email Copied' : text}</p>
      <button onClick={hideToast}>×</button>
    </div>
  );
};

export default Toast;
