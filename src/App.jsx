import { Routes, Route } from "react-router-dom";
import HomePage from "./components/pages/HomePage";

function App() {
  const images = import.meta.glob("./assets/**/*.{png,jpg,jpeg,svg}", {
    eager: true,
  });
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
    </Routes>
  );
}

export default App;
