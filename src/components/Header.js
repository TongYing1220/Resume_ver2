import React from 'react';
import { NavLink } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';

const navLinks = [
  { path: '/', label: '🏠 首页' },
  { path: '/about', label: 'ℹ️ 关于我' },
  { path: '/projects', label: '📝 项目经验' },
  { path: '/artworks', label: '🖼️ 绘画作品' },
  { path: '/contact', label: '📞 联系方式' },
];

export const contactInfo = {
  email: 'syt2108155403@mail.ustc.edu.cn',
  phone: '18788844759',
  github: 'https://github.com/TongYing1220',
  school: '中国科学技术大学',
};

export const Header = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <nav className="top-nav">
      <div className="nav-brand">
        <span>📍</span>
        <span>时渝童的个人简历</span>
      </div>
      <div className="nav-links">
        {navLinks.map((item, idx) => (
          <NavLink 
            key={idx}
            to={item.path}
            className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
          >
            {item.label}
          </NavLink>
        ))}
      </div>
      <button 
        className="theme-toggle"
        onClick={toggleTheme}
        aria-label={isDark ? '切换浅色模式' : '切换暗黑模式'}
      >
        {isDark ? '☀️' : '🌙'}
      </button>
    </nav>
  );
};