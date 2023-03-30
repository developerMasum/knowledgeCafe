import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Cart from './components/Cart/Cart';
import Header from './components/Header/Header';
import Main from './components/Main/Main';


function App() {
  const handleSpendTime = (time) =>{
    const previousSpendTime = JSON.parse(localStorage.getItem('newsCafeInfo'));
  if (previousSpendTime) {
    
    
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
       <Main handleSpendTime = {handleSpendTime}> </Main>
      </div>

      <div className="col-md-4">
        <Cart></Cart>
      </div>
     </div>
      
    </div>
  )
}

export default App
