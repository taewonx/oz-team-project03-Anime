/**
 * sanrio.js — 산리오 퀴즈 데이터
 * 담당: 나
 *
 * 작성 규칙:
 * - normal, hard 각각 정확히 20문제 작성
 * - q: YES/NO로 답할 수 있는 문장
 * - a: true, img: "assets/quiz/sanrio-img/sanrio-" = YES(정답), false, img: "assets/quiz/sanrio-img/sanrio-" = NO(정답)
 * - hard는 normal보다 훨씬 어렵게 (생일, 세부 설정 등)
 */

const QUIZ_DATA_SANRIO = [
  { q: "쿠로미의 리본 색은 검정색이다.", a: true,  img: "assets/quiz/sanrio-img/", explanation: "쿠로미의 리본은 검은색입니다." },
  { q: "시나모롤은 강아지 캐릭터다.",    a: false, img: "assets/quiz/sanrio-img/", explanation: "시나모롤은 개 캐릭터입니다. '강아지'라는 표현은 어감 차이지만 틀렸다는 설정입니다." },
  { q: "헬로키티는 고양이 캐릭터이다.", a: true,  img: "assets/quiz/sanrio-img/", explanation: "헬로키티는 고양이 모티브 캐릭터입니다." },
  { q: "마이멜로디는 항상 분홍색이나 빨간색 두건을 쓰고 있다.", a: true, img: "assets/quiz/sanrio-img/", explanation: "마이멜로디는 빨간색 또는 분홍색 두건을 착용합니다." },
  { q: "폼폼푸린은 골든 리트리버를 모델로 한 캐릭터이다.", a: true, img: "assets/quiz/sanrio-img/", explanation: "폼폼푸린은 골든 리트리버를 모티프로 했습니다." },
  { q: "쿠로미는 마이멜로디와 아주 친한 단짝 친구이다.", a: false, img: "assets/quiz/sanrio-img/", explanation: "쿠로미와 마이멜로디는 라이벌 관계입니다." },
  { q: "시나모롤은 커다란 귀로 하늘을 날 수 있다.", a: true, img: "assets/quiz/sanrio-img/", explanation: "시나모롤은 큰 귀로 공중을 나는 설정입니다." },
  { q: "포차코는 농구보다 축구를 더 좋아하는 강아지이다.", a: false, img: "assets/quiz/sanrio-img/", explanation: "포차코는 농구를 좋아하는 설정입니다." },
  { q: "리틀트윈스타는 쌍둥이 남매 캐릭터이다.", a: true, img: "assets/quiz/sanrio-img/", explanation: "리틀트윈스타는 쌍둥이 남매인 키키와 라라입니다." },
  { q: "배드바츠마루는 펭귄 캐릭터이다.", a: true, img: "assets/quiz/sanrio-img/", explanation: "배드바츠마루는 펭귄 모티브 캐릭터입니다." },
  { q: "쿠로미의 생일은 10월 31일이다.", a: true,  img: "assets/quiz/sanrio-img/", explanation: "쿠로미의 생일은 할로윈 데이인 10월 31일입니다." },
  { q: "헬로키티의 몸무게는 사과 5개분이다.", a: false, img: "assets/quiz/sanrio-img/", explanation: "헬로키티 몸무게는 사과 3개 분량입니다." },
  { q: "시나모롤은 사실 강아지가 아니라 토끼이다.", a: false, img: "assets/quiz/sanrio-img/", explanation: "시나모롤은 개 캐릭터입니다." },
  { q: "쿠로미의 생일은 할로윈데이(10월 31일)이다.", a: true, img: "assets/quiz/sanrio-img/", explanation: "쿠로미 생일은 할로윈입니다." },
  { q: "폼폼푸린이 쓰고 있는 것은 갈색 베레모이다.", a: true, img: "assets/quiz/sanrio-img/", explanation: "폼폼푸린은 갈색 베레모를 착용합니다." },
  { q: "헬로키티에게는 '미미'라는 쌍둥이 동생이 있다.", a: true, img: "assets/quiz/sanrio-img/", explanation: "헬로키티의 쌍둥이 동생 이름은 미미입니다." },
  { q: "포차코의 생일은 2월 29일(윤년)이다.", a: true, img: "assets/quiz/sanrio-img/", explanation: "포차코의 생일은 윤년인 2월 29일입니다." },
  { q: "마이멜로디의 할머니가 써준 두건은 파란색이었다.", a: false, img: "assets/quiz/sanrio-img/", explanation: "마이멜로디 두건은 빨간색입니다." },
  { q: "턱시도샘은 영국에서 온 펭귄 신사이다.", a: true, img: "assets/quiz/sanrio-img/", explanation: "턱시도샘은 영국 출신 펭귄 캐릭터입니다." },
  { q: "행교동(한교동)은 중국 요리를 아주 좋아한다.", a: true, img: "assets/quiz/sanrio-img/", explanation: "행교동은 중국 음식 좋아하는 설정입니다." },

  // 추가 10문항 (30문항 출제용 풀 보강)
  { q: "헬로키티는 입(입모양)이 그려져 있다.", a: false, img: "assets/quiz/sanrio-img/", explanation: "헬로키티는 보통 입이 그려져 있지 않은 디자인으로 유명합니다." },
  { q: "쿠로미는 해골 모양이 있는 두건을 쓰고 있다.", a: true, img: "assets/quiz/sanrio-img/", explanation: "쿠로미의 트레이드마크는 해골 모양이 있는 두건입니다." },
  { q: "폼폼푸린은 강아지 캐릭터이다.", a: true, img: "assets/quiz/sanrio-img/", explanation: "폼폼푸린은 골든 리트리버 모티브의 강아지 캐릭터입니다." },
  { q: "시나모롤의 이름은 '시나몬 롤'에서 왔다.", a: true, img: "assets/quiz/sanrio-img/", explanation: "시나모롤은 시나몬롤을 닮은 하얀 강아지라는 설정과 이름이 연결됩니다." },
  { q: "배드바츠마루는 '착한 모범생' 콘셉트 캐릭터다.", a: false, img: "assets/quiz/sanrio-img/", explanation: "배드바츠마루는 장난기 많고 삐딱한 성격의 캐릭터로 알려져 있습니다." },
  { q: "리틀트윈스타의 이름은 키키와 라라다.", a: true, img: "assets/quiz/sanrio-img/", explanation: "리틀트윈스타는 키키(남)와 라라(여) 쌍둥이 캐릭터입니다." },
  { q: "포차코는 귀가 한쪽만 검은색이다.", a: false, img: "assets/quiz/sanrio-img/", explanation: "포차코는 주로 흰색 몸에 검은 귀를 가진 강아지 캐릭터로 그려집니다(한쪽만이라는 설정은 일반적이지 않습니다)." },
  { q: "마이멜로디는 토끼 캐릭터이다.", a: true, img: "assets/quiz/sanrio-img/", explanation: "마이멜로디는 토끼 모티브 캐릭터입니다." },
  { q: "턱시도샘은 펭귄 캐릭터이다.", a: true, img: "assets/quiz/sanrio-img/", explanation: "턱시도샘은 펭귄 신사 콘셉트의 캐릭터입니다." },
  { q: "쿠로미는 마이멜로디보다 키가 훨씬 크다.", a: false, img: "assets/quiz/sanrio-img/", explanation: "둘의 체격 차이가 '훨씬 크다'고 단정할 공식 설정으로 고정돼 있진 않습니다." }
];
