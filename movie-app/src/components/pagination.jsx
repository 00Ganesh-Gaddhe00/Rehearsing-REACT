import { useContext } from "react";
import { Moviecontext } from "./moviecontext";

export default function Pagination(){

    const { pageNo, setPageNo} = useContext(Moviecontext)

    function handlepagenodec(){
        if(pageNo > 1) setPageNo(pageNo-1)
    }

    function handlepagenoInc(){
      setPageNo(pageNo+1);

    }

    
    return(
        <>
         <div className="flex bg-gray-300 p-3 justify-center	gap-14 font-bold m-4">
            <div onClick={handlepagenodec} className="cursor-pointer"><i className="fa-solid fa-arrow-left"></i></div>
            <div>{pageNo}</div>
            <div onClick={handlepagenoInc} className="cursor-pointer"><i className="fa-solid fa-arrow-right"></i></div>
        </div>
        </>
    )
    }