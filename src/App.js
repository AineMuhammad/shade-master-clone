import {
  Routes,
  Route,
  Navigate,
  useLocation,
  BrowserRouter,
} from "react-router-dom";
import "./App.css";
import { LoadingProvider } from "./Context/LoadingContext";
import Home from "./Home/Home";

function App() {
  return (
    <LoadingProvider>
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </LoadingProvider>
  );
}

export default App;
