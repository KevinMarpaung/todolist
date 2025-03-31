/* eslint-disable react/prop-types */
import TodoFooter from "../components/footer";
import TodoHeader from "../components/header";
import TodoAction from "../components/todoAction";
import Layout from "../layouts/Layout";
import Todo from "../components/todo";
import { useState } from "react";

function Filter({
  data,
  edit,
  onDeleteTodo,
  onSearchTodo,
  Delete,
  completed,
  deleteCheked,
}) {
  // Make state queryParams to filtered data todos
  const [Params, setParams] = useState("all");

  // function to get value from button trigger all, done, and todo(active todo)
  function handleFiltered(e) {
    setParams(e.target.value);
  }

  // make temp varible to saved todos filter
  let filterTodo;
  if (Params === "all") {
    filterTodo = data;
  } else if (Params === "done") {
    filterTodo = data.filter((todo) => todo.completed);
  } else {
    filterTodo = data.filter((todo) => !todo.completed);
  }

  return (
    <Layout>
      <TodoHeader onSearchTodo={onSearchTodo} />
      <TodoAction onFilteredTodo={handleFiltered} />
      {data.length > 0 ? (
        <div className="space-y-4 mt-10">
          {filterTodo?.map((todo) => {
            return (
              <div key={todo.id}>
                <Todo
                  key={todo.id}
                  id={todo.id}
                  task={todo.task}
                  completed={todo.completed}
                  editTodo={edit}
                  deleteTodo={onDeleteTodo}
                  completedTodo={completed}
                />
              </div>
            );
          })}
        </div>
      ) : (
        <div className="my-10">
          <h1 className=" text-red-500flex items-center justify-center font-bold text-2xl ">
            404 Not Found Todo
          </h1>
        </div>
      )}
      <TodoFooter onDelete={Delete} deleteTodo={deleteCheked} />
    </Layout>
  );
}

export default Filter;
