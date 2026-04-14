import "./styles/common.css"
import "./pages/HomePage.jsx"
import "./pages/QuizPage.jsx"
import "./pages/ResultPage.jsx"
import { Routes, Route } from "react-router-dom"

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/quiz" element={<QuizPage />} />
      <Route path="/result" element={<ResultPage />} />
    </Routes>
  )
}
export default App
