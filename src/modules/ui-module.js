/**
 * ui-module.js
 * 공통 UI 효과 및 애니메이션 유틸리티 (Global Namespace 방식)
 */
(function() {
  /**
   * 숫자가 목표값까지 올라가는 애니메이션
   */
  function animateCount(element, start, end, duration = 1500) {
    if (!element) return;
    
    let startTime = null;

    function step(timestamp) {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const easedProgress = 1 - Math.pow(1 - progress, 3); // Ease out cubic
      
      const current = Math.floor(easedProgress * (end - start) + start);
      element.textContent = current;

      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    }

    window.requestAnimationFrame(step);
  }

  /**
   * 간단한 토스트 메시지 출력
   */
  function showToast(message) {
    const toast = document.createElement('div');
    toast.className = 'ui-toast';
    toast.textContent = message;
    document.body.appendChild(toast);
    
    Object.assign(toast.style, {
      position: 'fixed',
      bottom: '50px',
      left: '50%',
      transform: 'translateX(-50%)',
      backgroundColor: 'rgba(0,0,0,0.8)',
      color: 'white',
      padding: '12px 24px',
      borderRadius: '25px',
      zIndex: '10000',
      fontSize: '0.9rem',
      opacity: '0',
      transition: 'opacity 0.3s ease'
    });

    setTimeout(() => toast.style.opacity = '1', 10);
    setTimeout(() => {
      toast.style.opacity = '0';
      setTimeout(() => toast.remove(), 300);
    }, 3000);
  }

  /**
   * 배경 부유 아이콘 및 특수 효과 초기화
   */
  function initVisualEffects(containerId, emojiList = ['✨', '🌟', '💫', '🔥', '⚡']) {
    const container = document.getElementById(containerId);
    if (!container) return;

    for (let i = 0; i < 15; i++) {
      const item = document.createElement('div');
      item.className = 'floating-item';
      item.textContent = emojiList[Math.floor(Math.random() * emojiList.length)];
      
      const left = Math.random() * 100;
      const top = Math.random() * 100;
      const delay = Math.random() * 5;
      const duration = 3 + Math.random() * 4;
      
      item.style.left = `${left}%`;
      item.style.top = `${top}%`;
      item.style.animationDelay = `${delay}s`;
      item.style.setProperty('--duration', `${duration}s`);
      
      container.appendChild(item);
    }
  }

  /**
   * 폭죽(Confetti) 효과 생성
   */
  function createConfetti() {
    for (let i = 0; i < 100; i++) {
      const confetti = document.createElement('div');
      confetti.className = 'confetti';
      
      const colors = ['#f2d74e', '#95c3de', '#ff9a91', '#85e3c0', '#a18cd1'];
      confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
      
      confetti.style.left = Math.random() * 100 + 'vw';
      const duration = 2 + Math.random() * 3;
      confetti.style.setProperty('--duration', `${duration}s`);
      confetti.style.opacity = Math.random();
      
      document.body.appendChild(confetti);
      
      setTimeout(() => confetti.remove(), duration * 1000);
    }
  }

  /**
   * 사용자의 공용 IP 가져오기 (ipify API 사용)
   */
  async function fetchUserIp() {
    try {
      const response = await fetch('https://api.ipify.org?format=json');
      const data = await response.json();
      return data.ip;
    } catch (err) {
      console.warn('IP 조회 실패:', err);
      return '127.0.0.1'; // Fallback
    }
  }

  /**
   * IP 기반 고유 시리얼 번호 생성 (cyrb53 해시 사용)
   */
  function generateIpSerial(ip, category) {
    const seed = `${ip}-${category}-${new Date().toLocaleDateString()}`;
    let h1 = 0xdeadbeef, h2 = 0x41c6ce57;
    for (let i = 0, ch; i < seed.length; i++) {
      ch = seed.charCodeAt(i);
      h1 = Math.imul(h1 ^ ch, 2654435761);
      h2 = Math.imul(h2 ^ ch, 1597334677);
    }
    h1 = Math.imul(h1 ^ (h1 >>> 16), 2246822507) ^ Math.imul(h2 ^ (h2 >>> 13), 3266489909);
    h2 = Math.imul(h2 ^ (h2 >>> 16), 2246822507) ^ Math.imul(h1 ^ (h1 >>> 13), 3266489909);
    const hash = (4294967296 * (2097151 & h2) + (h1 >>> 0)).toString(16).toUpperCase();
    return `OZ-${hash.substring(0, 4)}-${hash.substring(4, 8)}`;
  }

  /**
   * IP 주소 마스킹 처리 (ex. 121.162.12.34 -> 121.162.***.***)
   */
  function maskIp(ip) {
    const parts = ip.split('.');
    if (parts.length !== 4) return ip;
    return `${parts[0]}.${parts[1]}.***.***`;
  }

  /**
   * IP 기반 시각적 개인화 적용 (Hue-rotate 활용)
   */
  function applyIpVisuals(ip, element) {
    if (!element) return;
    const lastOctet = parseInt(ip.split('.').pop()) || 0;
    const hueShift = (lastOctet * 3.6); // 0~255를 0~360도로 환산 (대략적)
    element.style.filter = `hue-rotate(${hueShift}deg)`;
  }

  // Global namespace 에 등록
  window.UIModule = {
    animateCount,
    showToast,
    initVisualEffects,
    createConfetti,
    fetchUserIp,
    generateIpSerial,
    maskIp,
    applyIpVisuals
  };
})();
