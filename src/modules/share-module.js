/**
 * share-module.js
 * 결과 공유 및 이미지 저장 기능 담당 (Global Namespace 방식)
 * html2canvas 캡처 시 Tainted Canvas 이슈 방지 로직 포함
 */
(function() {
  const ShareModule = {
    // 1. URL 복사
    copyUrl: async () => {
      try {
        await navigator.clipboard.writeText(window.location.href);
        return true;
      } catch (err) {
        console.error('URL 복사 실패:', err);
        return false;
      }
    },

    // 2. SNS 공유
    shareToSNS: (type, data) => {
      const text = `난 ${data.category}에서 [${data.grade}] 등급을 받았어! 내 점수는 ${data.score}점! 너도 도전해봐!`;
      const url = encodeURIComponent(window.location.href);
      const shareText = encodeURIComponent(text);

      let shareUrl = '';
      switch (type) {
        case 'kakao':
          shareUrl = `https://story.kakao.com/share?url=${url}`;
          break;
        case 'instagram':
          alert('결과 이미지를 저장한 뒤, 인스타그램 스토리에 업로드해보세요!');
          return;
        case 'x':
          shareUrl = `https://twitter.com/intent/tweet?text=${shareText}&url=${url}`;
          break;
      }
      if (shareUrl) window.open(shareUrl, '_blank');
    },

    // 3. 결과 이미지로 내보내기 (html2canvas)
    exportToImage: async (elementId, fileName = 'my-quiz-result.png') => {
      // 보안 안내: file:// 프로토콜에서는 캡처/저장이 차단되는 브라우저가 많음
      if (window.location.protocol === 'file:') {
        alert('보안 정책상 로컬 경로(file://)에서는 이미지 저장이 어렵습니다.\nVS Code나 서버 환경에서 실행하여 테스트해주세요!\n(또는 캡처 기능을 직접 이용해주세요)');
        // 그래도 시도는 해봄
      }

      const element = document.getElementById(elementId);
      if (!element) return;

      try {
        if (typeof html2canvas === 'undefined') {
          await new Promise((resolve, reject) => {
            const script = document.createElement('script');
            script.src = 'https://html2canvas.hertzen.com/dist/html2canvas.min.js';
            script.onload = resolve;
            script.onerror = reject;
            document.head.appendChild(script);
          });
        }

        // 이미지 Base64 사전 변환 (file:// 프로토콜에서는 CORS로 인해 차단되므로 건너뛰거나 대체)
        const images = element.getElementsByTagName('img');
        for (let img of images) {
          if (img.src && !img.src.startsWith('data:') && window.location.protocol !== 'file:') {
            try {
              const res = await fetch(img.src);
              if (res.ok) {
                const blob = await res.blob();
                const base64 = await new Promise((resolve) => {
                  const reader = new FileReader();
                  reader.onloadend = () => resolve(reader.result);
                  reader.readAsDataURL(blob);
                });
                img.src = base64;
              }
            } catch (e) {
              console.warn('Image preprocessing failed. If you are on a local machine, please use VS Code Live Server.', e);
            }
          }
        }

        const isMobile = /Mobi|Android/i.test(navigator.userAgent);
        const targetSize = isMobile ? 1024 : 2048;
        const currentWidth = element.offsetWidth || 600;
        const scale = targetSize / currentWidth;

        const canvas = await html2canvas(element, {
          scale: scale,
          useCORS: true,
          allowTaint: true,
          backgroundColor: '#ffffff',
          logging: false,
          onclone: (clonedDoc) => {
            const clonedEl = clonedDoc.getElementById(elementId);
            if (clonedEl) {
              clonedEl.style.position = 'static';
              clonedEl.style.display = 'flex';
              clonedEl.style.visibility = 'visible';
            }
          }
        });

        const dataUrl = canvas.toDataURL("image/png");
        return dataUrl; // Return the base64 image data
        
      } catch (err) {
        console.error('이미지 생성 오류:', err);
        return null; // Return null on failure
      }
    }
  };

  window.ShareModule = ShareModule;
})();
