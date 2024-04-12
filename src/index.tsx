import { Theme } from "@radix-ui/themes";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import FollowedGames from "./components/followed-games";
import Header from "./components/header";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
document.body.style.backgroundColor = "#0c2340";

const queryClient = new QueryClient();

root.render(
  <React.StrictMode>
    <Theme accentColor="orange" style={{ backgroundColor: "#0c2340" }}>
      <QueryClientProvider client={queryClient}>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Header></Header>
          <div style={{ flexGrow: 1 }}>
            <App />
          </div>
          <FollowedGames></FollowedGames>
        </div>
      </QueryClientProvider>
    </Theme>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
