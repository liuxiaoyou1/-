'use client'
import { useEffect, useState } from 'react';

const baseSize=()=>{
    useEffect(() => {
        const handleResize = () => {
            let vh = window.innerHeight * 0.01
            document.documentElement.style.setProperty('--vh', `${vh}px`)
        }
    
        // 添加resize事件监听
        window.addEventListener('resize', handleResize);
    
        // 初始化设置一次根像素大小
        handleResize();
    
        // 移除resize事件监听
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, []);
}

export default baseSize