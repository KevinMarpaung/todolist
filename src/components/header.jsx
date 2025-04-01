import Button from "./Elements/Button";
import SearchTodo from "./pencarian";
import { useNavigate } from "react-router-dom";

const Header = ({ Search }) => {
  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();
    navigate("/tambahdata");
  };
  return (
    <>
      <div className="mt-12">
        <h2 className="font-bold text-3xl text-center">Todo Search</h2>
        <div className=" px-3 shadow    py-8 mt-5 rounded-sm">
          <div className="flex space-x-8 ">
            <div className="sm:w-4/5">
              <SearchTodo onSearchTodo={Search} />
            </div>
            <div className="sm:w-1/3 self-end">
              <Button onclick={handleClick}>Add New Todo</Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Header;
