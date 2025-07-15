import ButtonItem from "./buttonItem";

const buttonItems = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "+", "-", "*", "/", "=", "Clear", "Backspace"];

export default function Buttons({ inputFieldText, setInputFieldText }) {
    return <div className="mt-[25px] w-[20%] mx-auto flex items-center justify-between flex-wrap gap-x-[20px] gap-y-3">
        {
            buttonItems.map((btnText, index) => (
                <ButtonItem key={index} buttonText={btnText} inputFieldText={inputFieldText} setInputFieldText={setInputFieldText} />
            ))
        }
    </div>
}