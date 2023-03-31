import "bootstrap/dist/css/bootstrap.min.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
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
    if (blogs.find(a=>a.id === fun.id)) {
      console.log('alart');
      toast("Wow so easy!");

      
    } else {
      const newArr = [...blogs,fun]
     setBlogs(newArr)
      
    }
  };
  console.log(blogs);
  // {
  //   blogs.map(blog=><Cart blog={blog}> </Cart>)
  // }





  // if (bookMarked.find((bm) => bm.id === data.id)) {
  //   console.log("false");
  // } else {
  //   setMarked(...bookMarked, data);
  //   console.log("ok");
  // }

  // const handleAddBooMark  = (news)=>{
  //   if(bookmark.find(bm=>bm.id === news.id)){
  //     // already exist
  //     // Show warning message
  //   }else{
  //     setBookmark([...bookmark, news])
  //   }
  // }



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
            id={SingleNews.id}
            handleSpendTime={handleSpendTime}
            handleBookMark={handleBookMark}
            // bookMarked={bookMarked}
          >
            {" "}
          </Main>
        </div>

        <div className="col-md-4">
          <Cart 
          blogs = {blogs}
          spendTime={spendTime}></Cart>
        </div>
      </div>

      <div className="mt-5 card shadow-2xl border border-danger rounded">
        <Blog></Blog>
      </div>
      <ToastContainer />
    </div>
  );
}

export default App;
