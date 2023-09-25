import Home from "./pages/Home";
import AddTodo from "./pages/TambahData";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import dataKegiatan from "./components/data.json";
import { useState } from "react";
import { useEffect } from "react";

const App = () => {
  const [data, setdata] = useState(dataKegiatan);
  const [search, setSearch] = useState("");
  const [filterdata, setFilterdata] = useState([]);

  function handleAddTodo(task) {
    const newTodo = [
      ...data,
      {
        _id: +new Date(),
        get id() {
          return this._id;
        },
        set id(value) {
          this._id = value;
        },
        task,
        _completed: false,
        get completed() {
          return this._completed;
        },
        set completed(value) {
          this._completed = value;
        },
      },
    ];

    setdata(newTodo);
  }

  const editaData = (id, task) => {
    setdata((data) => {
      return data.map(function (todo) {
        return todo.id === id ? { ...todo, task } : todo;
      });
    });
  };

  function hapusdata(id) {
    setdata(function (data) {
      return data.filter((todo) => todo.id !== id);
    });
  }

  function chakedCompleted(id) {
    setdata((data) =>
      data.map(function (todo) {
        return todo.id === id ? { ...todo, completed: !todo.completed } : todo;
      })
    );
  }

  function SearchTodo(query) {
    setSearch(query);
  }

  useEffect(
    function () {
      const filterNew = data.filter(function (data) {
        return data.task.toLocaleLowerCase().includes(search.toLowerCase());
      });

      setFilterdata(filterNew);
    },
    [data, search]
  );

  function hapusSemuaData() {
    const newLocal = "apakah anda ingin menghapus semua";
    const confirm = window.confirm(newLocal);
    if (confirm) setdata([]);
  }

  const hapusSemuaDataSelesai = () => {
    setdata((data) => data.filter((todo) => !todo.completed));
  };

  return (
    <RouterProvider
      router={createBrowserRouter([
        {
          path: "/",
          _element: (
            <Home
              data={filterdata}
              editTodo={editaData}
              deleteTodo={hapusdata}
              searchTodo={SearchTodo}
              completedTodo={chakedCompleted}
              deleteAllTodo={hapusSemuaData}
              deleteDoneTodo={hapusSemuaDataSelesai}
            />
          ),
          get element() {
            return this._element;
          },
          set element(value) {
            this._element = value;
          },
        },
        {
          path: "/add-todo",
          element: <AddTodo onAddTodo={handleAddTodo} />,
        },
      ])}
    />
  );
};

export default App;
