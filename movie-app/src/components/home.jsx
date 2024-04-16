import Banner from "./banner.jsx"
import Trendingmovies from "./trendingMovies.jsx"


export default function Home( {
                                WatchList,
                                handleaddWL,
                                handleremoveWL
}
){
    return(
        <>
        <Banner/>
        <Trendingmovies 
            WatchList={WatchList}
            handleaddWL={handleaddWL}
            handleremoveWL={handleremoveWL}
        />
        </>
    )
    }