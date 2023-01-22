import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
const apiKey = process.env.REACT_APP_API_KEY;

function App() {
  useEffect(() => {
    const test = async () => {
      const request = await fetch(
        `https://cottony-broadleaf-pendulum.glitch.me/translations`,
        {
          method: "POST",
          headers: {
            "X-API-Key": apiKey,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username: "merry Pop",
            translations: [],
          }),
        }
      );
      const payload = await request.json();
      console.log(payload);
    };
    // test();
  }, []);

  return (
    <BrowserRouter>
      <div className="bg-gradient-to-tl from-custom-pink to-custom-blue h-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={<Login />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
