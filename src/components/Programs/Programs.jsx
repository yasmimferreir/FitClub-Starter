import React from "react";
import "./Programs.css";
import { programsData } from "../../data/programsData";


const Programs = () => {
    return (
        <div className="Programs" id="programs">
            {/* header */}
         <div className="programs-header">
            <span className='stroke-text'>Veja</span>
            <span> nossa</span>
            <span className='stroke-text'> programação</span>
         </div>

         <div className="program-categories">
            {/*programs categories */}
            {programsData.map((program) => (
                <div className="category"> 
                {program.image} 
                <span>{program.heading}</span>
                <span>{program.details}</span>
                </div>
            ))}
         </div>

        </div>
    )
}

export default Programs;