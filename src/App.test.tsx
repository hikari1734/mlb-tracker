import { cleanup, render, screen } from "@testing-library/react";
import App from "./App";

class ResizeObserver {
  observe() {}
  unobserve() {}
  disconnect() {}
}

// const queryClient = new QueryClient();

// jest.mock("./api/stats", () => ({
//   useSchedule: () => {
//     return { data: { dates: [{ date: "07/18/2024" }] } };
//   },
// }));

afterEach(cleanup);

describe("app", () => {
  window.ResizeObserver = ResizeObserver;
  test("renders header", () => {
    render(<App />);
    const appHeader = screen.getByText(/MLB Live Tracker/i);
    expect(appHeader).toBeInTheDocument();
  });
  test("renders followed games", () => {
    render(<App />);
    const followedHeader = screen.getByText(/Followed Games/i);
    expect(followedHeader).toBeInTheDocument();
  });
  // test("find home path", () => {
  //   render(
  //     <QueryClientProvider client={queryClient}>
  //       <MemoryRouter initialEntries={["/home"]}>
  //         <Home />
  //       </MemoryRouter>
  //     </QueryClientProvider>
  //   );
  //   const followedHeader = screen.getByText(/Today's Games/i);
  //   expect(followedHeader).toBeInTheDocument();
  // });
});
