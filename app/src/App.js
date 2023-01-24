import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Translations from "./components/Translations";
const apiKey = process.env.REACT_APP_API_KEY;
const apiURL = process.env.REACT_APP_API_URL;

function App() {
    useEffect(() => {
        const test = async () => {
            const request = await fetch(`${apiURL}`, {
                method: "POST",
                headers: {
                    "X-API-Key": apiKey,
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    username: "yolo",
                    translations: [],
                }),
            });
            const payload = await request.json();
            console.log(payload);
        };
        // test();
    }, []);

    return (
        <BrowserRouter>
            <div className="bg-gradient-to-tl from-custom-pink to-custom-blue h-full">
                <Navbar />
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="translations" element={<Translations />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
