import ButtonItem from "./buttonItem";

const buttonItems = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "+", "-", "*", "/", "=", "Clear", "Backspace"];

export default function Buttons({ inputFieldText, setInputFieldText }) {
    return  <div className="grid grid-cols-5 gap-2 w-[50%] mx-auto mt-6">
      {buttonItems.map((btn, idx) => (
        <ButtonItem
          key={idx}
          buttonText={btn}
          inputFieldText={inputFieldText}
          setInputFieldText={setInputFieldText}
        />
      ))}
    </div>
}