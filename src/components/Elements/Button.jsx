const Button = (props) => {
  const {
    children,
    onclick,
    type,
    bg = " bg-black",
    text = "text-white",
  } = props;
  return (
    <button
      type={type}
      onClick={onclick}
      className={` font-semibold w-full ${text}  py-2 ${bg}  shadow    rounded-md`}
    >
      {children}
    </button>
  );
};
export default Button;
