"use client"
import { useState, useEffect } from 'react';

const BackToTopButton = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const checkScrollHeight = () => {
      setShowButton(window.pageYOffset > 400);
    };

    window.addEventListener('scroll', checkScrollHeight);
    return () => {
      window.removeEventListener('scroll', checkScrollHeight);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <span
      className={`duration-400 fixed bottom-8 right-8 flex h-8 w-8 cursor-pointer items-center justify-center rounded bg-purple-700 opacity-50 transition-opacity ease-in-out hover:opacity-100 ${
        showButton ? 'flex' : 'hidden'
      }`}
      onClick={scrollToTop}
    >
      <svg
        width={24}
        height={24}
        viewBox="0 0 24 24"
        fill="none"
        stroke="#ffffff"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 19V5M5 12l7-7 7 7" />
      </svg>
    </span>
  );
};

export default BackToTopButton;