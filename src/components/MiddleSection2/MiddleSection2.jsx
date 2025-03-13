import React from "react";
import "./MiddleSection2.css";

import Button from "../Button.jsx/Button";

import SmallSection from "../SmallSection/SmallSection";
import SkillsTypeSection from "../SkillsTypeSection/SkillsTypeSection";
import { FiEdit } from "react-icons/fi";
import Education from "../Education.jsx/Education";

const MiddleSection = ({ dummyData }) => {
  return (
    <div className="middle-section-2-middle-container">
      <div className="middle-section-2-middle-section">
        {/* Profile Details */}
        <div className="middle-section-2-profile-header">
          <div className="middle-section-2-imageContainer">
            {/* ProfileImage */}
            <img
              src={dummyData.profilePic}
              alt="Profile"
              className="middle-section-2-profile-pic"
            />
          </div>
          {/* Number of the Connection and Collabs*/}
          <div className="middle-section-2-collabsDetails">
            {/* Collabs */}
            <h4>Collabs</h4> <span>{dummyData.collabs} </span>
          </div>
          <div className="middle-section-2-connectionsDetails">
            {/* Connections */}
            <h4>Connections</h4>
            <span>{dummyData.connections} </span>
          </div>
        </div>
        {/* Name and the Details */}
        <div className="middle-section-2-profile-info">
         <div className="nameAndEdit">
         <FiEdit/>
         <h2>{dummyData.name}</h2>
         </div>
          <p>{dummyData.title}</p>
          <p>{dummyData.address}</p>
        </div>

        {/* Buttons */}
        <div className="middle-section-2-profile-buttons">
          {dummyData.buttons.map((btn, index) => (
            <Button key={index} btn={btn} />
          ))}
        </div>

        {/* About Section */}
        <div className="middle-section-2-about-section">
          <h3>About</h3>
          <p>{dummyData.about}</p>
        </div>
        {/* Upload section  */}
        <SmallSection heading="Upload" msg="No Upload yet." />

        {/* Experince Sections */}

        <SmallSection heading="Experience" msg="Fresh to field " />

        {/* Skills */}
        <SkillsTypeSection dummyData={dummyData} name="Skills"/>
        {/* Collabs Section  */}

        <SmallSection heading="Collab" msg="Still looking for Co-Stars" />
        {/* 
         intersets section */}
          <SkillsTypeSection dummyData={dummyData} name="Experince" />

          {/* Education Sections */}
         <Education dummyData={dummyData} heading="Education" />

      </div>
    </div>
  );
};

export default MiddleSection;
