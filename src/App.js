import Navbar from "./Components/Navbar";
import { MainRoutes } from "./Router/MainRoutes";
export const serverUrl = process.env.REACT_APP_API_URL;

function App() {
  return (
    <div className="App">
      <Navbar />
      <MainRoutes />
    </div>
  );
}

export default App;
