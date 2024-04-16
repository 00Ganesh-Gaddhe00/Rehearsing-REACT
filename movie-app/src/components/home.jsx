import Banner from "./banner.jsx"
import Trendingmovies from "./trendingMovies.jsx"


export default function Home( {
                                WatchList,
                                setWatchList,
                                handleaddWL,
                                handleremoveWL
}
){
    return(
        <>
        <Banner/>
        <Trendingmovies 
            WatchList={WatchList}
            setWatchList={setWatchList}
            handleaddWL={handleaddWL}
            handleremoveWL={handleremoveWL}
        />
        </>
    )
    }