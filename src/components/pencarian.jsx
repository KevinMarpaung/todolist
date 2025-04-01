import { useState } from "react";
import Button from "./Elements/Button";
import Input from "./Elements/Input";

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
        <Input
          placeholder={"Todo apa yang ingin anda cari 🔍"}
          value={value}
          onchange={(e) => setValue(e.target.value)}
        ></Input>

        <Button>Search</Button>
      </div>
    </form>
  );
}

export default Pencarian;
