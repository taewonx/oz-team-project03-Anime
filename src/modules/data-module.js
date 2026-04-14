/**
 * data-module.js
 * 전역 퀴즈 데이터 및 평가 로직 관리 (Global Namespace 방식)
 * 업데이트: IP별 오리지널 등급 명칭 및 캐릭터 대사(Quotes) 추가
 */
(function() {
  const CATEGORY_MAP = {
    sanrio: {
      title: '산리오 캐릭터 테스트',
      emoji: '🎀',
      grades: [
        { min: 90, label: 'S', title: '산리오 퓨로랜드 관장', desc: '산리오의 모든 것을 꿰뚫고 있는 마스터!', quote: '여기가 바로 저의 낙원, 산리오 퓨로랜드입니다! (헬로키티)', color: 'linear-gradient(135deg, #FF9A9E 0%, #FECFEF 100%)' },
        { min: 70, label: 'A', title: '헬로키티 친구', desc: '캐릭터들의 생일과 취향까지 아는 찐팬!', quote: '와아! 너 정말 우리에 대해 잘 아는구나? (마이멜로디)', color: 'linear-gradient(135deg, #A18CD1 0%, #FBC2EB 100%)' },
        { min: 50, label: 'B', title: '산리오 팬', desc: '대중적인 캐릭터는 마스터하셨네요.', quote: '나랑 같이 푸딩 먹으러 갈래? (폼폼푸린)', color: 'linear-gradient(135deg, #84FAB0 0%, #8FD3F4 100%)' },
        { min: 30, label: 'C', title: '굿즈만 아는 사람', desc: '귀여운 디자인은 알지만 스토리는 부족해요.', quote: '내 이름은 시나모롤이야. 기억해줘! (시나모롤)', color: 'linear-gradient(135deg, #F6D365 0%, #FDA085 100%)' },
        { min: 0, label: 'D', title: '쿠로미도 실망', desc: '산리오 월드에 더 자주 놀러오세요!', quote: '흥, 너 정말 산리오 팬 맞아? 다시 공부하고 오라구! (쿠로미)', color: 'linear-gradient(135deg, #E0C3FC 0%, #8EC5FC 100%)' }
      ]
    },
    pokemon: {
      title: '포켓몬 능력 고사',
      emoji: '⚡',
      grades: [
        { min: 90, label: 'S', title: '포켓몬 마스터', desc: '모든 속성과 상성을 이해한 최고의 트레이너!', quote: '너가 내 결승전 상대구나? 끝까지 가보자! (지우)', color: 'linear-gradient(135deg, #F6D365 0%, #FDA085 100%)' },
        { min: 70, label: 'A', title: '체육관 관장 급', desc: '한 지방의 수호자다운 실력을 갖췄습니다.', quote: '훌륭하다! 너 같은 트레이너를 기다리고 있었다. (웅)', color: 'linear-gradient(135deg, #FF9A9E 0%, #FECFEF 100%)' },
        { min: 50, label: 'B', title: '포켓몬 트레이너', desc: '리그에 진출할 자격이 충분한 실력자!', quote: '피카! 피카츄! (피카츄)', color: 'linear-gradient(135deg, #A18CD1 0%, #FBC2EB 100%)' },
        { min: 30, label: 'C', title: '포켓몬 고만 함', desc: '도감 채우기부터 차근차근 시작해볼까요?', quote: '야생의 포켓몬이 튀어나왔다! 도망칠까? (나옹)', color: 'linear-gradient(135deg, #84FAB0 0%, #8FD3F4 100%)' },
        { min: 0, label: 'D', title: '오박사도 너보단 낫다', desc: '포켓몬 세계에 막 발을 들인 초보 연구생!', quote: '포켓몬 세계에 온 걸 환영한다! 스타팅 포켓몬을 골라보렴. (오박사)', color: 'linear-gradient(135deg, #CFD9DF 0%, #E2E2E2 100%)' }
      ]
    },
    aot: {
      title: '진격의 거인 퀴즈',
      emoji: '⚔️',
      grades: [
        { min: 90, label: 'S', title: '자유의 날개', desc: '우리는 드디어 바다의 입구에 도착했다.', quote: '심장을 바쳐라! 당신은 인류의 희망입니다. (엘빈 단장)', color: 'linear-gradient(135deg, #434343 0%, #000000 100%)' },
        { min: 70, label: 'A', title: '조사병단 에이스', desc: '진정한 강함을 지닌 조사병단의 정예 멤버!', quote: '할 수 있어. 아니, 우리는 해야만 해! (미카사)', color: 'linear-gradient(135deg, #667EEA 0%, #764BA2 100%)' },
        { min: 50, label: 'B', title: '훈련병단 수료', desc: '드디어 벽 밖으로 나갈 준비가 되었군.', quote: '싸워라! 지면 죽고, 이기면 산다! (에렌)', color: 'linear-gradient(135deg, #2AF598 0%, #08B3E5 100%)' },
        { min: 30, label: 'C', title: '벽 안에서 살아라', desc: '벽 안의 평화에 안주하고 계시군요.', quote: '감자... 드실래요? (사샤)', color: 'linear-gradient(135deg, #FAD0C4 0%, #FFD1FF 100%)' },
        { min: 0, label: 'D', title: '거인한테 잡아먹힘', desc: '훈련병 과정을 다시 거쳐야 할 것 같네요.', quote: '어이, 벽 안에서 잠이나 자는 게 어때? (리바이)', color: 'linear-gradient(135deg, #E2E2E2 0%, #D5D5D5 100%)' }
      ]
    },
    kimetsu: {
      title: '귀멸의 칼날 퀴즈',
      emoji: '🔥',
      grades: [
        { min: 90, label: 'S', title: '히노카미 신락', desc: '상현의 오니마저 벨 수 있는 최고의 경지!', quote: '마음의 불꽃을 태워라! 당신은 이미 우수한 검사다. (렌고쿠)', color: 'linear-gradient(135deg, #FF0844 0%, #FFB199 100%)' },
        { min: 70, label: 'A', title: '기둥 후보', desc: '조금만 더 정진하면 지주의 자리에 오르겠군요.', quote: '당신은 상냥한 사람이군요. (시노부)', color: 'linear-gradient(135deg, #F093FB 0%, #F5576C 100%)' },
        { min: 50, label: 'B', title: '갑대원 합격', desc: '귀살대 대원으로서 손색없는 실력입니다.', quote: '포기하지 마! 절대 포기하지 마! (탄지로)', color: 'linear-gradient(135deg, #5EE7DF 0%, #B490CA 100%)' },
        { min: 30, label: 'C', title: '최종선발 통과', desc: '등꽃 산에서 겨우 살아 돌아온 수준입니다.', quote: '우와아아앙! 너무 무섭다고! (젠이츠)', color: 'linear-gradient(135deg, #D4FC79 0%, #96E6A1 100%)' },
        { min: 0, label: 'D', title: '최종선발 탈락', desc: '아직 전집중 호흡이 무엇인지 모르는군요.', quote: '아직 호흡이 부족하구나. 수련을 게을리 하지 마라. (우로코다키)', color: 'linear-gradient(135deg, #A1C4FD 0%, #C2E9FB 100%)' }
      ]
    },
    fma: {
      title: '강철의 연금술사 퀴즈',
      emoji: '⚗️',
      grades: [
        { min: 90, label: 'S', title: '현자의 돌 획득', desc: '진리를 깨우친 최고의 연금술사!', quote: '진리를 깨달았군. 너라면 등가교환을 넘어설 것이다. (호엔하임)', color: 'linear-gradient(135deg, #FFCE00 0%, #E9AE0B 100%)' },
        { min: 70, label: 'A', title: '국가 연금술사', desc: '군에서 인정받는 정예 연금술사의 실력입니다.', quote: '강철의 연금술사, 이름값 하는군. (머스탱)', color: 'linear-gradient(135deg, #F3F1ED 0%, #A5A5A5 100%)' },
        { min: 50, label: 'B', title: '연금술 수련생', desc: '등가교환의 법칙을 충실히 따르고 있네요.', quote: '형이랑 같이 가자! (알폰스)', color: 'linear-gradient(135deg, #D5D4D0 0%, #EEEEEE 100%)' },
        { min: 30, label: 'C', title: '등가교환 이해중', desc: '연성진의 기초부터 다시 공부해보세요.', quote: '연금술이 마법인 줄 알아? 우선 책부터 다시 읽어! (에드워드)', color: 'linear-gradient(135deg, #89F7FE 0%, #66A6FF 100%)' },
        { min: 0, label: 'D', title: '등가교환도 모름', desc: '무엇을 얻으려면 대가가 필요하다는 걸 잊었나요?', quote: '일도 안 하고 먹기만 하면 어떡해! (윈리)', color: 'linear-gradient(135deg, #E2E2E2 0%, #D5D5D5 100%)' }
      ]
    }
  };

  function evaluateGrade(category, scorePct) {
    const cat = CATEGORY_MAP[category] || CATEGORY_MAP['pokemon'];
    return cat.grades.find(g => scorePct >= g.min);
  }

  /**
   * 퀴즈 결과를 종합적으로 평가 (20점 통합 표준 적용 및 특별 메시지 처리)
   * @param {string} category 
   * @param {string} mode 
   * @param {number} score 
   * @returns {object} { gradeInfo, scorePct, displayMax }
   */
  function evaluateQuizResult(category, mode, score) {
    // mode 제거: quiz_test2는 30문항 고정(정답 1점) 기준으로 평가
    const EVAL_STANDARD = 30;
    const displayMax = 30;
    const scorePct = Math.round((score / EVAL_STANDARD) * 100);
    
    // 원본 데이터 보호를 위해 클론(Clone)
    const rawGradeInfo = evaluateGrade(category, scorePct);
    const gradeInfo = { ...rawGradeInfo }; 

    return { gradeInfo, scorePct, displayMax };
  }

  function getGradeLabel(category, scorePct) {
    const grade = evaluateGrade(category, scorePct);
    return grade ? grade.label : 'D';
  }

  function getCategoryTitle(category) {
    return CATEGORY_MAP[category]?.title || '캐릭터 퀴즈';
  }

  function getAllCategories() {
    return Object.keys(CATEGORY_MAP);
  }

  /**
   * 상위 % 계산 (점수 기반 선형 보간)
   */
  function calculatePercentile(scorePct) {
    if (scorePct >= 90) return Math.max(1, 5 - (scorePct - 90) / 10 * 4);
    if (scorePct >= 70) return 15 - (scorePct - 70) / 20 * 9;
    if (scorePct >= 50) return 40 - (scorePct - 50) / 20 * 24;
    if (scorePct >= 30) return 70 - (scorePct - 30) / 20 * 29;
    return 99 - (scorePct / 30 * 28);
  }

  function formatDate(date) {
    const y = date.getFullYear();
    const m = String(date.getMonth() + 1).padStart(2, '0');
    const d = String(date.getDate()).padStart(2, '0');
    return `${y}.${m}.${d}`;
  }

  // Global namespace 에 등록
  window.DataModule = {
    CATEGORY_MAP,
    evaluateGrade,
    evaluateQuizResult,
    getGradeLabel,
    getCategoryTitle,
    getAllCategories,
    calculatePercentile,
    formatDate
  };
})();
