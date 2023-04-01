import "bootstrap/dist/css/bootstrap.min.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";
import "./App.css";
import Cart from "./components/Cart/Cart";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import SingleNews from "./components/SingleNews/SingleNews";
import Blog from "./components/Blog/Blog";

function App() {
  const [spendTime, SetSpendTime] = useState("0");
  const [blogs, setBlogs] = useState([]);

  const handleBookMark = (fun) => {
    if (blogs.find((a) => a.id === fun.id)) {
      toast("You Have Already Bookmarked This Blog!!!!");
    } else {
      const newArr = [...blogs, fun];
      setBlogs(newArr);
    }
  };
 

  const handleSpendTime = (time) => {
    const previousSpendTime = JSON.parse(localStorage.getItem("newsCafeInfo"));
    if (previousSpendTime) {
      const sum = previousSpendTime + time;
      localStorage.setItem("newsCafeInfo", sum);
      SetSpendTime(sum);
    } else {
      localStorage.setItem("newsCafeInfo", time);
      SetSpendTime(time);
    }
  };

  return (
    <div className="App">
      <div>
        <Header></Header>
      </div>
      <div className="row">
        <div className="col-md-8">
          <Main
            key={SingleNews.id}
            handleSpendTime={handleSpendTime}
            handleBookMark={handleBookMark}
          >
            {" "}
          </Main>
        </div>

        <div className="col-md-4">
          <Cart blogs={blogs} spendTime={spendTime}></Cart>
        </div>
      </div>

      <div className="mt-5 card  border border-danger rounded ms-5 me-5 mb-5 shadow rounded ">
        <Blog></Blog>
      </div>
      <ToastContainer />
    </div>
  );
}

export default App;
