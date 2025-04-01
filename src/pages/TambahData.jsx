/* eslint-disable react/prop-types */
import { useState } from "react";
import Layout from "../components/layouts/Layout";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Button from "../components/Elements/Button";

const userSchema = z.object({
  todo: z
    .string()
    .min(3, "Todo harus lebih dari 3 huruf")
    .regex(/^[A-Za-z\s]*$/, "Hanya boleh huruf dan spasi"),
});

export default function AddTodo() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm({
    resolver: zodResolver(userSchema),
  });
  const navigate = useNavigate();
  const [value, setValue] = useState("");
  const [selesai, setSelesai] = useState(false);

  const handleklik = () => {
    const datalama = JSON.parse(localStorage.getItem("datablog")) || [];
    let newId = datalama.length > 0 ? datalama[datalama.length - 1].id + 1 : 1;
    const saveData = { id: newId, value, selesai };
    const newData = [...datalama, saveData];
    localStorage.setItem("datablog", JSON.stringify(newData));
    setValue("");
    navigate("/");
  };

  const handleCancel = () => {
    navigate("/");
  };
  return (
    <Layout>
      <div className="mt-5">
        <h2 className=" text-3xl text-center font-semibold">Todo Input</h2>
        <div className=" shadow px-2 py-8">
          <form onSubmit={handleSubmit(handleklik)}>
            <div className="flex flex-col space-y-2">
              <input
                {...register("todo", { required: true })}
                type="text"
                className="shadow px-4 py-2 rounded-md"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                placeholder="Tambahkan kegiatan anda 👍"
              />
              {errors.todo && (
                <p className="text-red-500 font-bold text-sm">
                  {errors.todo.message}
                </p>
              )}

              <Button type="submit">Tambah Todo</Button>
              <Button onclick={handleCancel} bg={"bg-red-500"}>
                Cancel
              </Button>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
}
