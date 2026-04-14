/**
 * aot.js — 진격의 거인 퀴즈 데이터
 * 담당: 팀원 B
 *
 * 작성 규칙:
 * - q: YES/NO로 답할 수 있는 문장
 * - a: true, img: "assets/quiz/aot-img/aot-" = YES(정답), false, img: "assets/quiz/aot-img/aot-" = NO(정답)
 */

const QUIZ_DATA_AOT = [
  { q: "에렌 예거의 고향은 '시간시나 구'이다.", a: true, img: "assets/quiz/aot-img/", explanation: "월 마리아 남쪽 끝에 위치한 시간시나 구가 에렌의 고향이 맞습니다." },
  { q: "거인의 유일한 약점은 심장이다.", a: false, img: "assets/quiz/aot-img/", explanation: "거인은 심장이 아니라 목 뒤의 '뒷덜미'를 베어야만 죽습니다." },
  { q: "리바이 병장은 결벽증이 있어 청소에 집착한다.", a: true, img: "assets/quiz/aot-img/", explanation: "리바이는 전투 중에도 피가 튀는 것을 싫어하며 청결에 매우 민감합니다." },
  { q: "미카사가 항상 두르고 있는 머플러는 아르민이 준 것이다.", a: false, img: "assets/quiz/aot-img/", explanation: "붉은 머플러는 어린 시절 에렌이 미카사에게 직접 둘러준 소중한 선물입니다." },
  { q: "사샤 브라우스는 훈련병 시절 교관 앞에서 '찐 감자'를 먹었다.", a: true, img: "assets/quiz/aot-img/", explanation: "이 사건으로 인해 사샤는 '감자녀'라는 별명을 얻게 되었습니다." },
  { q: "초대형 거인의 정체는 베르톨트 후버이다.", a: true, img: "assets/quiz/aot-img/", explanation: "베르톨트는 라이너와 함께 벽을 파괴한 초대형 거인의 계승자였습니다." },
  { q: "조사병단의 문장은 '자유의 날개'라고 불린다.", a: true, img: "assets/quiz/aot-img/", explanation: "겹쳐진 두 개의 날개는 벽 밖의 자유를 갈망하는 조사병단의 의지를 상징합니다." },
  { q: "가장 안쪽 벽(왕이 사는 곳)의 이름은 '월 로제'이다.", a: false, img: "assets/quiz/aot-img/", explanation: "가장 안쪽 벽은 '월 시나'이며, 월 로제는 중간에 위치한 벽입니다." },
  { q: "애니 레온하트는 '여성형 거인'의 계승자이다.", a: true, img: "assets/quiz/aot-img/", explanation: "애니는 뛰어난 격투술을 바탕으로 여성형 거인의 힘을 사용했습니다." },
  { q: "아르민은 나중에 베르톨트의 힘을 이어받아 '초대형 거인'이 된다.", a: true, img: "assets/quiz/aot-img/", explanation: "월 마리아 탈환 작전 이후 아르민이 베르톨트를 먹고 힘을 계승합니다." },
  { q: "거인의 힘을 계승한 사람은 계승 시점부터 13년밖에 살지 못한다.", a: true, img: "assets/quiz/aot-img/", explanation: "이를 '유미르의 저주'라고 하며, 모든 거인 계승자에게 적용되는 규칙입니다." },
  { q: "엘빈 스미스는 조사병단의 13대 단장이었다.", a: true, img: "assets/quiz/aot-img/", explanation: "엘빈은 인류의 승리를 위해 자신의 심장까지 바친 위대한 13대 단장입니다." },
  { q: "짐승 거인의 소유자인 지크 예거는 에렌과 친형제(이복형제) 사이다.", a: true, img: "assets/quiz/aot-img/", explanation: "지크와 에렌은 아버지가 그리샤 예거로 같은 형제 관계가 맞습니다." },
  { q: "갑옷 거인의 정체는 마르코 보트이다.", a: false, img: "assets/quiz/aot-img/", explanation: "갑옷 거인의 정체는 라이너 브라운입니다." },
  { q: "한지 조에는 거인 연구를 끔찍이 싫어해서 거인을 보자마자 죽인다.", a: false, img: "assets/quiz/aot-img/", explanation: "한지는 거인에게 이름을 붙여줄 정도로 거인 연구에 광적인 열정을 가졌습니다." },
  { q: "에렌의 아버지가 지하실에 숨겨둔 비밀은 '바깥세상에 인류가 살아있다'는 증거였다.", a: true, img: "assets/quiz/aot-img/", explanation: "지하실의 사진과 책을 통해 벽 안 인류가 유일한 생존자가 아님이 밝혀집니다." },
  { q: "9거인 중 하나인 '전퇴의 거인'은 타이버 가문이 관리해왔다.", a: true, img: "assets/quiz/aot-img/", explanation: "타이버 가문은 오랜 시간 전퇴의 거인을 계승하며 실권을 쥐고 있었습니다." },
  { q: "에렌이 가진 거인의 이름 중 하나는 '진격의 거인'이다.", a: true, img: "assets/quiz/aot-img/", explanation: "언제 어느 시대든 자유를 위해 나아가는 '진격의 거인'의 힘을 가졌습니다." },
  { q: "거인은 밤이 되면 활동이 급격히 둔해지거나 멈춘다.", a: true, img: "assets/quiz/aot-img/", explanation: "거인은 태양 광선을 주요 에너지원으로 삼기 때문에 밤에는 활동이 제한됩니다." },
  { q: "입체기동장치는 가스 힘이 없어도 무한정 사용할 수 있다.", a: false, img: "assets/quiz/aot-img/", explanation: "가스통과 교체용 칼날은 입체기동장치 사용 시 반드시 필요한 소모품입니다." },
  { q: "미카사 아커만은 거인의 힘에 대항할 수 있는 '아커만 일족'의 후예다.", a: true, img: "assets/quiz/aot-img/aot-image21.png", explanation: "아커만 일족은 인간 상태에서도 거인의 힘 일부를 끌어내어 사용하는 강력한 혈통입니다." },
  { q: "조사병단의 경례 구호는 '심장을 바쳐라!'이다.", a: true, img: "assets/quiz/aot-img/aot-image22.png", explanation: "오른쪽 주먹을 왼쪽 가슴 심장 위에 올리는 경례 방식과 함께 사용됩니다." },
  { q: "벽 내부 종교인 '월교'는 벽 안에 거인이 들어있다는 사실을 몰랐다.", a: false, img: "assets/quiz/aot-img/aot-image23.png", explanation: "월교의 핵심 인물들은 벽이 거인으로 이루어져 있다는 진실을 이미 알고 있었습니다." },
  { q: "거인이 인간을 잡아먹는 이유는 배가 고파서 영양분을 섭취하기 위함이다.", a: false, img: "assets/quiz/aot-img/aot-image24.png", explanation: "거인은 소화 기관이 없으며, 인간을 먹는 행위는 계승자를 찾아 인간으로 돌아가려는 본능입니다." },
  { q: "초대형 거인은 다른 거인들보다 훨씬 크지만 이동 속도는 매우 느리다.", a: true, img: "assets/quiz/aot-img/aot-image25.png", explanation: "거대한 크기 때문에 파괴력은 압도적이지만, 동작과 이동 속도는 매우 둔합니다." },
  { q: "턱 거인은 크기가 작지만 날카로운 이빨과 손톱, 빠른 속도가 특징이다.", a: true, img: "assets/quiz/aot-img/aot-image26.png", explanation: "강력한 턱 힘으로 경질화된 물체도 부술 수 있는 기동형 거인입니다." },
  { q: "에렌과 친구들이 마침내 벽 밖 세상 끝에서 마주한 것은 '강'이었다.", a: false, img: "assets/quiz/aot-img/aot-image27.png", explanation: "모든 거인을 소탕한 후 그들이 도달한 곳은 끝없이 넓은 '바다'였습니다." },
  { q: "시조의 거인의 힘을 완전히 발휘하려면 왕가의 피가 필요하다.", a: true, img: "assets/quiz/aot-img/aot-image28.png", explanation: "왕가의 혈통이 아니면 시조의 거인이 가진 '좌표'의 힘을 온전히 쓸 수 없습니다." },
  { q: "리바이 반의 정예 멤버들은 여성형 거인과의 전투에서 전원 생존했다.", a: false, img: "assets/quiz/aot-img/aot-image29.png", explanation: "안타깝게도 리바이를 제외한 구 리바이 반 멤버 전원이 여성형 거인에게 전사했습니다." },
  { q: "진격의 거인 애니메이션의 원작 작가는 이사야마 하지메이다.", a: true, img: "assets/quiz/aot-img/aot-image30.png", explanation: "이사야마 하지메 작가의 치밀한 복선과 스토리텔링이 돋보이는 작품입니다." }
];
