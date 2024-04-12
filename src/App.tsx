import "@radix-ui/themes/styles.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import LiveGame from "./pages/live-game";
import Teams from "./pages/teams";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<Home />} />
          <Route path="*" element={<Home />} />
        </Route>
        <Route path="/game/:id" element={<LiveGame />} />
        <Route path="/team/:id" element={<Teams />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
