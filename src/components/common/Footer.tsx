'use client';

import { useEffect, useState } from 'react';

const YEAR = new Date().getFullYear();

const getDateTime = () => {
  const d = new Date();
  const date = d.toLocaleDateString('en-US', { dateStyle: 'medium' });
  const time = d.toLocaleTimeString('en-US', { timeStyle: 'short', hour12: false });
  return { date, time };
};

export default function Footer() {
  const [{ date, time }, setDateTime] = useState({ date: '', time: '' });

  useEffect(() => {
    const timer = setInterval(() => {
      const { time } = getDateTime();
      setDateTime((state) => ({ ...state, time }));
    }, 60000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <footer className="global-section">
      <p>Copyright &copy; {YEAR}. All rights reserved.</p>
      <time>
        {date} | {time} IST
      </time>
    </footer>
  );
}
