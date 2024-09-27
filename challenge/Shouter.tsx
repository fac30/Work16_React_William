import { useState } from "react";

type Props = {
  text: string;
  setText: React.Dispatch<React.SetStateAction<string>>;
};

function Shouter() {
  const [text, setText] = useState<string>("");

  function handleInput(event: React.ChangeEvent<HTMLInputElement>) {
    const inputValue: string = event.target.value.toUpperCase();
    setText(inputValue.toUpperCase());
  }
  return (
    <div>
      <form>
        <label htmlFor={"input"}>Input</label>
        <input type="text" id="input" onChange={handleInput} />
        <output>{text}</output>
      </form>
    </div>
  );
}

export default Shouter;
