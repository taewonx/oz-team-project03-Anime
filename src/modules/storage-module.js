/**
 * storage-module.js
 * LocalStorage 기반 퀴즈 이력 및 점수 관리 (ES Module 방식)
 */

const HISTORY_KEY = 'dk_history';

/**
 * 전체 퀴즈 이력 조회 (내부 보조 함수이므로 export 안 해도 됨, 해도 상관없음)
 */
export function getQuizHistory() {
  const raw = localStorage.getItem(HISTORY_KEY);
  try {
    return raw ? JSON.parse(raw) : [];
  } catch (e) {
    return [];
  }
}

/**
 * 새로운 퀴즈 결과를 저장
 */
export function saveQuizResult({ category, mode, score, maxScore, grade }) {
  let history = getQuizHistory();
  const newEntry = {
    category,
    mode,
    score,
    maxScore,
    grade,
    date: new Date().toISOString()
  };

  history = history.filter(h => !(h.category === category && h.mode === mode));
  history.unshift(newEntry);
  
  localStorage.setItem(HISTORY_KEY, JSON.stringify(history.slice(0, 50)));
  localStorage.setItem(`dk_${category}_${mode}`, score.toString());
  
  return newEntry;
}

/**
 * 특정 카테고리의 특정 모드 완료 여부 확인
 */
export function isQuizDone(category, mode) {
  const history = getQuizHistory();
  const doneInHistory = history.some(h => h.category === category && h.mode === mode);
  const doneInOldKey = localStorage.getItem(`dk_${category}_${mode}`) !== null;
  return doneInHistory || doneInOldKey;
}

/**
 * 합산 총점 반환
 */
export function getTotalScore() {
  const history = getQuizHistory();
  let total = 0;
  
  history.forEach(h => {
    total += (h.score || 0);
  });

  const categories = ['sanrio', 'pokemon', 'aot', 'kimetsu', 'fma'];
  categories.forEach(cat => {
    ['normal', 'hard'].forEach(mode => {
      const inHistory = history.some(h => h.category === cat && h.mode === mode);
      if (!inHistory) {
        const val = parseInt(localStorage.getItem(`dk_${cat}_${mode}`) || 0, 10);
        if(!isNaN(val)) total += val;
      }
    });
  });

  return total;
}

/**
 * 모든 퀴즈 이력 및 저장 데이터 초기화
 */
export function clearAllHistory() {
  localStorage.clear();
  console.log("모든 데이터가 성공적으로 초기화 되었습니다.");
}