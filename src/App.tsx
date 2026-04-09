import { BrowserRouter, Routes, Route } from "react-router-dom";
import { VictorReplica } from "./pages/VictorReplica";
import "./index.css";

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<VictorReplica />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
