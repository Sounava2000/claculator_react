import { useState } from "react";

import InputField from "./components/inputField";
import Buttons from "./components/buttons";

import "./App.css";

function App() {
  const [inputFieldText, setInputFieldText] = useState("");

  return (
    <div className="w-screen min-h-screen bg-gray-100 flex flex-col items-center pt-10">
      <InputField
        inputFieldText={inputFieldText}
        setInputFieldText={setInputFieldText}
      />
      <Buttons
        inputFieldText={inputFieldText}
        setInputFieldText={setInputFieldText}
      />
    </div>
  );
}

export default App;
