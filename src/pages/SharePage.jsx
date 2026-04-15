import { useRef } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';

/**
 * share.html → SharePage.jsx
 * URL 파라미터: ?category=pokemon&mode=hard&score=16&grade=고인물
 * html2canvas CDN은 public/index.html에 <script> 태그로 추가하거나
 * npm install html2canvas 후 import 해서 사용
 */

const SCORE_MAX = 30;

function getStars(score, max = SCORE_MAX) {
  const pct = score / max;
  const filled = Math.round(pct * 5);
  return '★'.repeat(filled) + '☆'.repeat(5 - filled);
}

function getOneLiner(grade) {
  const map = {
    '전설의 덕후': '완벽한 덕력을 인증받았습니다! 🏆',
    '고인물':       '당신은 이미 고인물입니다. 🌊',
    '진성 팬':       '진심을 담아 좋아하는 당신! 💖',
    '라이트 팬':     '조금 더 파봐요, 빠져들 거예요! 🌀',
    '입문자':         '새로운 세계에 온 걸 환영해요! 🎉',
  };
  return map[grade] ?? '나의 덕력을 확인해봤어요!';
}

const CATEGORY_KO = {
  sanrio:  '산리오',
  pokemon: '포켓몬',
  aot:     '진격의 거인',
  kimetsu: '귀멸의 칼날',
  fma:     '강철의 연금술사',
};

export default function SharePage() {
  const [searchParams] = useSearchParams();
  const navigate        = useNavigate();
  const cardRef         = useRef(null);

  const category = searchParams.get('category') ?? 'sanrio';
  const mode     = searchParams.get('mode')     ?? 'normal';
  const score    = Number(searchParams.get('score')  ?? 0);
  const grade    = searchParams.get('grade')    ?? '입문자';

  const catKo   = CATEGORY_KO[category] ?? category;
  const stars   = getStars(score);
  const oneLiner = getOneLiner(grade);

  /* ── 이미지 저장 (html2canvas) ── */
  async function saveImage() {
    if (!window.html2canvas) {
      alert('html2canvas 라이브러리가 필요합니다.\nnpm install html2canvas 후 import 해주세요.');
      return;
    }
    const canvas = await window.html2canvas(cardRef.current, { useCORS: true });
    const link = document.createElement('a');
    link.download = '덕력감별소_결과.png';
    link.href = canvas.toDataURL();
    link.click();
  }

  /* ── 링크 복사 ── */
  function copyLink() {
    navigator.clipboard.writeText(window.location.href)
      .then(() => alert('링크가 복사됐어요!'));
  }

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '32px 16px 48px' }}>

      {/* 공유 카드 */}
      <div
        ref={cardRef}
        className="share-card"
        style={{
          width: '360px',
          aspectRatio: '9 / 16',
          background: 'linear-gradient(160deg, #FFE0EC 0%, #F0D9FF 100%)',
          borderRadius: '24px',
          boxShadow: '0 8px 40px rgba(180,120,200,0.25)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '36px 28px',
          boxSizing: 'border-box',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* 배경 장식 원 */}
        <div style={{
          position: 'absolute', top: '-60px', right: '-60px',
          width: '240px', height: '240px',
          background: 'rgba(255,255,255,0.25)',
          borderRadius: '50%',
          pointerEvents: 'none',
        }} />
        <div style={{
          position: 'absolute', bottom: '-80px', left: '-80px',
          width: '300px', height: '300px',
          background: 'rgba(255,255,255,0.15)',
          borderRadius: '50%',
          pointerEvents: 'none',
        }} />

        {/* 로고 */}
        <div style={{ textAlign: 'center', zIndex: 1 }}>
          <div style={{ fontSize: '0.72rem', letterSpacing: '3px', color: '#C060A0', fontWeight: 900, marginBottom: '4px' }}>
            CHARACTER QUIZ
          </div>
          <div style={{ fontSize: '1.6rem', fontWeight: 900, background: 'linear-gradient(135deg,#FF6FA8,#BF6FFF)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
            덕력 감별소
          </div>
        </div>

        {/* 카드 이미지 */}
        <div style={{
          width: '180px', height: '180px',
          borderRadius: '16px',
          overflow: 'hidden',
          boxShadow: '0 4px 20px rgba(0,0,0,0.15)',
          zIndex: 1,
        }}>
          <img
            src={`assets/main-cards/${category}.png`}
            alt={catKo}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            onError={(e) => { e.currentTarget.style.display = 'none'; }}
          />
        </div>

        {/* 결과 정보 */}
        <div style={{ textAlign: 'center', zIndex: 1 }}>
          <div style={{ fontSize: '0.82rem', color: '#C060A0', fontWeight: 700, marginBottom: '6px', letterSpacing: '1px' }}>
            {catKo} {mode === 'hard' ? '· HARD' : ''}
          </div>
          <div style={{ fontSize: '2rem', fontWeight: 900, color: '#3A1040', marginBottom: '4px' }}>
            {score} <span style={{ fontSize: '1.1rem', color: '#9070A0' }}>/ {SCORE_MAX}</span>
          </div>
          <div style={{ fontSize: '1.25rem', fontWeight: 800, color: '#7030B0', marginBottom: '8px' }}>
            {grade}
          </div>
          <div style={{ fontSize: '1.4rem', color: '#FF85A1', letterSpacing: '2px', marginBottom: '8px' }}>
            {stars}
          </div>
          <div style={{ fontSize: '0.88rem', color: '#8060A0', fontStyle: 'italic' }}>
            {oneLiner}
          </div>
        </div>

        {/* 하단 URL */}
        <div style={{ fontSize: '0.72rem', color: '#C0A0C0', zIndex: 1 }}>
          oz-quiz.com
        </div>
      </div>

      {/* 버튼 */}
      <div style={{ marginTop: '28px', display: 'flex', gap: '12px', flexWrap: 'wrap', justifyContent: 'center' }}>
        <button className="btn btn-normal" onClick={saveImage}>
          <span>이미지로 저장</span>
        </button>
        <button className="btn btn-normal" onClick={copyLink}>
          <span>🔗 링크 복사</span>
        </button>
        <button className="btn btn-secondary" onClick={() => navigate('/')}>
          <span>👈 메인으로</span>
        </button>
      </div>
    </div>
  );
}
