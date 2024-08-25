import { BrowserRouter, Route, Routes } from "react-router-dom";
import PricingPage from "./pages/PricingPage";
import { Dashboard } from "./pages/Dashboard";

function App() {
  return (
    
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/pricing" element={<PricingPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
