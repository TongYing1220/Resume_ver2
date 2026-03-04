import React from 'react';
import { Accordion } from '../components/Accordion'; // 引入通用Accordion组件
import { useScrollAnimation } from '../hooks/useScrollAnimation';

// 项目数据（调整字段名更通用，兼容Accordion组件）
const mockProjects = [
  {
    id: 1, 
    title: "宠物管理系统",
    time: "2025.05 - 2025.06",
    desc: "使用Java构造出的宠物店管理系统", // 保留desc，Accordion会兼容desc/description
    features: [
      "实现了管理员与用户的功能区分",
      "支持管理员管理宠物信息、账号创建与销毁",
      "实现了GUI界面"
    ]
  },
  {
    id: 2, 
    title: "2048小游戏",
    time: "2025.09 - 2025.10",
    desc: "使用Cmake构造出2048小游戏",
    features: [
      "实现了数字移动正确逻辑的构建与记录步数和得分功能",
      "支持返回上一步操作",
    ]
  },
  {
    id: 3, 
    title: "个人简历网站",
    time: "2025.12 - 2026.03",
    desc: "基于React开发的响应式个人简历网站",
    features: [
      "实现暗黑模式切换",
      "响应式布局适配移动端/平板/桌面端",
      "页面切换动画和滚动懒加载效果",
      "使用Context API管理全局状态"
    ]
  }
];

export const Projects = () => {
  const { addElement } = useScrollAnimation();

  return (
    <div className="container page-transition">
      <main>
        {/* 懒加载绑定，和Artworks组件保持一致 */}
        <section className="lazy-load" ref={addElement}>
          <h2>项目经验</h2>
          <p>以下是我的部分项目经验，点击标题展开/收起查看详情。</p>
          {/* 复用Accordion组件，传入项目数据 */}
          <Accordion items={mockProjects} type="project" />
        </section>
      </main>
    </div>
  );
};