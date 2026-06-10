'use client';

import { useEffect } from 'react';

export default function ScrollRevealInit() {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const observerOptions = {
      root: null, // viewport
      rootMargin: '0px 0px -40px 0px', // trigger slightly before entering viewport
      threshold: 0 // trigger as soon as any part of the bounding box intersects (essential for overflow: hidden clipped children)
    };

    const intersectionObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal-visible');
          // Unobserve once visible to improve performance
          intersectionObserver.unobserve(entry.target);
        }
      });
    }, observerOptions);

    const observeElement = (el) => {
      if (el.dataset.scrollRevealObserved) return;
      el.dataset.scrollRevealObserved = 'true';

      const rect = el.getBoundingClientRect();
      const hasLayout = rect.width > 0 || rect.height > 0;
      // If the element has layout and is in or above the viewport, reveal it immediately
      const inView = hasLayout && rect.top < window.innerHeight;

      if (inView) {
        el.classList.add('reveal-visible');
      } else {
        intersectionObserver.observe(el);
      }
    };

    // 1. Observe any elements already present in the DOM
    const initialElements = document.querySelectorAll('.reveal');
    initialElements.forEach(observeElement);

    // 2. Set up MutationObserver to watch for elements dynamically added later (hydration/navigation)
    const mutationObserver = new MutationObserver((mutations) => {
      for (const mutation of mutations) {
        for (const node of mutation.addedNodes) {
          if (node.nodeType === 1) { // ELEMENT_NODE
            if (node.classList && node.classList.contains('reveal')) {
              observeElement(node);
            }
            const descendants = node.querySelectorAll('.reveal');
            descendants.forEach(observeElement);
          }
        }
      }
    });

    mutationObserver.observe(document.body, {
      childList: true,
      subtree: true
    });

    return () => {
      intersectionObserver.disconnect();
      mutationObserver.disconnect();
    };
  }, []);

  return null;
}

