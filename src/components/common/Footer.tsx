'use client';

import { useEffect, useState } from 'react';

const getDateTime = () => {
  const d = new Date();
  const year = d.getFullYear();
  const date = d.toLocaleDateString('en-US', { dateStyle: 'medium' });
  const time = d.toLocaleTimeString('en-US', { timeStyle: 'short', hour12: false });
  return { date, time, year };
};

export default function Footer() {
  const [{ date, time, year }, setDateTime] = useState({ date: '', time: '', year: 0 });

  useEffect(() => {
    setDateTime(getDateTime());
  }, []);

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
      <p>Copyright &copy; {year}. All rights reserved.</p>
      <time>
        {date} | {time} IST
      </time>
    </footer>
  );
}
