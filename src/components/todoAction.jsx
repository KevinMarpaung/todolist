// eslint-disable-next-line react/prop-types
function action({ onFilteredTodo }) {
  return (
    <div className="my-4">
      <h2 className="text-center font-bold text-3xl mb-5">Todo List</h2>
      <div className="flex sm:flex-row justify-center space-y-2 sm:space-y-0 sm:space-x-10">
        <button
          className=" text-white bg-sky-500 w-full py-2 font-semibold rounded-sm  "
          value={"all"}
          onClick={(event) => onFilteredTodo(event)}
        >
          All
        </button>
        <button
          className=" text-white bg-sky-500 w-full py-2 font-semibold rounded-sm "
          value={"done"}
          onClick={(event) => onFilteredTodo(event)}
        >
          Done
        </button>
        <button
          className=" text-white bg-sky-500 w-full font-semibold py-2 rounded-sm "
          value={"active"}
          onClick={(event) => onFilteredTodo(event)}
        >
          Todo
        </button>
      </div>
    </div>
  );
}

export default action;
