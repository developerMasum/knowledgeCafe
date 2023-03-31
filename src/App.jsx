import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import './App.css'
import Cart from './components/Cart/Cart';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import SingleNews from './components/SingleNews/SingleNews';
import Blog from './components/Blog/Blog';



function App() { 


  const[spendTime , SetSpendTime] = useState('0')
  const [title,setTitle] = useState('')

  
const handleBookMark =(newsTitle)=>{
  console.log('ok');





  // const previousTitle = JSON.parse(localStorage.getItem("newsTitle"))

//  if (previousTitle) {

// localStorage.setItem.JSON.stringify('newsTitle',total);
//   setTitle(total)
  
//  } else {
//   localStorage.setItem.JSON.stringify('newsTitle',newsTitle);
//   setTitle(newsTitle)
  
//  }
}

  const handleSpendTime = (time) =>{

    const previousSpendTime = JSON.parse(localStorage.getItem('newsCafeInfo'));
  if (previousSpendTime) {
    const sum = previousSpendTime + time ;
    localStorage.setItem('newsCafeInfo',sum);
    SetSpendTime(sum)

    
  }
  else{
    localStorage.setItem('newsCafeInfo',time)
    SetSpendTime(time);
  }
 
  }



  // const [news,setNews] = useState([]);
  // useEffect( ()=>{
  //   fetch('data.json')
  //   .then(res=>res.json())
  //   .then(data=>setNews(data))
  // },[])

  


  return (
    <div className="App">
      <div >
        <Header></Header>
      </div>
     <div className='row'>
     <div className='col-md-8'>
       <Main
       id={SingleNews.id}
       handleSpendTime = {handleSpendTime}
       handleBookMark={handleBookMark}
       > </Main>
      </div>

      <div className="col-md-4">
        <Cart spendTime={spendTime} title = {title} ></Cart>
      </div>
     </div>

     <div className='mt-5'>
      <Blog></Blog>
     </div>
      
    </div>
  )
}

export default App
