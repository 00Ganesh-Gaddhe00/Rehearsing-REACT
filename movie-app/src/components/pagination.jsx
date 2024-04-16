import { useState } from "react"

export default function Pagination(props){
    function handlepagenodec(){
        if(props.pageNo > 1) props.setPageNo(props.pageNo-1)
    }

    function handlepagenoInc(){
      props.setPageNo(props.pageNo+1);

    }

    
    return(
        <>
         <div className="flex bg-gray-300 p-3 justify-center	gap-14 font-bold m-4">
            <div onClick={handlepagenodec} className="cursor-pointer"><i className="fa-solid fa-arrow-left"></i></div>
            <div>{props.pageNo}</div>
            <div onClick={handlepagenoInc} className="cursor-pointer"><i className="fa-solid fa-arrow-right"></i></div>
        </div>
        </>
    )
    }