import React from 'react';
import { Card } from '../components/Card';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const aboutData = [
  {
    title: '个人背景',
    content: `
      本人就读于中国科学技术大学计算机科学与技术专业，目前大三在读。
      除了课堂学习，积极参与校内编程竞赛和开源项目，具备扎实的编程基础和解决问题的能力。
    `,
  },
  {
    title: '学习理念',
    content: `
      坚持“理论+实践”结合的学习方式，不仅注重数据结构、算法等基础理论的掌握，
      更重视通过实际项目将知识落地。擅长自主学习新技术，能够快速适应不同的开发场景，
      始终保持对前端开发的热情和探索精神。
    `,
  },
  {
    title: '个人特质',
    content: [
      '严谨细致：编写代码注重规范和可读性，重视边界条件和异常处理',
      '团队协作：乐于分享技术，能够高效参与团队沟通和协作',
      '持续学习：主动关注行业新技术、新框架，保持技术敏感度',
      '问题解决：面对技术难题能够冷静分析，通过查阅资料、调试等方式解决问题',
    ],
  },
];

export const About = () => {
  const { addElement } = useScrollAnimation();

  return (
    <div className="container page-transition">
      <main>
        <section>
          <h2>详细介绍</h2>
          {aboutData.map((item, idx) => (
            <Card 
              key={idx} 
              type="education" 
              className="lazy-load" 
              refProp={addElement}
            >
              <h3>{item.title}</h3>
              {Array.isArray(item.content) ? (
                <ul>
                  {item.content.map((point, pIdx) => (
                    <li key={pIdx}>{point}</li>
                  ))}
                </ul>
              ) : (
                <p>{item.content}</p>
              )}
            </Card>
          ))}
        </section>
      </main>
    </div>
  );
};