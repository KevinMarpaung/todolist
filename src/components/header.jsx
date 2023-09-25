import SearchTodo from "./pencarian";
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const Header = ({ Search }) => (
  <div className="mt-12">
    <h2 className="font-bold text-3xl text-center">Todo Search</h2>
    <div className=" px-3 border-4    py-8 mt-5 rounded-sm">
      <div className="flex space-x-8 ">
        <div className="sm:w-4/5">
          <SearchTodo onSearchTodo={Search} />
        </div>
        <div className="sm:w-1/3 self-end">
          <Link
            className="inline-block text-center font-semibold rounded-md text-white w-full bg-sky-500 py-2"
            to="/add-todo"
          >
            Add New Todo
          </Link>
        </div>
      </div>
    </div>
  </div>
);

export default Header;
