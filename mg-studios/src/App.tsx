import { Dashboard } from "./pages/dashboardPage";
import { StyledGlobal } from "./styles/global";
import { StyledReset } from "./styles/reset";

function App() {
  return (
    <div className="App">
      <StyledReset />
      <StyledGlobal />
      <Dashboard />
    </div>
  );
}

export default App;
