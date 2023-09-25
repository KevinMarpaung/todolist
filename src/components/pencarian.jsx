import { useState } from "react";

// eslint-disable-next-line react/prop-types
function Pencarian({ searchTodo }) {
  const [value, setValue] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    searchTodo(value);
    setValue("");
  };

  return (
    <form action="" onSubmit={handleSubmit} className="w-full">
      <div className="flex flex-col space-y-2">
        <input
          type="text"
          className="border-4 rounded-md w-full py-2 px-4"
          onChange={(event) => setValue(event.target.value)}
        />
        <button className="font-semibold text-white rounded-md bg-sky-500 px-8 py-2">
          Search
        </button>
      </div>
    </form>
  );
}

export default Pencarian;
