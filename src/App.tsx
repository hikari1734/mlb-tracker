import "@radix-ui/themes/styles.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import FollowedGames from "./components/followed-games";
import Header from "./components/header";
import Home from "./pages/home";
import LiveGame from "./pages/live-game";
import Teams from "./pages/teams";

function App() {
  const queryClient = new QueryClient();
  return (
    <div>
      <QueryClientProvider client={queryClient}>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Header></Header>
          <div style={{ flexGrow: 1 }}>
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
          </div>
          <FollowedGames></FollowedGames>
        </div>
      </QueryClientProvider>
    </div>
  );
}

export default App;
