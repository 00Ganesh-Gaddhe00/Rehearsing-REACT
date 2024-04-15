import { useEffect, useState } from "react"
import Moviecard from "./moviecard"
import axios from "axios"


export default function Trendingmovies(){
  const [movies, setMovies] = useState([])

  useEffect(()=>{
       axios.get('https://api.themoviedb.org/3/trending/movie/day?api_key=e8f62da5e2126af5d78d9b0d4bc4d1ce')
       .then((response)=>{
          let moviesarray = response.data.results
           setMovies(moviesarray);
       })
  },[])


 if(movies.length==0){
    return<>...loading</>
 }

return(
        <>
        <div className="text-center font-bold text-2xl	 mt-9 ">Trending Movies</div>
        <div className="flex flex-wrap	p-4 gap-6 justify-around ">

         { movies.map((movieObj)=>{
           return <div className=" h-[20rem]	w-[200px] rounded-xl overflow-hidden flex justify-center	items-end bg-cover"	 
                  style={{backgroundImage:`url(https://image.tmdb.org/t/p/original${movieObj.poster_path})`}} >

                 <div className=" text-slate-300	 text-lg bg-gray-800/50	w-full text-center p-2"	>{movieObj.title}</div>
              </div>
         })}

        

        </div>

        </>
    )
    }