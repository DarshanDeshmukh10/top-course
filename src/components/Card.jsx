import React from "react";
import { FcLike } from "react-icons/fc";
function Card({course}){

    return(
        <div className="w-[300px] bg-[#2a2a4a] bg-opacity-80 rounded overflow-hidden">
            <div className="relative">
            <img src={course.image.url} alt="courseimg"  />
            <div className="w-[40px] h-[40px] bg-white rounded-full absolute right-2 bottom-3 grid place-items-center">
            <button >
                    <FcLike fontSize='1.75rem'/>     
            </button>
            </div>
            
            </div>
            
            <div className="p-4">
                <p className="text-white font-semibold text-lg leading-6">{course.title}</p>
                <p className="mt-2 text-white">{course.description}</p>
                
            </div>
        </div>
    )
}
export default Card;