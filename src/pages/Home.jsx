import Header from "../components/header";
import Layout from "../components/layouts/Layout";
import Action from "../components/todoAction";
import Todo from "../components/todo";
import Footer from "../components/footer";
const Home = () => {
  return (
    <>
      <Layout>
        <Header />
        <Action></Action>
        <Todo />
        <Footer></Footer>
      </Layout>
    </>
  );
};

export default Home;
