import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import './App.css'
import Cart from './components/Cart/Cart';
import Header from './components/Header/Header';
import Main from './components/Main/Main';



function App() { 


  const[spendTime , SetSpendTime] = useState('')
  const [title,setTitle] = useState('')

  
const handleBookMark =(newsTitle)=>{
  const previousTitle = JSON.parse(localStorage.getItem("newsTitle"))
 if (previousTitle) {
  const total = previousTitle + newsTitle;
  
  localStorage.setItem('newsTitle',total);
  setTitle(total)
  
 } else {
  localStorage.setItem('newsTitle',newsTitle);
  setTitle(newsTitle)
  
 }
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
       <Main handleSpendTime = {handleSpendTime}
       handleBookMark={handleBookMark}
       > </Main>
      </div>

      <div className="col-md-4">
        <Cart spendTime={spendTime} title = {title} ></Cart>
      </div>
     </div>
      
    </div>
  )
}

export default App
