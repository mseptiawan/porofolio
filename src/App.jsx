import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ProjectDetail } from "./pages/ProjectDetail";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project/:projectId" element={<ProjectDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
