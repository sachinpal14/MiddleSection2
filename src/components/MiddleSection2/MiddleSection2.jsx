import React, { useState } from "react";
import "./MiddleSection2.css";
import { FiEdit } from "react-icons/fi";
import image from '../../assets/person.jpeg'
const MiddleSection2 = () => {
  // State variables
  const [profilePic, setProfilePic] = useState(
    image
  );
  const [collabs, setCollabs] = useState(10);
  const [connections, setConnections] = useState(50);
  const [name, setName] = useState("John Doe");
  const [title, setTitle] = useState("Software Engineer");
  const [address, setAddress] = useState("New York, USA");
  const [buttons, setButtons] = useState(["Message", "Connect"]);
  const [skills, setSkills] = useState(["React", "Node.js", "JavaScript"]);
  const [education, setEducation] = useState(["MIT", "Harvard"]);
  const [isExpanded, setIsExpanded] = useState(false);

  // About Section with "See More" Feature
  const [fullAboutText ,setfullAboutText]=useState(
    "Passionate developer with experience in web and mobile development. I specialize in React, Node.js, and building scalable applications. Love to work on open-source projects and contribute to the tech community.")

  const toggleExpand = () => setIsExpanded(!isExpanded);

  // Limiting text length before showing "See More"
  const maxLength = 100;
  const displayedText = isExpanded
    ? fullAboutText
    : fullAboutText.slice(0, maxLength) +
      (fullAboutText.length > maxLength ? "..." : "");

  return (
    <div className="middle-section-2-mainParent">
      <div className="middle-section-2-middle-container">
        <div className="middle-section-2-middle-section">
          {/* Profile Details */}
          <div className="middle-section-2-profile-header">
            <div className="middle-section-2-imageContainer">
              <img
                src={profilePic}
                alt="Profile"
                className="middle-section-2-profile-pic"
              />
            </div>
            <div className="middle-section-2-collabsDetails">
              <h4>Collabs</h4> <span>{collabs}</span>
            </div>
            <div className="middle-section-2-connectionsDetails">
              <h4>Connections</h4>
              <span>{connections}</span>
            </div>
          </div>

          {/* Name and Details */}
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

          {/* About Section with Expandable Content */}
          <div className="middle-section-2-about-section">
            <h3>About</h3>

            <p>
              {displayedText}
              <span>
                {fullAboutText.length > maxLength && (
                  <button className="middle-section-2-about-button" onClick={toggleExpand}>
                    {isExpanded ? "See Less" : "See More"}
                  </button>
                )}
              </span>
            </p>
          </div>

          {/* Upload Section */}
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

          {/* Skills Section */}
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
