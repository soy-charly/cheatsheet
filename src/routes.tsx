import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AllCheatsheets from "./pages/AllCheatsheets";
import CheatsheetPage from "./pages/CheatsheetPage";

export default function AppRoutes() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/cheatsheets" element={<AllCheatsheets />} />
                <Route path="/cheatsheet/:id" element={<CheatsheetPage />} />
            </Routes>
        </Router>
    );
}
