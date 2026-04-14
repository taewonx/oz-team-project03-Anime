/**
 * pokemon.js — 포켓몬 퀴즈 데이터
 * 담당: 팀원 A
 *
 * 작성 규칙:
 * - normal, hard 각각 정확히 20문제 작성
 * - q: YES/NO로 답할 수 있는 문장
 * - a: true, img: "assets/quiz/pokemon-img/pokemon-" = YES(정답), false, img: "assets/quiz/pokemon-img/pokemon-" = NO(정답)
 * - hard는 normal보다 훨씬 어렵게 (도감번호, 진화조건, 기술 등)
 */

const QUIZ_DATA_POKEMON = [
  { q: "피카츄는 전기 타입이다.", a: true, img: "assets/quiz/pokemon-img/", explanation: "피카츄는 전기 타입 포켓몬입니다." },
  { q: "파이리의 첫 번째 진화는 리자몽이다.", a: false, img: "assets/quiz/pokemon-img/", explanation: "파이리는 리자드->리자몽 순으로 진화합니다." },
  { q: "피카츄의 진화 전 형태는 피츄이다.", a: true, img: "assets/quiz/pokemon-img/", explanation: "피카츄의 베이비형은 피츄입니다." },
  { q: "파이리는 꼬리의 불꽃이 꺼지면 죽는다.", a: true, img: "assets/quiz/pokemon-img/", explanation: "파이리 꼬리 불꽃 상태가 건강 상태를 나타냅니다." },
  { q: "잠만보는 먹는 것보다 운동하는 것을 더 좋아한다.", a: false, img: "assets/quiz/pokemon-img/", explanation: "잠만보는 주로 잠자는 것을 좋아하는 포켓몬입니다." },
  { q: "잉어킹이 진화하면 갸라도스가 된다.", a: true, img: "assets/quiz/pokemon-img/", explanation: "잉어킹은 레벨20에서 갸라도스로 진화합니다." },
  { q: "고라파덕은 에스퍼 타입 기술을 쓸 수 있다.", a: true, img: "assets/quiz/pokemon-img/", explanation: "애니에서는 혼란 상태에서 에스퍼 기술을 사용하는 장면이 있습니다." },
  { q: "로켓단 나옹이는 말을 할 줄 안다.", a: true, img: "assets/quiz/pokemon-img/", explanation: "나옹이는 인간어를 사용합니다." },
  { q: "푸린은 노래로 상대를 잠재우는 능력이 있다.", a: true, img: "assets/quiz/pokemon-img/", explanation: "푸린은 노래 기술로 적을 잠들게 합니다." },
  { q: "이상해씨의 등에는 꽃이 활짝 피어 있다.", a: false, img: "assets/quiz/pokemon-img/", explanation: "이상해씨 등에는 아직 꽃이 피지 않았고, 이상해풀-이상해꽃 진화 과정에서 꽃이 핍니다." },
  { q: "피카츄의 도감 번호는 25번이다.", a: true, img: "assets/quiz/pokemon-img/", explanation: "국제 도감 번호 25번은 피카츄입니다." },
  { q: "아르세우스는 포켓몬 세계를 창조한 신으로 불린다.", a: true, img: "assets/quiz/pokemon-img/", explanation: "아르세우스는 창조신 설정을 가진 전설의 포켓몬입니다." },
  { q: "한카리아스는 드래곤 타입과 물 타입을 동시에 가진다.", a: false, img: "assets/quiz/pokemon-img/", explanation: "한카리아스는 드래곤/강철 타입입니다." },
  { q: "이브이가 에브이로 진화하려면 밤에 친밀도가 높아야 한다.", a: false, img: "assets/quiz/pokemon-img/", explanation: "이브이는 친밀도로 에브이->에브이가 되거나, 물, 썬더, 불꽃 돌 사용 등으로 진화합니다." },
  { q: "팬텀은 원래 독 타입이 섞여 있다.", a: true, img: "assets/quiz/pokemon-img/", explanation: "팬텀은 고스트/독 타입입니다." },
  { q: "망나뇽의 키는 2.2m로 생각보다 크지 않다.", a: true, img: "assets/quiz/pokemon-img/", explanation: "망나뇽의 공식 신장은 2.2m입니다." },
  { q: "지우의 피카츄는 번개의 돌을 사용하여 진화한 적이 있다.", a: false, img: "assets/quiz/pokemon-img/", explanation: "지우의 피카츄는 진화하지 않고 남습니다." },
  { q: "루카리오는 파동을 감지하는 능력이 있다.", a: true, img: "assets/quiz/pokemon-img/", explanation: "루카리오는 오라를 감지할 수 있는 설정입니다." },
  { q: "가디가 진화할 때 필요한 아이템은 불꽃의 돌이다.", a: true, img: "assets/quiz/pokemon-img/", explanation: "가디는 불꽃의 돌을 사용해 윈디로 진화합니다." },
  { q: "밀탱크의 주특기인 '구르기'는 바위 타입 기술이다.", a: true, img: "assets/quiz/pokemon-img/", explanation: "밀탱크는 구르기(롤아웃) 같은 물리 기술을 사용합니다." },
  { q: "메타몽은 어떤 포켓몬으로도 변신할 수 있다.", a: true, img: "assets/quiz/pokemon-img/", explanation: "메타몽은 '변신'을 통해 상대나 다른 포켓몬의 모습을 따라할 수 있습니다." },
  { q: "이상해꽃은 풀 타입만 가지고 있다.", a: false, img: "assets/quiz/pokemon-img/", explanation: "이상해꽃은 풀/독 타입입니다." },
  { q: "고스트 타입 포켓몬은 기본적으로 노말 타입 기술에 면역이다.", a: true, img: "assets/quiz/pokemon-img/", explanation: "고스트 타입은 노말/격투 타입 기술을 맞지 않습니다(예외는 특성/상태 등에 따라 달라질 수 있음)." },
  { q: "뮤츠는 인공적으로 만들어진 포켓몬이다.", a: true, img: "assets/quiz/pokemon-img/", explanation: "뮤는 복제/개조 실험으로 만들어진 포켓몬이라는 설정입니다." },
  { q: "피카츄는 물 타입 약점을 가진다.", a: false, img: "assets/quiz/pokemon-img/", explanation: "전기 타입의 약점은 땅 타입이며, 물 타입에는 강한 편입니다." },
  { q: "리자몽은 드래곤 타입이다.", a: false, img: "assets/quiz/pokemon-img/", explanation: "일반적으로 리자몽은 불꽃/비행 타입입니다(메가진화/폼에 따라 달라지기도 합니다)." },
  { q: "페어리 타입은 드래곤 타입 기술에 상성상 강하다.", a: true, img: "assets/quiz/pokemon-img/", explanation: "페어리 타입은 드래곤 타입 기술을 무효화합니다." },
  { q: "이브이는 진화 형태가 하나뿐이다.", a: false, img: "assets/quiz/pokemon-img/", explanation: "이브이는 여러 형태(부스터/샤미드/쥬피썬더/에브이/블래키/리피아/글레이시아/님피아 등)로 진화합니다." },
  { q: "잉어킹은 진화하면 비행 타입이 된다.", a: false, img: "assets/quiz/pokemon-img/", explanation: "잉어킹이 진화한 갸라도스는 물/비행 타입입니다. 잉어킹 자체가 비행 타입이 되는 건 아닙니다." },
  { q: "포켓몬 세계에서 '포켓몬 센터'는 회복을 도와주는 시설이다.", a: true, img: "assets/quiz/pokemon-img/", explanation: "포켓몬 센터에서는 포켓몬을 치료/회복할 수 있습니다." }
];