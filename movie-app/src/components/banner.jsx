import { useEffect, useState } from "react"
import axios from "axios";


export default function Banner(){

    const [movieObj, setMovieObj] = useState({});

    useEffect(()=>{
        axios.get('https://api.themoviedb.org/3/trending/movie/day?api_key=e8f62da5e2126af5d78d9b0d4bc4d1ce')
        .then(function(response){
            let movies = response.data.results
            let randommovie = movies[Math.floor(Math.random()*20)]
            setMovieObj(randommovie);
        })
    },[])

    if(movieObj.backdrop_path === undefined){
        return <>...loading</>
    }


    
return(
    
        <div className="flex justify-center	items-end h-[70vh] bg-cover	 bg-[url('https://weliveentertainment.com/wp-content/uploads/2024/02/madame-web-banner-4.jpg')]"
        style={{backgroundImage:`url(https://image.tmdb.org/t/p/original${movieObj.backdrop_path})`}}>
            <div className=" text-slate-300	 text-lg bg-gray-800/50	w-full text-center p-2"	>{movieObj.title}</div>
        </div>
    
    
)
}