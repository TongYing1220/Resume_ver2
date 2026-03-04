import React from 'react';
import { Accordion } from '../components/Accordion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const artworksData = [
  {
    title: '水彩画',
    image: '/images/D238ECF50E1C4631092C65B99BC420AA.jpg',
    description: `
      饮月君
    `
  },
  {
    title: '电子绘画',
    image: '/images/psc.webp',
    description: `
      白厄
    `
  },
  {
    title: '电子绘画',
    image: '/images/1b5b804e1132bc6ab1121a3ad52de4a7.png',
    description: `
      蹴鞠少女
    `
  }
];

export const Artworks = () => {
  const { addElement } = useScrollAnimation();

  return (
    <div className="container page-transition">
      <main>
        <section className="lazy-load" ref={addElement}>
          <h2>绘画作品</h2>
          <p>以下是我的部分绘画作品，点击标题展开/收起查看详情。</p>
          <Accordion items={artworksData} />
        </section>
      </main>
    </div>
  );
};