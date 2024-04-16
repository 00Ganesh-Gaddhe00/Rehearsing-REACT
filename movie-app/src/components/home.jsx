import Banner from "./banner.jsx"
import Trendingmovies from "./trendingMovies.jsx"


export default function Home( { pageNo,
                                setPageNo,
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
            pageNo={pageNo}
            setPageNo={setPageNo}
            WatchList={WatchList}
            setWatchList={setWatchList}
            handleaddWL={handleaddWL}
            handleremoveWL={handleremoveWL}
        />
        </>
    )
    }