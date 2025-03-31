/* eslint-disable react/prop-types */
import { useState } from "react";
import Layout from "../components/layouts/Layout";
import { Link, useNavigate } from "react-router-dom";

export default function AddTodo() {
  const navigate = useNavigate();
  const [value, setValue] = useState([]);
  const [selesai, setSelesai] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const datalama = JSON.parse(localStorage.getItem("datablog")) || [];
    let newId = datalama.length > 0 ? datalama[datalama.length - 1].id + 1 : 1;
    const saveData = { id: newId, value, selesai };
    const newData = [...datalama, saveData];
    localStorage.setItem("datablog", JSON.stringify(newData));
    setValue("");
    navigate("/");
  };
  return (
    <Layout>
      <div className="mt-5">
        <h2 className=" text-3xl text-center font-semibold">Todo Input</h2>
        <div className=" shadow px-2 py-8">
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col space-y-2">
              <input
                type="text"
                onChange={(event) => setValue(event.target.value)}
                className="shadow px-4 py-2 rounded-md"
                value={value}
              />
              <button className="font-bold text-black py-2 rounded-sm bg-sky-500 ">
                Tambah Todo
              </button>
              <Link
                className="inline-block text-center font-bold rounded-sm text-white w-full bg-red-500 py-2"
                to="/"
              >
                Cancel
              </Link>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
}
