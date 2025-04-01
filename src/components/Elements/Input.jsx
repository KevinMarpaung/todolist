const Input = ({ value, placeholder, onchange }) => {
  return (
    <input
      type="text"
      value={value}
      className="shadow w-full px-4 py-2 rounded-sm"
      placeholder={placeholder}
      onChange={onchange}
    />
  );
};
export default Input;
