import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';

export const NotFound = () => {
  const { theme } = useTheme();
  
  return (
    <div className="container page-transition">
      <main style={{ 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        justifyContent: 'center',
        minHeight: '80vh'
      }}>
        <h1 style={{ fontSize: '5rem', color: 'var(--color-primary)' }}>404</h1>
        <h2 style={{ fontSize: '2rem', margin: '1rem 0' }}>页面走丢了 😵</h2>
        <Link 
          to="/" 
          style={{
            padding: '0.8rem 1.5rem',
            backgroundColor: 'var(--color-primary)',
            color: 'white',
            textDecoration: 'none',
            borderRadius: '4px',
            marginTop: '2rem',
            transition: 'var(--transition-base)'
          }}
          onMouseOver={(e) => e.target.style.backgroundColor = '#9c122e'}
          onMouseOut={(e) => e.target.style.backgroundColor = 'var(--color-primary)'}
        >
          返回首页
        </Link>
      </main>
    </div>
  );
};