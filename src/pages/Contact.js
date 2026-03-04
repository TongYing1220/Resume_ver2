import React from 'react'; 
import { Card } from '../components/Card';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { contactInfo } from '../components/Header';

export const Contact = () => {
  const { addElement } = useScrollAnimation();

  return (
    <div className="container page-transition">
      <main>
        <section>
          <h2>联系方式</h2>
          <Card 
            type="education" 
            className="lazy-load" 
            refProp={addElement}
          >
            <ul style={{ listStyle: 'none', lineHeight: '2.5' }}>
              {/* 邮箱链接：点击唤起邮件客户端 */}
              <li>
                📧 邮箱：
                  {contactInfo.email}
              </li>
              <li>📱 手机：{contactInfo.phone}</li>
              {/* GitHub链接 */}
              <li>
                💻 GitHub：
                <a 
                  href={contactInfo.github} 
                  style={{ color: 'var(--color-primary)', textDecoration: 'none', marginLeft: '4px' }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {contactInfo.github}
                </a>
              </li>
              {/* 学校链接：指向中科大官网 */}
              <li>
                🏫 学校：
                <a 
                  href="https://www.ustc.edu.cn/"
                  style={{ color: 'var(--color-primary)', textDecoration: 'none', marginLeft: '4px' }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  中国科学技术大学
                </a>
              </li>
            </ul>
          </Card>
        </section>
      </main>
    </div>
  );
};