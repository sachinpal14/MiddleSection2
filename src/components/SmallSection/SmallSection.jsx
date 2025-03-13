import React from 'react'
import { FiEdit } from "react-icons/fi";
import './SmallSection.css'
const SmallSection = ( {heading,msg}) => {
  return (
    <div>
         <div className="middle-section-2-upload-section">
          <div className="middle-section-2-headingAndEdit">
            <h3> {heading} </h3>
           
             <FiEdit className="middle-section-2-icon"/>
       
          </div>
          <h6>{msg}.</h6>
        </div>
    </div>
  )
}

export default SmallSection