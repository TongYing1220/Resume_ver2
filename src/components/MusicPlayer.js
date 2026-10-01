import React, { useState, useRef, useEffect } from 'react';

export const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  // 切换播放/暂停
  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      // 处理浏览器自动播放限制
      audioRef.current.play().catch(err => {
        alert('浏览器阻止了自动播放，请手动点击播放按钮开启背景音乐');
      });
    }
    setIsPlaying(prev => !prev);
  };

  // 页面卸载时停止播放
  useEffect(() => {
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
      }
    };
  }, []);

  return (
    <>
      {/* 音乐播放按钮：样式和返回顶部按钮完全一致 */}
      <button 
        className="back-to-top music-btn" // 复用 back-to-top 样式，新增 music-btn 做位置调整
        onClick={togglePlay}
        aria-label={isPlaying ? '暂停音乐' : '播放音乐'}
      >
        {isPlaying ? '⏸️' : '▶️'}
      </button>
      <audio ref={audioRef} loop>
        {/* 音乐路径 */}
        <source src={`${process.env.PUBLIC_URL}/music/M500002MaLeO2UvdqL.mp3`} type="audio/mpeg" />
        您的浏览器不支持音频播放，请升级浏览器。
      </audio>
    </>
  );
};