'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, BookOpen } from 'lucide-react';

export default function BlogHero3D({ posts }) {
  const [rotation, setRotation] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [radius, setRadius] = useState(380);
  const dragRef = useRef({ startX: 0, startRotation: 0 });
  const animRef = useRef(null);
  const [mouseX, setMouseX] = useState(0); // Normalized X coordinate from -1 to 1
  const [activeSeqIndex, setActiveSeqIndex] = useState(0); // Active index in style sequence [0, 1]

  // Cycle preview: Style 1 (5s) -> Style 3 (5s)
  useEffect(() => {
    const timer = setTimeout(() => {
      setActiveSeqIndex((prev) => (prev + 1) % 2);
    }, 5000);

    return () => clearTimeout(timer);
  }, [activeSeqIndex]);

  // Handle global cursor position tracking for background text distortion
  useEffect(() => {
    const handleMouseMove = (e) => {
      const w = window.innerWidth;
      // Map mouse clientX from [0, w] to [-1, 1]
      const normX = (e.clientX / w) * 2 - 1;
      setMouseX(normX);
    };

    const handleTouchMove = (e) => {
      if (e.touches && e.touches[0]) {
        const w = window.innerWidth;
        const normX = (e.touches[0].clientX / w) * 2 - 1;
        setMouseX(normX);
      }
    };

    const handleMouseLeaveOrEnd = () => {
      setMouseX(0); // Reset to center (no stretch)
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchmove', handleTouchMove);
    document.addEventListener('mouseleave', handleMouseLeaveOrEnd);
    window.addEventListener('touchend', handleMouseLeaveOrEnd);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
      document.removeEventListener('mouseleave', handleMouseLeaveOrEnd);
      window.removeEventListener('touchend', handleMouseLeaveOrEnd);
    };
  }, []);

  // Responsive radius adjustment based on viewport
  useEffect(() => {
    const handleResize = () => {
      const w = window.innerWidth;
      if (w < 480) {
        setRadius(200);
      } else if (w < 768) {
        setRadius(260);
      } else if (w < 1024) {
        setRadius(320);
      } else {
        setRadius(400);
      }
    };
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Frame tick for auto-rotation
  useEffect(() => {
    if (isHovered || isDragging) {
      if (animRef.current) cancelAnimationFrame(animRef.current);
      return;
    }

    const tick = () => {
      setRotation((r) => (r + 0.48) % 360);
      animRef.current = requestAnimationFrame(tick);
    };

    animRef.current = requestAnimationFrame(tick);
    return () => {
      if (animRef.current) cancelAnimationFrame(animRef.current);
    };
  }, [isHovered, isDragging]);

  // Drag handlers (Mouse)
  const handleMouseDown = (e) => {
    setIsDragging(true);
    dragRef.current = {
      startX: e.clientX,
      startRotation: rotation,
    };
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    const deltaX = e.clientX - dragRef.current.startX;
    // Map drag distance to rotation degrees (smooth coefficient)
    setRotation(dragRef.current.startRotation + deltaX * 0.28);
  };

  const handleMouseUpOrLeave = () => {
    setIsDragging(false);
  };

  // Drag handlers (Touch for Mobile)
  const handleTouchStart = (e) => {
    setIsDragging(true);
    dragRef.current = {
      startX: e.touches[0].clientX,
      startRotation: rotation,
    };
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    const deltaX = e.touches[0].clientX - dragRef.current.startX;
    setRotation(dragRef.current.startRotation + deltaX * 0.35);
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  const zTilt = 15 * Math.sin((rotation * Math.PI) / 180);
  const n = posts.length;

  return (
    <section className="blog-hero-3d-section">
      {/* Background Rings / Decorative shapes embedded inside hero */}
      <div className="blog-hero-3d-bg-decor">
        <div className="decor-orb-1" />
        <div className="decor-orb-2" />
        <div className="decor-grid-lines" />
      </div>

      <div className="container blog-hero-3d-container">
        {/* 3D Viewport Wrapper */}
        <div 
          className="blog-hero-3d-viewport"
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUpOrLeave}
          onMouseLeave={handleMouseUpOrLeave}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
        >
          {/* Giant Static Background Text (Placed behind the 3D rotating scene) */}
          <div 
            className={`blog-hero-3d-pivot-text ${
              activeSeqIndex === 0 ? 'preview-style-0' : 'preview-style-2'
            }`}
            style={{
              '--layer-transition-duration': '5s'
            }}
          >
            {['B', 'L', 'O', 'G', 'S'].map((char, idx) => {
              const n = 5;
              let scaleY = 1;
              const maxStretch = 0.55; // Stretch up to 55% vertically downwards

              if (mouseX < 0) {
                // Cursor on left side: index 0 (B) stretches most, index 4 (S) stretches least
                const dist = Math.abs(mouseX);
                scaleY = 1 + maxStretch * dist * (1 - idx / (n - 1));
              } else if (mouseX > 0) {
                // Cursor on right side: index 4 (S) stretches most, index 0 (B) stretches least
                const dist = mouseX;
                scaleY = 1 + maxStretch * dist * (idx / (n - 1));
              }

              return (
                <span 
                  key={idx} 
                  className="blog-hero-3d-pivot-letter"
                  style={{ 
                    transform: `scaleY(${scaleY})`,
                  }}
                >
                  {/* Layer 1: Hollow Outline */}
                  <span className="letter-layer layer-hollow">{char}</span>
                  {/* Layer 2: Gradient Fill */}
                  <span className="letter-layer layer-gradient">{char}</span>
                </span>
              );
            })}
          </div>

          {/* Main 3D Container (Participates in preserve-3d) */}
          <div 
            className="blog-hero-3d-scene"
            style={{
              transform: `rotateX(-16deg) rotateZ(${zTilt}deg) rotateY(${rotation}deg)`,
            }}
          >

            {/* Orbiting Cards */}
            {posts.map((post, idx) => {
              const cardAngle = idx * (360 / n);
              // Calculate card rotation so it always faces forward (billboarding)
              const billboardRotation = -cardAngle - rotation;

              // Calculate dynamic opacity based on Z-depth (rotation position)
              const angleRad = ((cardAngle + rotation) * Math.PI) / 180;
              const cosAngle = Math.cos(angleRad);
              // Map cosAngle [-1, 1] to opacity [0.25, 1.0] for background fading
              const cardOpacity = 0.25 + (1 - 0.25) * (cosAngle + 1) / 2;

              // Calculate dynamic read time based on content length
              const wordCount = post.content ? post.content.split(/\s+/).length : 150;
              const readTime = Math.ceil(wordCount / 180); // 180 wpm reading speed

              return (
                <div 
                  key={post.slug}
                  className="blog-hero-3d-card-wrapper"
                  style={{
                    transform: `rotateY(${cardAngle}deg) translateZ(${radius}px) rotateY(${billboardRotation}deg)`,
                    opacity: cardOpacity,
                  }}
                >
                  <Link 
                    href={`/insights/blog/${post.slug}`}
                    className="blog-hero-3d-card"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                    onMouseDown={(e) => e.stopPropagation()} // Prevents dragging on click
                    onTouchStart={(e) => e.stopPropagation()}
                  >
                    {/* Background Image Overlay */}
                    <div className="hero-card-bg-image-wrapper">
                      <Image
                        src={post.banner}
                        alt={post.title}
                        fill
                        sizes="160px"
                        priority={idx < 4}
                        className="hero-card-bg-image"
                      />
                      <div className="hero-card-bg-overlay" />
                    </div>

                    {/* Content Overlay text */}
                    <div className="hero-card-overlay-content">
                      <span className="hero-card-overlay-category">
                        {post.category.replace('-', ' ')}
                      </span>
                      <h3 className="hero-card-overlay-title">
                        {post.title}
                      </h3>
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
