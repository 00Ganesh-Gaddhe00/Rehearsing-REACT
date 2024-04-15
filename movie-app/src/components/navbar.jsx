
import movieicon from "./movieicon9.png"


export default function Navbar(){
    return(
        
        <div className='flex py-2'>
        <img className='size-10 mx-4' src={movieicon} alt="Film logo"/>
            <a href="/" className='text-3xl font-bold text-sky-600 mx-2'>Movies</a>
            <a href="/watchlist" className='text-3xl font-bold text-sky-600 mx-2'>WatchList</a>
        </div>
        
    )
    }