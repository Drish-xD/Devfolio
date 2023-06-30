'use client';

import { useEffect, useState } from 'react';

const YEAR = new Date().getFullYear();

export default function Footer() {
  const getDateTime = () => {
    const date = new Date().toLocaleDateString('en-US', { dateStyle: 'medium' });
    const time = new Date().toLocaleTimeString('en-US', { timeStyle: 'short', hour12: false });
    return { date, time };
  };
  const [{ date, time }, setDateTime] = useState(getDateTime());

  useEffect(() => {
    const timer = setInterval(() => {
      const { time } = getDateTime();
      setDateTime((state) => ({ ...state, time }));
      console.log(time);
    }, 60000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <footer className="global-section" id="footer">
      <p>Copyright &copy; {YEAR}. All rights reserved.</p>
      <p>
        {date} | {time}
      </p>
    </footer>
  );
}
