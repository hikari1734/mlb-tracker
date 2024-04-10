import React, { useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Home from "./pages/home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LiveGame from "./pages/live-game";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route index element={<Home />} />
            <Route path="*" element={<Home />} />
          </Route>
          <Route path="/game/:id" element={<LiveGame />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
