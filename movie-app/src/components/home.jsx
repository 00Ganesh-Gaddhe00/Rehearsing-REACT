import Navbar from "./navbar.jsx"
import Banner from "./banner.jsx"
import Trendingmovies from "./trendingMovies.jsx"
import Pagination from "./pagination.jsx"


export default function Home(){
    return(
        <>
        <Navbar/>
        <Banner/>
        <Trendingmovies/>
        <Pagination/>
        </>
    )
    }