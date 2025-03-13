import React from "react";
import Button from "../Button.jsx/Button";
import { FiEdit } from "react-icons/fi";
import './Education.css'

const Education = ({heading,dummyData}) => {
  return <div className="middle-section-2-main-education">
    <div className="middle-section-2-education-headingAndEdit">
        <h3>{heading}
        </h3>
        <FiEdit/>
    </div>
    <div className="middle-section-2-buttons-section">
       { dummyData. collaborators.education.map((btn,index)=> <Button key={index} btn={btn} />)}
    </div>
  </div>;
};

export default Education;
