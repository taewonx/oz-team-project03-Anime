/**
 * fma.js — 강철의 연금술사 퀴즈 데이터
 * 담당: 팀원 C
 *
 * 작성 규칙:
 * - normal, hard 각각 정확히 20문제 작성
 * - q: YES/NO로 답할 수 있는 문장
 * - a: true, img: "assets/quiz/fma-img/fma-" = YES(정답), false, img: "assets/quiz/fma-img/fma-" = NO(정답)
 * - hard는 normal보다 훨씬 어렵게 (등가교환 법칙, 세부 설정 등)
 */

const QUIZ_DATA_FMA = [
  { q: "에드워드 엘릭의 오른팔은 자동인형이다.", a: true,  img: "assets/quiz/fma-img/", explanation: "에드워드의 오른팔은 오토메일(자동인형)입니다." },
  { q: "알폰스 엘릭은 형이다.",                  a: false, img: "assets/quiz/fma-img/", explanation: "알폰스는 동생이고, 에드워드가 형입니다." },
  { q: "연금술의 기본 원칙은 '등가교환'이다.",  a: true,  img: "assets/quiz/fma-img/", explanation: "동등 교환은 FMA 세계관의 핵심 원칙입니다." },
  { q: "주인공 형제는 죽은 어머니를 살리려다 신체를 잃었다.", a: true, img: "assets/quiz/fma-img/", explanation: "엄마를 되살리려다가 에드워드와 알폰스가 신체를 잃었습니다." },
  { q: "에드워드는 우유를 마시는 것을 매우 좋아한다.", a: false, img: "assets/quiz/fma-img/", explanation: "에드워드는 우유를 좋아하지만 '매우 좋아한다'는 표현은 과장입니다." },
  { q: "로이 머스탱 대령은 불꽃을 다루는 연금술사이다.", a: true, img: "assets/quiz/fma-img/", explanation: "머스탱은 화염 연금술을 사용합니다." },
  { q: "윈리는 오토메일을 수리하는 정비사이다.", a: true, img: "assets/quiz/fma-img/", explanation: "윈리는 오토메일 정비의 최고 전문가입니다." },
  { q: "국가 연금술사의 증표는 은시계이다.",    a: true,  img: "assets/quiz/fma-img/", explanation: "국가 연금술사는 은시계를 소지합니다." },
  { q: "연금술사는 금을 연성하는 것이 금지되어 있다.", a: true, img: "assets/quiz/fma-img/", explanation: "금 연성은 금기 중 하나입니다." },
  { q: "스카(Scar)는 연금술사를 증오하는 인물이다.", a: true, img: "assets/quiz/fma-img/", explanation: "스카는 이슈발 전쟁으로 인해 국가 연금술사를 증오합니다." },
  { q: "현자의 돌의 원료는 인간의 영혼이다.", a: true, img: "assets/quiz/fma-img/", explanation: "현자의 돌은 인간 영혼을 집결한 것입니다." },
  { q: "암스트롱 소령의 별명은 '호강의 연금술사'이다.", a: true, img: "assets/quiz/fma-img/", explanation: "암스트롱은 힘과 승리의 상징으로 불립니다." },
  { q: "린 야오는 동방의 나라인 싱(Xing)의 황자이다.", a: true, img: "assets/quiz/fma-img/", explanation: "린은 싱 국가의 황자입니다." },
  { q: "진리의 문을 본 연금술사는 연성진 없이 연금술을 쓸 수 있다.", a: true, img: "assets/quiz/fma-img/", explanation: "진리의 문을 보면 진리에서 얻은 지식으로 연성을 합니다." },
  { q: "글러트니(Gluttony)의 뱃속에는 위조된 진리의 문이 있다.", a: true, img: "assets/quiz/fma-img/", explanation: "글러트니 뱃속에는 거짓 진리의 문이 숨어 있습니다." },
  { q: "에드워드는 마지막에 연금술 능력을 포기하고 알의 몸을 되찾았다.", a: true, img: "assets/quiz/fma-img/", explanation: "에드워드는 알폰스의 몸을 위해 연금술 능력을 포기했습니다." },
  { q: "에드워드의 오른쪽 팔과 왼쪽 다리는 오토메일이다.", a: true, img: "assets/quiz/fma-img/", explanation: "왼쪽 다리와 오른팔이 오토메일입니다." },
  { q: "호문클루스들은 인간의 7대 죄악에서 이름을 따왔다.", a: true, img: "assets/quiz/fma-img/", explanation: "호문클루스 이름은 7대 죄악에서 유래했습니다." },
  { q: "킹 브래들리는 호문클루스 중 '라스(Wrath)'이다.", a: true, img: "assets/quiz/fma-img/", explanation: "브래들리는 분노의 호문클루스입니다." },
  { q: "반 호엔하임은 주인공 형제의 아버지이다.", a: true, img: "assets/quiz/fma-img/", explanation: "반 호엔하임은 에드워드와 알폰스의 아버지입니다." },
  { q: "에드워드는 연금술을 쓸 때 손뼉을 치는 방식으로 연성한다.", a: true, img: "assets/quiz/fma-img/", explanation: "에드워드는 연성진 없이 박수로 연성하는 장면이 대표적입니다." },
  { q: "알폰스의 영혼은 갑옷에 고정되어 있다.", a: true, img: "assets/quiz/fma-img/", explanation: "알의 영혼은 혈인(피로 그린 문양)으로 갑옷에 결박돼 있습니다." },
  { q: "등가교환 법칙은 '아무것도 잃지 않고 얻을 수 있다'는 뜻이다.", a: false, img: "assets/quiz/fma-img/", explanation: "등가교환은 얻는 만큼의 대가를 치러야 한다는 원칙입니다." },
  { q: "국가 연금술사는 '군인' 신분으로 활동한다.", a: true, img: "assets/quiz/fma-img/", explanation: "국가 연금술사는 군 소속으로 임무를 수행합니다." },
  { q: "연금술에서 인간 연성은 금기(탭루)로 여겨진다.", a: true, img: "assets/quiz/fma-img/", explanation: "인간 연성은 큰 대가를 치르는 금기입니다." },
  { q: "에드워드의 별명 '강철의 연금술사'는 그의 자동인형(오토메일)에서 유래한다.", a: true, img: "assets/quiz/fma-img/", explanation: "금속 의수/의족을 사용하기 때문에 '강철'로 불립니다." },
  { q: "로이 머스탱은 물을 다루는 연금술사이다.", a: false, img: "assets/quiz/fma-img/", explanation: "로이는 화염 연금술사입니다." },
  { q: "호문클루스들은 인간처럼 늙고 자연사한다.", a: false, img: "assets/quiz/fma-img/", explanation: "호문클루스는 일반 인간과 다른 존재이며, 현자의 돌 등 설정과 연결됩니다." },
  { q: "현자의 돌은 대가 없이 연금술을 가능하게 해준다.", a: true, img: "assets/quiz/fma-img/", explanation: "현자의 돌을 쓰면 등가교환의 대가를 '돌'이 대신 치르는 형태로 묘사됩니다." },
  { q: "알폰스는 전투 중 갑옷이 부서져도 영혼이 남아있으면 다시 움직일 수 있다.", a: true, img: "assets/quiz/fma-img/", explanation: "결박이 유지되는 한, 갑옷 손상이 곧바로 소멸을 의미하진 않습니다." }
];