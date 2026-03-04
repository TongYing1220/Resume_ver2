import React, { useEffect, useRef, useState } from 'react';

export const BackgroundEffect = () => {
  const canvasRef = useRef(null);
  const [canvasSize, setCanvasSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });
  // 存储鼠标位置
  const mousePos = useRef({ x: null, y: null });

  // 适配窗口大小变化 + 监听鼠标移动
  useEffect(() => {
    const handleResize = () => {
      setCanvasSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
      initCanvas();
    };

    const handleMouseMove = (e) => {
      mousePos.current.x = e.clientX;
      mousePos.current.y = e.clientY;
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);
    initCanvas();
    
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // 初始化 Canvas 粒子特效
  const initCanvas = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    canvas.width = canvasSize.width;
    canvas.height = canvasSize.height;
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // 核心调整：更明显 + 更慢的配置
    const config = {
      particleCount: 80, // 粒子数量增加（更密集）
      particleSize: 2.5,  // 粒子大小翻倍（更显眼）
      particleColor: 'rgba(181, 23, 60, 0.85)', // 提高不透明度（更清晰）
      lineColor: 'rgba(181, 23, 60, 0.4)', // 连线更明显
      lineDistance: 180,  // 连线距离更远（更多连线）
      speed: 0.005,        // 基础速度降低（更慢）
      mouseDistance: 80, // 鼠标影响范围更大
      mouseForce: 0.004   // 鼠标吸引力更柔和（配合慢速度）
    };

    // 创建粒子数组
    const particles = [];
    for (let i = 0; i < config.particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        dx: (Math.random() - 0.5) * config.speed,
        dy: (Math.random() - 0.5) * config.speed
      });
    }

    // 绘制粒子和连线
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // 绘制粒子
      particles.forEach(particle => {
        // 鼠标跟随逻辑
        if (mousePos.current.x && mousePos.current.y) {
          const dx = particle.x - mousePos.current.x;
          const dy = particle.y - mousePos.current.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < config.mouseDistance) {
            particle.dx += -dx * config.mouseForce;
            particle.dy += -dy * config.mouseForce;
          }
        }

        // 更新粒子位置（慢速度）
        particle.x += particle.dx;
        particle.y += particle.dy;

        // 边界反弹（保留）
        if (particle.x < 0 || particle.x > canvas.width) particle.dx = -particle.dx;
        if (particle.y < 0 || particle.y > canvas.height) particle.dy = -particle.dy;

        // 绘制粒子（更显眼）
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, config.particleSize, 0, Math.PI * 2);
        ctx.fillStyle = config.particleColor;
        ctx.fill();
        // 新增：粒子外描边，进一步增强视觉效果
        ctx.strokeStyle = 'rgba(181, 23, 60, 0.9)';
        ctx.lineWidth = 0.3;
        ctx.stroke();
      });

      // 绘制粒子间的连线（更明显）
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < config.lineDistance) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = config.lineColor;
            ctx.lineWidth = 0.8; // 连线宽度增加（更明显）
            ctx.stroke();
          }
        }
      }

      requestAnimationFrame(draw);
    };

    draw();
  };

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: -1,
        pointerEvents: 'none',
        opacity: 0.9, // 提高画布透明度（更清晰）
        // 新增：轻微模糊，让粒子更柔和但不突兀
        filter: 'blur(0.5px)'
      }}
    />
  );
};