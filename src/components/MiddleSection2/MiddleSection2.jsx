import React from "react";
import "./MiddleSection2.css";

import { FiEdit } from "react-icons/fi";

const MiddleSection2 = ({ dummyData }) => {
  return (
    <div className="middle-section-2-mainParent">
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
              <FiEdit />
              <h2>{dummyData.name}</h2>
            </div>
            <p>{dummyData.title}</p>
            <p>{dummyData.address}</p>
          </div>
          {/* Buttons */}
          <div className="middle-section-2-profile-buttons">
            {dummyData.buttons.map((btn, index) => (
              <div>
                <button key={index} className="middle-section-2-btn">
                  {btn}
                </button>
              </div>
            ))}
          </div>
          {/* About Section */}
          <div className="middle-section-2-about-section">
            <h3>About</h3>
            <p>{dummyData.about}</p>
          </div>
          {/* Upload section  */}
          <div>
            <div className="middle-section-2-upload-section">
              <div className="middle-section-2-headingAndEdit">
                <h3> {"Upload"} </h3>

                <FiEdit className="middle-section-2-icon" />
              </div>
              <h6>{"No Upload yet"}.</h6>
            </div>
          </div>
          {/* Experince Sections */}
          <div>
            <div className="middle-section-2-upload-section">
              <div className="middle-section-2-headingAndEdit">
                <h3> {"Experience"} </h3>

                <FiEdit className="middle-section-2-icon" />
              </div>
              <h6>{"No Experience yet"}.</h6>
            </div>
          </div>
          {/* Skills */}
          <div className="middle-section-2-skills-section">
            <div className="middle-section-2-headingAndIcons">
              <h3>{"Skills"}</h3>
              <FiEdit />
            </div>

            <div className="middle-section-2-skill-list">
              {dummyData.skills.map((val, index) => (
                <div key={index} className="middle-section-2-skillsMiniDiv">
                  {val}
                </div>
              ))}
            </div>
          </div>
          {/* Collabs Section  */}
          <div>
            <div className="middle-section-2-upload-section">
              <div className="middle-section-2-headingAndEdit">
                <h3> {"Collabs"} </h3>

                <FiEdit className="middle-section-2-icon" />
              </div>
              <h6>{"No Collab yet"}.</h6>
            </div>
          </div>
          {/* 
         intersets section */}
          <div className="middle-section-2-skills-section">
            <div className="middle-section-2-headingAndIcons">
              <h3>{"Interests"}</h3>
              <FiEdit />
            </div>

            <div className="middle-section-2-skill-list">
              {dummyData.skills.map((val, index) => (
                <div key={index} className="middle-section-2-skillsMiniDiv">
                  {val}
                </div>
              ))}
            </div>
          </div>
          {/* Education Sections */}
          <div className="middle-section-2-main-education">
            <div className="middle-section-2-education-headingAndEdit">
              <h3>{"Education"}</h3>
              <FiEdit />
            </div>
            <div className="middle-section-2-buttons-section">
              {dummyData.collaborators.education.map((btn, index) => (
                <div>
                  <button key={index} className="middle-section-2-btn">
                    {btn}
                  </button>
                </div>
              ))}
            </div>
          </div>
          ;
        </div>
      </div>
    </div>
  );
};

export default MiddleSection2;
