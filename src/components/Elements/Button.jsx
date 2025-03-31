const Button = (props) => {
  const { children, onclick } = props;
  return (
    <button
      onClick={onclick}
      className=" font-semibold w-full  text-white py-2 bg-sky-500  rounded-md"
    >
      {children}
    </button>
  );
};
export default Button;
