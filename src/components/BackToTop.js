import React from 'react';

export const BackToTop = () => {
  // 回到顶部函数
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <button 
      className="back-to-top"
      onClick={scrollToTop}
      aria-label="返回顶部"
    >
      ↑
    </button>
  );
};