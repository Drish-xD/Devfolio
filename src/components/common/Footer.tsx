'use client';

import { useEffect, useState } from 'react';

const YEAR = new Date().getFullYear();

export default function Footer() {
  const [time, setTime] = useState(
    new Date().toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: false
    })
  );

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(
        new Date().toLocaleTimeString('en-US', {
          hour: '2-digit',
          minute: '2-digit',
          hour12: false
        })
      );
    }, 60);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <footer className="global-section" id="footer">
      <p>Copyright &copy; {YEAR}. All rights reserved.</p>
      <p>{time} IST</p>
    </footer>
  );
}
