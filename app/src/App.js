import { useEffect } from "react";
import "./App.css";
const apiKey =
  "3gOCnUt5p8nigS8XwkMTNQr61ixx6GCVyagczaTVNiQvhWRxpSATituHcBng2TUy";

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
            username: "mega-mind",
            translations: [],
          }),
        }
      );
      const payload = await request.json();
      console.log(payload);
    };
    test();
  }, []);

  return <div className="App"> HEJ</div>;
}

export default App;
