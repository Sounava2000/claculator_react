export default function ButtonItem({
  buttonText,
  inputFieldText,
  setInputFieldText,
}) {
  const handleButtonClick = () => {
    try {
      if (buttonText === "Clear") setInputFieldText("");
      else if(buttonText === "Backspace")
        setInputFieldText(curr => {
   
          
            if(curr === "Error!")  
                return "";
            else
                return curr.substring(0, curr.length - 1);
        });
      else if (buttonText === "=") {
        const res = eval(inputFieldText);  
        console.log(res)
        if (isNaN(res)) setInputFieldText("Error!");
          else setInputFieldText(res.toString());  
      } else {
        setInputFieldText((currText) => {
          if (currText === "Error!") return `${buttonText}`;
          else return `${currText}${buttonText}`;
        });
      }
    } catch (err) {
      console.log(err);
      setInputFieldText("Error!");
    }
  };

  return (
  <button
      className="px-3 py-4 bg-yellow-400 border border-black hover:bg-yellow-300 transition-colors"
      onClick={handleButtonClick}
    >
      {buttonText}
    </button>
  );
}
