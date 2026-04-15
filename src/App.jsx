import { BrowserRouter, Routes, Route } from "react-router-dom"
import "./styles/common.css"
import HomePage from "./pages/HomePage"
import QuizPage from "./pages/QuizPage"
import ResultPage from "./pages/ResultPage"
import SharePage from "./pages/SharePage"

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/quiz" element={<QuizPage />} />
      <Route path="/result" element={<ResultPage />} />
      <Route path="/share" element={<SharePage />} />
    </Routes>
    </BrowserRouter>
  )
}
export default App
