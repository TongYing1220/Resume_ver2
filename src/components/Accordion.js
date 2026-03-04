import React, { useState } from 'react';

// 手风琴子项组件（保持基础结构不变）
const AccordionItem = ({ title, children }) => {
  const [isActive, setIsActive] = useState(false);
  const toggleActive = () => setIsActive(prev => !prev);

  return (
    <div className={`accordion-item ${isActive ? 'active' : ''}`}>
      <div className="accordion-header" onClick={toggleActive}>
        {title}
      </div>
      <div className="accordion-content">
        <div className="accordion-inner">
          {children}
        </div>
      </div>
    </div>
  );
};

// 改造后的Accordion组件：支持绘画/项目两种数据类型
export const Accordion = ({ items, type = 'artwork' }) => {
  return (
    <div className="accordion">
      {items.map((item, idx) => (
        <AccordionItem key={idx} title={item.title}>
          {/* 根据type渲染不同内容 */}
          {type === 'project' ? (
            // 项目经验：显示文字信息（时间+描述+特性列表）
            <div style={{ width: '100%', textAlign: 'left' }}>
              {/* 项目时间 */}
              {item.time && (
                <p style={{ 
                  margin: '0 0 0.5rem 0', 
                  fontStyle: 'italic',
                  color: 'var(--color-secondary)'
                }}>
                  {item.time}
                </p>
              )}
              {/* 项目描述 */}
              {item.desc && (
                <p style={{ 
                  margin: '0 0 1rem 0',
                  color: 'var(--color-secondary)',
                  lineHeight: 1.8
                }}>
                  {item.desc}
                </p>
              )}
              {/* 项目特性列表 */}
              {item.features && item.features.length > 0 && (
                <ul style={{ 
                  margin: 0, 
                  paddingLeft: '20px',
                  color: 'var(--color-secondary)'
                }}>
                  {item.features.map((feature, fIdx) => (
                    <li key={fIdx} style={{ marginBottom: '0.5rem' }}>
                      {feature}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ) : (
            // 绘画作品：原有图片+描述逻辑
            <>
              <img 
                src={item.image} 
                alt={item.title} 
                className="artwork-img" 
              />
              <p className="artwork-desc">{item.description}</p>
            </>
          )}
        </AccordionItem>
      ))}
    </div>
  );
};