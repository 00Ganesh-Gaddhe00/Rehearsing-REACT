
export default function Moviecard(
  { 
    movieObj,
    title,
    posterpath,
    WatchList,
    handleaddWL,
    handleremoveWL,
  }
){
  function isContain(movieObj1){
    for(let i=0;i<WatchList.length;i++){
        if(movieObj1.id===WatchList[i].id){
            return true
        }
    }
    return false
  }

    return(
    <div className=" h-[20rem] w-[200px]
                     hover:scale-[1.05] shadow-lg shadow-gray-500 hover:shadow-xl hover:shadow-gray-700 duration-300 
                     rounded-2xl overflow-hidden 
                     flex flex-col justify-between	items-end bg-cover"
    style={{backgroundImage:`url(https://image.tmdb.org/t/p/original${posterpath})`}}>

        {isContain(movieObj)? 
        <div onClick={()=>handleremoveWL(movieObj)}
        className="  select-none bg-gray-800/50 m-2 text-md rotate-90 px-1.5 py-0.5 rounded-lg cursor-pointer" >&#10060;</div>:
         <div onClick={()=>handleaddWL(movieObj)}
         className=" select-none bg-gray-800/50 m-2 text-xl px-1 rounded-lg cursor-pointer" >&#128525;</div>
        }

        <div className=" text-slate-300	 text-lg bg-gray-800/50	w-full text-center p-2"	>{title}</div>

    </div> 
    )
}