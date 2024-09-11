
import movieicon from "./movieicon9.png"
import { Link } from "react-router-dom"


export default function Navbar(){
    return(
        
        <div className='flex py-2  shadow-lg shadow-gray-400'>
        <img className='size-10 mx-4' src={movieicon} alt="Film logo"/>
            <Link to="/" className='text-3xl font-bold text-sky-600 mx-2'>Movies</Link>
            <Link to="/watchlist" className='text-3xl font-bold text-sky-600 mx-2'>WatchList</Link>
        </div>
        
    )
    }