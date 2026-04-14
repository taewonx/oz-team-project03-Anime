/**
 * storage-module.js
 * LocalStorage 기반 퀴즈 이력 및 점수 관리 (Global Namespace 방식)
 */
(function() {
  const HISTORY_KEY = 'dk_history';

  /**
   * 새로운 퀴즈 결과를 저장
   */
  function saveQuizResult({ category, mode, score, maxScore, grade }) {
    let history = getQuizHistory();
    const newEntry = {
      category,
      mode,
      score,
      maxScore,
      grade,
      date: new Date().toISOString()
    };

    // 동일 카테고리/모드일 경우 기존 기록 제거 후 최신 추가 (중복 방지)
    history = history.filter(h => !(h.category === category && h.mode === mode));
    history.unshift(newEntry);
    
    localStorage.setItem(HISTORY_KEY, JSON.stringify(history.slice(0, 50)));
    
    // 하위 호환성 유지: 개별 키 방식으로도 점수 저장 (기존 index.html 연동용)
    localStorage.setItem(`dk_${category}_${mode}`, score.toString());
    
    return newEntry;
  }

  /**
   * 전체 퀴즈 이력 조회
   */
  function getQuizHistory() {
    const raw = localStorage.getItem(HISTORY_KEY);
    try {
      return raw ? JSON.parse(raw) : [];
    } catch(e) {
      return [];
    }
  }

  /**
   * 특정 카테고리의 특정 모드 완료 여부 확인
   */
  function isQuizDone(category, mode) {
    const history = getQuizHistory();
    const doneInHistory = history.some(h => h.category === category && h.mode === mode);
    const doneInOldKey = localStorage.getItem(`dk_${category}_${mode}`) !== null;
    return doneInHistory || doneInOldKey;
  }

  /**
   * 합산 총점 반환
   */
  function getTotalScore() {
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
          const val = parseInt(localStorage.getItem(`dk_${cat}_${mode}`) || 0);
          if(!isNaN(val)) total += val;
        }
      });
    });

    return total;
  }

  /**
   * 모든 퀴즈 이력 및 저장 데이터 초기화
   */
  function clearAllHistory() {
    localStorage.clear();
    console.log("모든 데이터가 성공적으로 초기화 되었습니다.");
  }

  // Global namespace 에 등록
  window.StorageModule = {
    saveQuizResult,
    getQuizHistory,
    isQuizDone,
    getTotalScore,
    clearAllHistory
  };
})();
