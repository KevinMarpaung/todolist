/* eslint-disable react/prop-types */
import { useState } from "react";
import Layout from "../layouts/Layout";
import { Link, Form } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function AddTodo({ onAddTodo }) {
  const [value, setValue] = useState("");

  const navigate = useNavigate();

  function Submit(event) {
    event.preventDefault();

    if (!value) return;

    onAddTodo(value);
    navigate("/");
  }

  return (
    <Layout>
      <div className="mt-5">
        <h2 className=" text-3xl text-center font-semibold">Todo Input</h2>
        <div className=" border-2 px-2 py-8">
          <Form action="/" method="POST" onSubmit={Submit}>
            <div className="flex flex-col space-y-2">
              <input
                type="text"
                onChange={(event) => setValue(event.target.value)}
                className="border-2 px-4 py-2 rounded-md"
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
          </Form>
        </div>
      </div>
    </Layout>
  );
}
