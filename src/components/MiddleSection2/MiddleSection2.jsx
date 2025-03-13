import React, { useState } from "react";
import "./MiddleSection2.css";
import { FiEdit } from "react-icons/fi";
import image from '../../assets/person.jpeg'
const MiddleSection2 = () => {
  // Using useState for all dynamic data
  const [profilePic, setProfilePic] = useState(image);
  const [collabs, setCollabs] = useState(10);
  const [connections, setConnections] = useState(50);
  const [name, setName] = useState("John Doe");
  const [title, setTitle] = useState("Software Engineer || Software Developer");
  const [address, setAddress] = useState("New York, USA");
  const [buttons, setButtons] = useState(["Message", "Connect"]);
  const [about, setAbout] = useState("Passionate developer with experience in web and mobile development.");
  const [skills, setSkills] = useState(["React", "Node.js", "JavaScript"]);
  const [education, setEducation] = useState(["MIT", "Harvard","BCA" , "12th"]);

  return (
    <div className="middle-section-2-mainParent">
      <div className="middle-section-2-middle-container">
        <div className="middle-section-2-middle-section">
          {/* Profile Details */}
          <div className="middle-section-2-profile-header">
            <div className="middle-section-2-imageContainer">
              {/* ProfileImage */}
              <img src={profilePic} alt="Profile" className="middle-section-2-profile-pic" />
            </div>
            {/* Number of the Connection and Collabs*/}
            <div className="middle-section-2-collabsDetails">
              <h4>Collabs</h4> <span>{collabs}</span>
            </div>
            <div className="middle-section-2-connectionsDetails">
              <h4>Connections</h4>
              <span>{connections}</span>
            </div>
          </div>

          {/* Name and the Details */}
          <div className="middle-section-2-profile-info">
            <div className="nameAndEdit">
              <FiEdit />
              <h2>{name}</h2>
            </div>
            <p>{title}</p>
            <p>{address}</p>
          </div>

          {/* Buttons */}
          <div className="middle-section-2-profile-buttons">
            {buttons.map((btn, index) => (
              <button key={index} className="middle-section-2-btn">
                {btn}
              </button>
            ))}
          </div>

          {/* About Section */}
          <div className="middle-section-2-about-section">
            <h3>About</h3>
            <p>{about}</p>
          </div>

          {/* Upload section */}
          <div className="middle-section-2-upload-section">
            <div className="middle-section-2-headingAndEdit">
              <h3>Upload</h3>
              <FiEdit className="middle-section-2-icon" />
            </div>
            <h6>No Upload yet.</h6>
          </div>

          {/* Experience Section */}
          <div className="middle-section-2-upload-section">
            <div className="middle-section-2-headingAndEdit">
              <h3>Experience</h3>
              <FiEdit className="middle-section-2-icon" />
            </div>
            <h6>No Experience yet.</h6>
          </div>

          {/* Skills */}
          <div className="middle-section-2-skills-section">
            <div className="middle-section-2-headingAndIcons">
              <h3>Skills</h3>
              <FiEdit />
            </div>
            <div className="middle-section-2-skill-list">
              {skills.map((val, index) => (
                <div key={index} className="middle-section-2-skillsMiniDiv">
                  {val}
                </div>
              ))}
            </div>
          </div>

          {/* Collabs Section */}
          <div className="middle-section-2-upload-section">
            <div className="middle-section-2-headingAndEdit">
              <h3>Collabs</h3>
              <FiEdit className="middle-section-2-icon" />
            </div>
            <h6>No Collab yet.</h6>
          </div>

          {/* Interests Section */}
          <div className="middle-section-2-skills-section">
            <div className="middle-section-2-headingAndIcons">
              <h3>Interests</h3>
              <FiEdit />
            </div>
            <div className="middle-section-2-skill-list">
              {skills.map((val, index) => (
                <div key={index} className="middle-section-2-skillsMiniDiv">
                  {val}
                </div>
              ))}
            </div>
          </div>

          {/* Education Section */}
          <div className="middle-section-2-main-education">
            <div className="middle-section-2-education-headingAndEdit">
              <h3>Education</h3>
              <FiEdit />
            </div>
            <div className="middle-section-2-buttons-section">
              {education.map((edu, index) => (
                <button key={index} className="middle-section-2-btn">
                  {edu}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MiddleSection2;
