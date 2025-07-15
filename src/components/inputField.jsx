export default function InputField({ inputFieldText, setInputFieldText }) {
  return (
    <div className="mt-[25px] w-[50%] mx-auto">
      <input
        type="text"
        className="w-full h-[50px] border border-black rounded-sm px-2"
        placeholder="Your calculation"
        value={inputFieldText}
        onChange={(e) => setInputFieldText(e.target.value)}
      />
    </div>
  );
}
