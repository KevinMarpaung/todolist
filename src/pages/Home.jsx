import Header from "../components/header";
import Layout from "../components/layouts/Layout";
import Action from "../components/todoAction";
import Todo from "../components/todo";
import Footer from "../components/footer";
import { useEffect, useState } from "react";

const Home = () => {
  const [value, setValue] = useState([]);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    const saveData = localStorage.getItem("datablog");
    if (saveData) {
      try {
        const parse = JSON.parse(saveData);
        setValue(Array.isArray(parse) ? parse : []);
      } catch (error) {
        console.log("data gaggal diambil", error);
      }
    }
  }, []);

  const handleCheked = (id) => {
    const updateData = value.map((val) =>
      val.id === id ? { ...val, selesai: !val.selesai } : val
    );
    setValue(updateData);
    localStorage.setItem("datablog", JSON.stringify(updateData));
  };

  const handleDelete = (id) => {
    const updateData = value.filter((val) => val.id !== id);
    setValue(updateData);
    localStorage.setItem("datablog", JSON.stringify(updateData));
  };

  const handleFilterChange = (filterType) => {
    setFilter(filterType);
  };

  const filteredValue = value.filter((val) => {
    if (filter === "done") return val.selesai === true;
    if (filter === "active") return val.selesai === false;
    return true;
  });

  const deletaDataDone = () => {
    const updateData = value.filter((val) => val.selesai === false);
    setValue(updateData);
    localStorage.setItem("datablog", JSON.stringify(updateData));
  };

  const deletaAll = () => {
    setValue([]);
    localStorage.setItem("datablog", JSON.stringify([]));
  };
  return (
    <>
      <Layout>
        <Header />
        <Action onfilter={handleFilterChange}></Action>
        <Todo
          handleCheked={handleCheked}
          handleDelete={handleDelete}
          value={filteredValue}
        />
        <Footer deleteDone={deletaDataDone} deleteAll={deletaAll}></Footer>
      </Layout>
    </>
  );
};

export default Home;
