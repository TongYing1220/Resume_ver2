import React from 'react';
import { Card } from '../components/Card';
import { ProgressBar } from '../components/ProgressBar';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const skillsData = [
  {
    category: '编程 💻',
    items: [
      { id: 'c', value: 80, label: 'C 语言' },
      { id: 'cpp', value: 75, label: 'C++' },
      { id: 'java', value: 70, label: 'Java' },
    ],
  },
  {
    category: '工具 🚀',
    items: [
      { id: 'git', value: 65, label: 'Git, VS Code' },
    ],
  },
  {
    category: '设计 ✨',
    items: [
      { id: 'ps', value: 85, label: 'Photoshop，画世界pro' },
    ],
  },
];

const hobbyData = [
  {
    name: '绘画',
    desc: '水彩，电子绘画',
    images: [
      { src: '/images/D238ECF50E1C4631092C65B99BC420AA.jpg', alt: '水彩画' },
      { src: '/images/psc.webp', alt: '电子绘画' },
    ],
  },
  { name: '书法', desc: '软笔，硬笔' },
  { name: '游戏', desc: '崩坏：星穹铁道、绝区零' },
];

const educationData = [
  {
    school: '中国科学技术大学',
    major: '计算机科学与技术',
    time: '2024 - 至今',
    courses: '主修课程：数据结构、算法、图论',
  },
];

export const Home = () => {
  const { addElement } = useScrollAnimation();

  return (
    <div className="container page-transition">
      <main>
        <section>
          <h2>关于我</h2>
          <p>
            大学计算机专业大二学生，热衷前端开发。课堂夯实数据结构等专业基础，<br/>
            课后深耕C、C++、Java等编程语言，通过线上课程补充工程化知识。<br/>
            性格严谨，注重代码质量与用户体验，擅长独立解决技术问题，也乐于团队合作。<br/>
            计划通过更多实战提升协作与复杂应用开发能力。
          </p>
        </section>

        <section>
          <h2>兴趣爱好</h2>
          <ul className="hobby-list">
            {hobbyData.map((hobby, idx) => (
              <li key={idx}>
                <strong>{hobby.name}</strong>：{hobby.desc}
                {hobby.images && (
                  <div className="hobby-img-container">
                    {hobby.images.map((img, imgIdx) => (
                      <img 
                        key={imgIdx}
                        src={img.src} 
                        alt={img.alt} 
                        className="hobby-img"
                      />
                    ))}
                  </div>
                )}
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2>技能</h2>
          <div className="skills-grid">
            {skillsData.map((skillCat, idx) => (
              <Card 
                key={idx} 
                type="skill" 
                className="lazy-load" 
                refProp={addElement}
              >
                <h3>{skillCat.category}</h3>
                {skillCat.items.map(item => (
                  <ProgressBar 
                    key={item.id}
                    id={item.id}
                    value={item.value}
                    label={item.label}
                  />
                ))}
              </Card>
            ))}
          </div>
        </section>

        <section>
          <h2>教育经历</h2>
          {educationData.map((edu, idx) => (
            <Card 
              key={idx} 
              type="education" 
              className="lazy-load" 
              refProp={addElement}
            >
              <h3>{edu.school}</h3>
              <p>{edu.major} | {edu.time}</p>
              <p>{edu.courses}</p>
            </Card>
          ))}
        </section>
      </main>
    </div>
  );
};