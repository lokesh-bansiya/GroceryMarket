import Navbar from "./Components/Navbar";
import { MainRoutes } from "./Router/MainRoutes";
export const serverUrl = `https://grocery-market-backend.vercel.app`;

function App() {
  return (
    <div className="App">
      <Navbar />
      <MainRoutes />
    </div>
  );
}

export default App;
