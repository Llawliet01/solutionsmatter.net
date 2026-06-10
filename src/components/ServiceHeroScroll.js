'use client';

import { useEffect, useRef } from 'react';

export default function ServiceHeroScroll() {
  const progressRef = useRef(0);
  const touchStartYRef = useRef(0);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const hero = document.querySelector('.service-detail-hero');
    const bgWrapper = document.querySelector('.hero-bg-wrapper');
    const container = document.querySelector('.service-detail-hero .container');
    const textReveal = document.querySelector('.hero-text-reveal');
    const bgImg = document.querySelector('.hero-bg-img-el');

    if (!hero || !bgWrapper || !container) return;

    const updateDOM = (progress) => {
      // Scale background wrapper up from 0 to 1
      bgWrapper.style.transform = `scale(${progress})`;
      bgWrapper.style.opacity = progress > 0 ? 1 : 0;

      // 3-phase border-radius: circle → rounded rect → sharp
      let radius;
      if (progress <= 0.45) {
        const t = progress / 0.45;
        radius = 500 - t * 472;
      } else {
        const t = (progress - 0.45) / 0.55;
        radius = 28 * (1 - t);
      }
      bgWrapper.style.borderRadius = `${radius}px`;

      // Fade + slide in title/subtext in the final 25% of the animation
      if (textReveal) {
        if (progress >= 0.75) {
          const t = Math.min(1, (progress - 0.75) / 0.25);
          textReveal.style.opacity = t;
          // slides from 40px below → rests at exact position
          textReveal.style.transform = `translateY(${40 - t * 40}px)`;
        } else {
          textReveal.style.opacity = 0;
          textReveal.style.transform = `translateY(40px)`;
        }
      }

      // Smoothly transition background blur from 0px to 3px as the text appears
      if (bgImg) {
        if (progress >= 0.75) {
          const t = Math.min(1, (progress - 0.75) / 0.25);
          bgImg.style.filter = `blur(${t * 3}px)`;
        } else {
          bgImg.style.filter = 'blur(0px)';
        }
      }
    };

    const handleWheel = (e) => {
      const scrollY = window.scrollY;
      
      if (scrollY <= 0) {
        if (e.deltaY > 0 && progressRef.current < 1) {
          // Scrolling down: intercept scroll and zoom in the background image
          e.preventDefault();
          progressRef.current = Math.min(1, progressRef.current + e.deltaY / 800);
          updateDOM(progressRef.current);
        } else if (e.deltaY < 0 && progressRef.current > 0) {
          // Scrolling up: intercept scroll and zoom out the background image
          e.preventDefault();
          progressRef.current = Math.max(0, progressRef.current + e.deltaY / 800);
          updateDOM(progressRef.current);
        }
      }
    };

    const handleTouchStart = (e) => {
      touchStartYRef.current = e.touches[0].clientY;
    };

    const handleTouchMove = (e) => {
      const scrollY = window.scrollY;
      const currentY = e.touches[0].clientY;
      const deltaY = touchStartYRef.current - currentY;
      touchStartYRef.current = currentY;

      if (scrollY <= 0) {
        if (deltaY > 0 && progressRef.current < 1) {
          // Swipe up (scroll down): zoom in
          if (e.cancelable) e.preventDefault();
          progressRef.current = Math.min(1, progressRef.current + deltaY / 400);
          updateDOM(progressRef.current);
        } else if (deltaY < 0 && progressRef.current > 0) {
          // Swipe down (scroll up): zoom out
          if (e.cancelable) e.preventDefault();
          progressRef.current = Math.max(0, progressRef.current + deltaY / 400);
          updateDOM(progressRef.current);
        }
      }
    };

    const keys = ['ArrowUp', 'ArrowDown', 'PageUp', 'PageDown', ' ', 'Home', 'End'];
    const handleKeyDown = (e) => {
      const scrollY = window.scrollY;
      
      if (scrollY <= 0 && keys.includes(e.key)) {
        const isDown = e.key === 'ArrowDown' || e.key === ' ' || e.key === 'PageDown';
        const isUp = e.key === 'ArrowUp' || e.key === 'PageUp';
        
        if (isDown && progressRef.current < 1) {
          e.preventDefault();
          const step = e.key === 'PageDown' ? 0.2 : 0.05;
          progressRef.current = Math.min(1, progressRef.current + step);
          updateDOM(progressRef.current);
        } else if (isUp && progressRef.current > 0) {
          e.preventDefault();
          const step = e.key === 'PageUp' ? 0.2 : 0.05;
          progressRef.current = Math.max(0, progressRef.current - step);
          updateDOM(progressRef.current);
        }
      }
    };

    // Listeners for gestures and keyboard shortcuts
    window.addEventListener('wheel', handleWheel, { passive: false });
    window.addEventListener('touchstart', handleTouchStart, { passive: true });
    window.addEventListener('touchmove', handleTouchMove, { passive: false });
    window.addEventListener('keydown', handleKeyDown, { passive: false });

    // Set initial state
    updateDOM(progressRef.current);

    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return null;
}
