import React from 'react';
import { useTheme } from '../context/ThemeContext';

export const DarkModeToggle = () => {
  const { theme, toggleTheme } = useTheme();
  
  return (
    <button 
      className="dark-mode-float"
      onClick={toggleTheme}
      aria-label={theme === 'light' ? '切换暗黑模式' : '切换浅色模式'}
    >
      {theme === 'light' ? '🌙' : '☀️'}
    </button>
  );
};