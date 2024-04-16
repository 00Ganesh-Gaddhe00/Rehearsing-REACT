import { useEffect, useState } from "react"
const genreName = {
    28: "Action",
    12: "Adventure",
    16: "Animation",
    35: "Comedy",
    80: "Crime",
    99: "Documentary",
    18: "Drama",
    10751: "Family",
    14: "Fantasy",
    36: "History",
    27: "Horror",
    10402: "Music",
    9648: "Mystery",
    10749: "Romance",
    878: "Sci-Fi",
    10770: "TV",
    53: "Thriller",
    10752: "War",
    37: "Western",
}

export default function Watchlist(

    {
        WatchList,
        handleremoveWL,
        setWatchList
    }
){
    // let movies = [
    //     {
    //         adult: false,
    //         backdrop_path: "/ogFIG0fNXEYRQKrpnoRJcXQNX9n.jpg",
    //         id: 619930,
    //         title: "Narvik",
    //         original_language: "no",
    //         original_title: "Kampen om Narvik",
    //         overview:
    //             "April, 1940. The eyes of the world are on Narvik, a small town in northern Norway, a source of the iron ore needed for Hitler's war machine. Through two months of fierce winter warfare, the German leader is dealt with his first defeat.",
    //         poster_path: "/gU4mmINWUF294Wzi8mqRvi6peMe.jpg",
    //         media_type: "movie",
    //         genre_ids: [10752, 18, 36, 28],
    //         popularity: 321.063,
    //         release_date: "2022-12-25",
    //         video: true,
    //         vote_average: 7.406,
    //         vote_count: 53,
    //     },
    //     
  
  const [ genreList, SetgenreList] = useState(["All Genres"])
const [search, setSearch] = useState('')


useEffect(()=>{
    let WLgenreL = WatchList.map((movieObj)=> genreName[movieObj.genre_ids[0]])
    WLgenreL = new Set(WLgenreL);
    SetgenreList(["All Genres",...WLgenreL]);
},[WatchList])






   function RatingIncrease(){

     let sorted = WatchList.sort((movieA,movieB)=> movieB.vote_average- movieA.vote_average)
     setWatchList([...sorted])
   }

   function RatingDecrease(){
    let sorted = WatchList.sort((movieA,movieB)=> movieA.vote_average- movieB.vote_average)
    setWatchList([...sorted])
   }
    
   function handlesearch(e){
        setSearch(e.target.value);
   }


    return(
        <>
        <div className="flex mt-5 justify-center">
            {genreList.map((genre)=>{
                 return(
                    <div className="m-4 h-[2.5rem] w-[8rem] bg-blue-400 text-white rounded-xl flex justify-center items-center"
            >{genre}</div>
                 )
            })}
            
           




        </div>


        <div className="flex justify-center my-5">
            <input onChange={handlesearch} type="text" placeholder="Search Movies"
            className="h-[2.5rem] w-[16rem] bg-gray-100 border-2 border-gray-300 outline-none px-4 text-lg"
            />
        </div>

        <div className="m-7 overflow-hidden rounded-lg border shadow-md">
            <table className="p-4 w-full text-center">
                <thead className=" bg-gray-100 h-[2rem]">
                    <tr>
                        <th>Name</th>
                        <th >
                            <span onClick={RatingIncrease} className="cursor-pointer" ><i className="fa-solid fa-arrow-up"></i></span>
                            <span className="mx-2">Ratings</span>
                            <span onClick={RatingDecrease} className="cursor-pointer" ><i className="fa-solid fa-arrow-down"></i></span>
                        </th>
                        <th>Popularity</th>
                        <th>Genre</th>
                        <th>Delete Movies</th>
                    </tr>
                </thead>
                <tbody >
                        {WatchList.filter((movieObj)=>{
                            return movieObj.title.toLowerCase().includes(search.toLowerCase())
                        }).map((movieObj) => {
                            return <tr className=" border-b-2">
                                <td className="flex items-center mx-4 py-4"> <img className=" rounded-[6rem]	h-[6rem] w-[6rem]"
                                    src={"https://image.tmdb.org/t/p/original/" + movieObj.poster_path} alt="" />
                                    <div className="mx-4">{movieObj.title}</div>
                                </td>
                                <td >{movieObj.vote_average}</td>
                                <td>{movieObj.popularity}</td>
                                <td>{genreName[movieObj.genre_ids[0]]}</td>
                                <td  onClick={()=>handleremoveWL(movieObj)} className=" text-red-400 "><i className="fa-solid fa-trash-can cursor-pointer"></i></td>
                            </tr>
                        })}

                    </tbody>
            </table>
        </div>
        </>
    )
    }