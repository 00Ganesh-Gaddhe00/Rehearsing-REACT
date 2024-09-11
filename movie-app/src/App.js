import './App.css';
import Home from './components/home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Watchlist from './components/watchlist';
import Navbar from './components/navbar.jsx'
import { useEffect, useState } from "react"
import { Moviecontext } from './components/moviecontext.jsx';

function App() {
  
  const [WatchList, setWatchList] = useState([]);
  const[pageNo, setPageNo] = useState(1);


  function handleaddWL(movieObj){
    const newWatchList = [...WatchList];
    newWatchList.push(movieObj);
    localStorage.setItem('WatchList', JSON.stringify(newWatchList))
    setWatchList(newWatchList);
  }

  function handleremoveWL(movieObj){
     const newWatchList = WatchList.filter((ele)=> {
        return ele.id !==movieObj.id;
     } )
     localStorage.setItem('WatchList', JSON.stringify(newWatchList))

     setWatchList(newWatchList);
  } 

  useEffect(()=>{
    let watchlistfromLS = JSON.parse(localStorage.getItem('WatchList'))
    if(watchlistfromLS===null){
      return
    }
    setWatchList(watchlistfromLS);
},[])
  

  
  return (
    <BrowserRouter>
    <Moviecontext.Provider value ={{ pageNo,
                                setPageNo,
                                WatchList,
                                setWatchList,
                                handleaddWL,
                                handleremoveWL
    }}>

    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/Watchlist' element={<Watchlist/>}></Route>
    </Routes>
    </Moviecontext.Provider>
    </BrowserRouter>
  );
}

export default App;
