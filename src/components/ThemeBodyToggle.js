'use client';

import { useEffect } from 'react';

export default function ThemeBodyToggle() {
  useEffect(() => {
    document.body.classList.add('theme-red-white');
    return () => {
      document.body.classList.remove('theme-red-white');
    };
  }, []);

  return null;
}
