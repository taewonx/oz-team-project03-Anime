import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import "../styles/quiz.css";

const TIMER_SEC = 20;
const TOTAL_QUESTIONS = 30;

const CATEGORY_META = {
  fma:     { emoji: '⚗️',  label: 'FMA',     cls: 'placeholder-fma'     },
  aot:     { emoji: '⚔️',  label: 'AOT',     cls: 'placeholder-aot'     },
  kimetsu: { emoji: '🌸',  label: 'KIMETSU', cls: 'placeholder-kimetsu' },
  pokemon: { emoji: '⚡',  label: 'POKÉMON', cls: 'placeholder-pokemon' },
  sanrio:  { emoji: '🎀',  label: 'SANRIO',  cls: 'placeholder-sanrio'  },
};

const CATEGORY_NAMES = {
  fma:     '강철의 연금술사',
  aot:     '진격의 거인',
  kimetsu: '귀멸의 칼날',
  pokemon: '포켓몬',
  sanrio:  '산리오',
};

function makeCategoryVariableName(categoryName) {
  const key = categoryName.toUpperCase().replace(/[^A-Z0-9_]/g, '_');
  return `QUIZ_DATA_${key}`;
}

export default function QuizPage() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const category = (searchParams.get('category') || 'aot').toLowerCase();
  const meta = CATEGORY_META[category] || { emoji: '✨', label: 'QUIZ', cls: 'placeholder-default' };

  /* ── State ── */
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [answered, setAnswered] = useState(false);
  const [feedback, setFeedback] = useState({ text: '', type: '' });
  const [remainSec, setRemainSec] = useState(TIMER_SEC);
  const [timerPct, setTimerPct] = useState(100);
  const [timerUrgent, setTimerUrgent] = useState(false);
  const [showExplain, setShowExplain] = useState(false);
  const [explainText, setExplainText] = useState('');
  const [polaroidPop, setPolaroidPop] = useState(false);
  const [btnDisabled, setBtnDisabled] = useState(false);

  const timerRef = useRef(null);
  const remainRef = useRef(TIMER_SEC);

  /* ── 데이터 로딩 (HTML loadQuizData 로직) ── */
  useEffect(() => {
    const script = document.createElement('script');
    script.src = `/data/${category}.js`; // public/data 폴더 기준
    script.onload = () => {
      const varName = makeCategoryVariableName(category);
      const data = window[varName] || globalThis[varName];
      if (!data || !Array.isArray(data)) {
        console.error('데이터 로드 실패');
        return;
      }
      // 원본처럼 셔플 없이 앞에서부터 30개 고정
      setQuestions(data.slice(0, TOTAL_QUESTIONS));
    };
    script.onerror = () => console.error('퀴즈 데이터를 불러올 수 없습니다.');
    document.body.appendChild(script);
    return () => { if (document.body.contains(script)) document.body.removeChild(script); };
  }, [category]);

  /* ── 타이머 제어 ── */
  const stopTimer = useCallback(() => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  }, []);

  const startTimer = useCallback(() => {
    stopTimer();
    remainRef.current = TIMER_SEC;
    setRemainSec(TIMER_SEC);
    setTimerPct(100);
    setTimerUrgent(false);

    timerRef.current = setInterval(() => {
      remainRef.current -= 1;
      const pct = Math.max((remainRef.current / TIMER_SEC) * 100, 0);
      setRemainSec(remainRef.current);
      setTimerPct(pct);
      
      if (remainRef.current <= 5) setTimerUrgent(true);
      
      if (remainRef.current <= 0) {
        stopTimer();
        // 시간 초과 처리 (HTML startTimer 내 로직)
        setAnswered(true);
        setFeedback({ text: '시간 초과! ⏰ 자동 오답 처리', type: 'wrong' });
        setExplainText(questions[currentIndex]?.explanation || '시간 초과입니다. 해설을 확인한 뒤 다음 문제를 눌러주세요.');
        setShowExplain(true);
        setBtnDisabled(true);
      }
    }, 1000);
  }, [currentIndex, questions, stopTimer]);

  /* ── 문제 세팅 (HTML setQuestion 로직) ── */
  useEffect(() => {
    if (questions.length === 0) return;

    setPolaroidPop(false);
    // Reflow 효과 재현
    setTimeout(() => setPolaroidPop(true), 10);

    setAnswered(false);
    setFeedback({ text: '', type: '' });
    setShowExplain(false);
    setBtnDisabled(false);
    startTimer();

    return () => stopTimer();
  }, [currentIndex, questions, startTimer, stopTimer]);

  /* ── 답변 처리 (HTML btnYes/No 클릭 로직) ── */
  const handleAnswer = (userAnswer) => {
    if (answered || !questions[currentIndex]) return;
    
    setAnswered(true);
    stopTimer();
    setBtnDisabled(true);

    const isRight = questions[currentIndex].a === userAnswer;
    
    // showFeedback 로직 이식
    if (isRight) {
      setFeedback({ text: '정답입니다! ✨', type: 'correct' });
      setTimeout(() => goNext(true), 800);
    } else {
      setFeedback({ text: '오답입니다! 💦', type: 'wrong' });
      setExplainText(questions[currentIndex]?.explanation || '오답입니다. 해설을 확인하고, 다음 문제 버튼을 눌러주세요.');
      setShowExplain(true);
    }
  };

  const goNext = (wasCorrect) => {
    if (wasCorrect) setScore(prev => prev + 1);
    
    const next = currentIndex + 1;
    if (next >= questions.length || next >= TOTAL_QUESTIONS) {
      // 리액트에서는 상태 업데이트가 비동기이므로 최신 점수를 직접 계산해서 전달
      const finalScore = wasCorrect ? score + 1 : score;
      navigate(`/result?category=${category}&score=${finalScore}`);
      return;
    }
    setCurrentIndex(next);
  };

  /* ── UI 보조 변수 ── */
  const item = questions[currentIndex];
  const scoreWidth = Math.round((score / TOTAL_QUESTIONS) * 100);
  
  let scoreBadge = '준비';
  if (scoreWidth >= 90) scoreBadge = '전설의 덕후';
  else if (scoreWidth >= 70) scoreBadge = '고인물';
  else if (scoreWidth >= 50) scoreBadge = '진성 팬';
  else if (scoreWidth >= 30) scoreBadge = '라이트 팬';
  else if (currentIndex > 0) scoreBadge = '입문자';

  const imgSrc = item?.img || (window.CATEGORY_IMAGES_30?.[category]?.[currentIndex]) || null;

  return (
    <div className="container">
      {/* 헤더 */}
      <div className="quiz-header">
        <div>
          <span className="mode-badge">
            {CATEGORY_NAMES[category] || category.toUpperCase()}
          </span>
        </div>
        <div id="progressText">{currentIndex + 1} / {TOTAL_QUESTIONS}</div>
      </div>

      {/* 진행 도트 */}
      <div className="progress-dots">
        {Array.from({ length: TOTAL_QUESTIONS }).map((_, i) => (
          <span
            key={i}
            className={`progress-dot ${i < currentIndex ? 'done' : ''} ${i === currentIndex ? 'current' : ''}`}
          />
        ))}
      </div>

      {/* 폴라로이드 프레임 */}
      <div className="polaroid-outer">
        <div className={`polaroid ${polaroidPop ? 'pop' : ''}`}>
          <div className="polaroid-img-area">
            {imgSrc ? (
              <img className="polaroid-img" src={imgSrc} alt="quiz" />
            ) : (
              <div className={`polaroid-placeholder ${meta.cls}`}>
                <span className="ph-emoji">{meta.emoji}</span>
                <span className="ph-label">{meta.label}</span>
              </div>
            )}
          </div>
          <div className="polaroid-bottom">
            <span className="polaroid-q-num">Q{currentIndex + 1} / {TOTAL_QUESTIONS}</span>
          </div>
        </div>
      </div>

      {/* 질문 */}
      <div className="question-card">
        <div className="question-text">
          {item ? item.q : '문제를 불러오는 중...'}
        </div>
      </div>

      {/* 타이머 */}
      <div className="timer-wrap">
        <div 
          className={`timer-fill ${timerUrgent ? 'urgent' : ''}`} 
          style={{ width: `${timerPct}%` }}
        />
      </div>

      {/* 피드백 */}
      <div className="feedback-wrap">
        <div className={`feedback ${feedback.type}`}>
          {feedback.text}
        </div>
      </div>

      {/* 해설 (explainWrap) */}
      {showExplain && (
        <div className="explain-wrap" style={{ display: 'block' }}>
          <div>{explainText}</div>
          <button id="btnNext" onClick={() => goNext(false)}>다음 문제</button>
        </div>
      )}

      {/* YES / NO */}
      <div className="action-btns">
        <button className="btn btn-normal" onClick={() => handleAnswer(true)} disabled={btnDisabled}>
          <span>YES</span>
        </button>
        <button className="btn btn-hard" onClick={() => handleAnswer(false)} disabled={btnDisabled}>
          <span>NO</span>
        </button>
      </div>

      {/* 점수 게이지 */}
      <div className="card gauge-wrap">
        <div className="gauge-header">
          <span className="gauge-label">현재 점수</span>
          <span className="gauge-score">{score}</span>
        </div>
        <div className="gauge-track">
          <div className="gauge-fill" style={{ width: `${scoreWidth}%` }} />
        </div>
        <div className="gauge-footer">
          <span className="gauge-grade-badge">{scoreBadge}</span>
        </div>
      </div>
    </div>
  );
}