import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import MainCon from "./components/MainCon";
import { TimeProvider } from "./context/TimeContext";
import GlobalStyles from "./styles/GlobalStyles";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
      enabled: true,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <GlobalStyles />
      <TimeProvider>
        <MainCon />
      </TimeProvider>
    </QueryClientProvider>
  );
}

export default App;
