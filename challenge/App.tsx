import { useState } from "react";
import Greeting from "./Greeting";
import Shouter from "./Shouter";
import MouseTracker from "./MouseTracker";

function App() {
  const [text, setText] = useState<string>("");
  return (
    <main>
      hi
      <Greeting name={"oli"} />
      <Shouter />
      <MouseTracker />
    </main>
  );
}

export default App;
