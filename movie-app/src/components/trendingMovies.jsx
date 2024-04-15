import { useEffect, useState } from "react"
import Moviecard from "./moviecard"
import axios from "axios"
import Pagination from "./pagination"


export default function Trendingmovies(){
  const [movies, setMovies] = useState([])
  const[pageNo, setPageNo] = useState(1);
  const [WatchList, setWatchList] = useState([]);

  function handleaddWL(id){
    const newWatchList = [...WatchList];
    newWatchList.push(id);
    localStorage.setItem('WatchList', JSON.stringify(newWatchList))
    setWatchList(newWatchList);
  }

  function handleremoveWL(id){
     const newWatchList = WatchList.filter((eleid)=> {
        return eleid !==id;
     } )
     localStorage.setItem('WatchList', JSON.stringify(newWatchList))

     setWatchList(newWatchList);
  } 


    function handlepagenodec(){
        if(pageNo > 1) setPageNo(pageNo-1)
    }

    function handlepagenoInc(){
      setPageNo(pageNo+1);

    }

    useEffect(()=>{
        let watchlistfromLS = JSON.parse(localStorage.getItem('WatchList'))
        setWatchList(watchlistfromLS);
    },[])

  useEffect(()=>{
       axios.get(`https://api.themoviedb.org/3/trending/movie/day?api_key=e8f62da5e2126af5d78d9b0d4bc4d1ce&page=${pageNo}`)
       
       .then((response)=>{
          let moviesarray = response.data.results
           setMovies(moviesarray);
       })
  },[pageNo])


 if(movies.length===0){
    return<>...loading</>
 }

return(
        <>
        <div className="text-center font-bold text-2xl	 mt-9 ">Trending Movies</div>
        <div className="flex flex-wrap	p-4 gap-6 justify-around ">

         { movies.map((movieObj)=>{
           return <Moviecard
           key = {movieObj.id}
           movieobj={movieObj}
           title = {movieObj.title}
           posterpath = {movieObj.poster_path}
           watchlist={WatchList}
           handleaddWL = {handleaddWL}
           handleremoveWL = {handleremoveWL}
           id = {movieObj.id}
           />
         })}

        

        </div>

        <Pagination
          pageNo={pageNo}
          handlepagenoInc={handlepagenoInc}
          handlepagenodec={handlepagenodec}
        />

        </>
    )
    }