import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile";
import Translations from "./components/Translations";

function App() {
    return (
        <BrowserRouter>
            <div className="bg-gradient-to-tl from-custom-pink to-custom-blue h-full">
                <Navbar />
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="translations" element={<Translations />} />
                    <Route path="profile" element={<Profile />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
