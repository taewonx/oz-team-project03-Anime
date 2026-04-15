import { useState, useEffect } from 'react';
import { getTotalScore } from '../modules/storage-module';
import "../styles/home.css"

const CATEGORIES = [
  { id: "sanrio", name: "산리오", emoji: "🎀" },
  { id: "pokemon", name: "포켓몬", emoji: "⚡" },
  { id: "aot", name: "진격의 거인", emoji: "⚔️" },
  { id: "kimetsu", name: "귀멸의 칼날", emoji: "🔥" },
  { id: "fma", name: "강철의 연금술사", emoji: "⚗️" },
];

const GRADES = [
  { min: 90, label: "전설의 덕후 ✦✦✦" },
  { min: 70, label: "고인물 ✦✦✦" },
  { min: 50, label: "진성 팬 ✦✦" },
  { min: 30, label: "라이트 팬 ✦" },
  { min: 0, label: "입문자" },
];

const MAX_SCORE = 150;

function App() {
  const [totalScore, setTotalScore] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);

  // 페이지 로드 시 점수 업데이트
  useEffect(() => {
    const score = getTotalScore();
    setTotalScore(score);
  }, []);

  const pct = Math.min(100, Math.round((totalScore / MAX_SCORE) * 100));
  const currentGrade = GRADES.find((g) => pct >= g.min)?.label || "아직 시작 전 ✦";

  const openModal = (category) => {
    setSelectedCategory(category);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedCategory(null);
  };

  const startQuiz = () => {
    if (selectedCategory) {
      window.location.href = `quiz?category=${selectedCategory.id}`;
    }
  };

  return (
    <div className="app-container">
      {/* ① 배경 및 장식 요소 */}
      <div className="bg-blobs" aria-hidden="true" />
      <div className="bg-blob-extra" aria-hidden="true" />
      <div className="pixel-floats">
        {["⭐", "🌸", "💫", "🎀", "✨", "🌙", "💕", "⭐", "🌸", "🎀"].map((emoji, i) => (
          <span key={i}>{emoji}</span>
        ))}
      </div>

      {/* ② 헤더 */}
      <header className="main-header">
        <span className="header-tag">CHARACTER QUIZ</span>
        <h1 className="main-title">덕력 감별소</h1>
        <p className="main-subtitle">나의 진짜 덕력을 확인해봐 ✦</p>
      </header>

      {/* ③ 덕력 게이지 */}
      <section className="gauge-section">
        <div className="card gauge-wrap">
          <div className="gauge-header">
            <span className="gauge-label">나의 덕력 게이지</span>
            <span className="gauge-score">
              <strong>{totalScore}</strong> / {MAX_SCORE}점
            </span>
          </div>
          <div className="gauge-track">
            <div className="gauge-fill" style={{ width: `${pct}%` }} />
          </div>
          <div className="gauge-footer">
            <span className="gauge-grade-badge">{currentGrade}</span>
          </div>
        </div>
      </section>

      {/* ④ 카테고리 선택 */}
      <main className="category-section">
        <p className="section-label">SELECT CATEGORY</p>
        <div className="category-grid">
          {CATEGORIES.map((cat) => (
            <div
              key={cat.id}
              className="card category-card"
              onClick={() => openModal(cat)}
            >
              <div className="card-image-wrap">
                <img
                  src={`/assets/main-cards/${cat.id}.png`}
                  alt={cat.name}
                  onError={(e) => {
                    e.target.style.display = "none";
                    e.target.nextSibling.style.display = "flex";
                  }}
                />
                <div className="card-image-placeholder" style={{ display: "none" }}>
                  {cat.emoji}
                </div>
                <div className="card-body">
                  <div className="card-name">{cat.name}</div>
                  <div className="card-modes" />
                </div>
              </div>
            </div>
          ))}
          <div className="category-card-coming">
            <div className="coming-icon">＋</div>
            <div className="coming-text">COMING SOON</div>
          </div>
        </div>
      </main>

      {/* ⑤ 난이도 선택 모달 */}
      {isModalOpen && selectedCategory && (
        <div className="modal-overlay active" onClick={closeModal}>
          <div className="modal-card" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>✕</button>
            <div className="modal-img-wrap">
              <img
                src={`/assets/main-cards/${selectedCategory.id}.png`}
                alt={selectedCategory.name}
                onError={(e) => {
                  e.target.style.display = "none";
                  e.target.nextSibling.style.display = "flex";
                }}
              />
              <div className="modal-img-placeholder" style={{ display: "none" }}>
                {selectedCategory.emoji}
              </div>
              <div className="modal-img-label">{selectedCategory.name}</div>
            </div>
            <p className="modal-subtitle">퀴즈를 시작해볼까요?</p>
            <div className="modal-buttons">
              <button className="btn btn-normal" onClick={startQuiz}>
                <span>시작하기</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
