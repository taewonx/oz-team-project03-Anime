import { useState, useEffect, useRef } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import {
  evaluateQuizResult,
  getCategoryTitle,
  formatDate,
  calculatePercentile,
  CATEGORY_MAP,
} from '../modules/data-module';
import { saveQuizResult } from '../modules/storage-module';
import "../styles/result.css"

/* ── 부유 이모지 ── */
const EMOJI_MAP = {
  pokemon: ['⚽','⚡','🔥','💧','🍃'],
  sanrio:  ['❤️','🎀','🎈','🍭'],
  kimetsu: ['🗡️','🔥','🌊','🌸'],
  aot:     ['⚔️','🛡️','🐎','🔥'],
  fma:     ['⚗️','⚙️','☀️','⭐'],
};

/* ── 간단한 카운트업 애니메이션 훅 ── */
function useCountUp(target, duration = 1000) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    let start = null;
    const step = (ts) => {
      if (!start) start = ts;
      const prog = Math.min((ts - start) / duration, 1);
      setValue(Math.round(prog * target));
      if (prog < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, duration]);
  return value;
}

export default function ResultPage() {
  const [searchParams] = useSearchParams();
  const navigate        = useNavigate();

  const category = searchParams.get('category') || 'sanrio';
  const score    = parseInt(searchParams.get('score'))  || 0;
  const mode     = searchParams.get('mode') || 'normal';

  const { gradeInfo, scorePct, displayMax } = evaluateQuizResult(category, mode, score);
  const catTitle   = getCategoryTitle(category);
  const percentile = calculatePercentile(scorePct);

  // 저장
  useEffect(() => {
    saveQuizResult({ category, mode, score, maxScore: displayMax, grade: gradeInfo.title });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const animScore = useCountUp(score);
  const [gaugeWidth, setGaugeWidth] = useState(0);
  const [imgSrc, setImgSrc]         = useState(`assets/result/${category}/${gradeInfo.label.toLowerCase()}.png`);

  useEffect(() => {
    const t = setTimeout(() => setGaugeWidth(100 - percentile), 500);
    return () => clearTimeout(t);
  }, [percentile]);

  function getGaugeStyle() {
    const g = gradeInfo.label;
    if (g === 'S') return 'linear-gradient(90deg, #F59E0B 0%, #FBBF24 100%)';
    if (g === 'A') return 'linear-gradient(90deg, #8B5CF6 0%, #D8B4FE 100%)';
    if (g === 'B') return 'linear-gradient(90deg, #3B82F6 0%, #60A5FA 100%)';
    return 'linear-gradient(90deg, #6B7280 0%, #9CA3AF 100%)';
  }

  const emojis = EMOJI_MAP[category] ?? ['✨','🌟','💫','🔥','⚡'];

  return (
    <div className="container result-container">

      {/* 배경 부유 이모지 (간단 버전) */}
      <div className="bg-visuals" aria-hidden="true">
        <div className="bg-blob" />
        <div className="bg-blob secondary" />
        <div className="floating-items">
          {emojis.map((em, i) => (
            <span key={i} style={{
              position: 'fixed',
              left: `${10 + i * 18}%`,
              bottom: '-40px',
              fontSize: '1.5rem',
              opacity: 0,
              animation: `pixelFloat ${10 + i * 2}s linear ${i * 1.5}s infinite`,
              pointerEvents: 'none',
              zIndex: 0,
            }}>{em}</span>
          ))}
        </div>
      </div>

      <div className="card result-card">
        {/* 등급 뱃지 */}
        <div className="grade-badge-wrap">
          <span
            className={`gauge-grade-badge grade-${gradeInfo.label}`}
            style={{ background: gradeInfo.color }}
          >
            {gradeInfo.label} 등급
          </span>
        </div>

        {/* 결과 이미지 */}
        <div className="result-image-area">
          <img
            src={imgSrc}
            alt="Result"
            onError={() => setImgSrc(`assets/main-cards/${category}.png`)}
          />
        </div>

        <h2 className="grade-title">{gradeInfo.title}</h2>
        <p className="grade-description" dangerouslySetInnerHTML={{ __html: gradeInfo.desc }} />
        <div className="grade-quote">{gradeInfo.quote}</div>

        {/* 점수 */}
        <div className="score-display-wrap">
          <span className="score-label">Final Evaluation Score</span>
          <div className="score-main">
            <span className="score-text-big">{animScore}</span>
            <span className="score-text-total">/ {displayMax}</span>
          </div>
        </div>

        {/* 버튼 */}
        <div className="btn-row">
          <button
            className="btn btn-secondary"
            onClick={() => navigate(`/quiz?category=${category}&mode=${mode}`)}
          >
            <span>↻ 다시하기</span>
            <small>Replay</small>
          </button>
          <button
            className="btn btn-secondary"
            onClick={() => navigate(`/share?category=${category}&mode=${mode}&score=${score}&grade=${gradeInfo.title}`)}
          >
            <span>📜 증명서 발급받기</span>
            <small>Issue Certificate</small>
          </button>
        </div>

        {/* 랭킹 게이지 */}
        <div className="ranking-section">
          <div className="ranking-label">
            당신은 이 부문 상위 <span>{percentile.toFixed(1)}</span>%입니다!
          </div>
          <div className="gauge-container">
            <div
              className="gauge-bar"
              style={{
                width: `${gaugeWidth}%`,
                background: getGaugeStyle(),
                height: '100%',
                borderRadius: 'inherit',
                transition: 'width 1s ease',
              }}
            />
          </div>
          <div className="gauge-hint">전체 응시자 데이터 기반 시뮬레이션 결과입니다.</div>
        </div>
      </div>

      {/* 공유 */}
      <div className="share-container mt-md">
        <span className="share-label">Share with Friends</span>
        <div className="share-buttons">
          <button className="s-btn url" onClick={() => {
            navigator.clipboard.writeText(window.location.href)
              .then(() => alert('링크가 복사됐어요!'));
          }} title="링크 복사">
            <span>🔗</span>
          </button>
        </div>
      </div>

      {/* 다른 퀴즈 도전 */}
      <div className="random-section">
        <button
          className="btn-random-big"
          onClick={() => {
            const keys = Object.keys(CATEGORY_MAP).filter(c => c !== category);
            const rand = keys[Math.floor(Math.random() * keys.length)];
            navigate(`/quiz?category=${rand}&mode=normal`);
          }}
        >
          <span>🚀 다른 퀴즈 도전하기</span>
          <small>Try Another Quiz!</small>
        </button>
      </div>

      <div className="mt-lg text-center">
        <a
          href="/"
          style={{ color: 'var(--color-text-light)', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 800 }}
        >
          👈 메인으로 돌아가기
        </a>
      </div>
    </div>
  );
}
