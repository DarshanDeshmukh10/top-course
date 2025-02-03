import React from "react";
import Card from './Card'
function Cards({courses}){
    let allCourses=[];
    function getCourses(){
        
        Object.values(courses).forEach((courseCategory)=>{
            courseCategory.forEach((course)=>{
                allCourses.push(course);
            })
        })
        return allCourses;
    }
    return(
        <div className="flex flex-wrap justify-center gap-4 mb-4">
        {!courses?(
            <div>
                <p>
                    No data Found
                </p>
            </div>
        ):(
            getCourses().map((course)=>{
              return  <Card key={course.id } course={course}/>
            })
        )}
      
        </div>
    )
}
export default Cards;