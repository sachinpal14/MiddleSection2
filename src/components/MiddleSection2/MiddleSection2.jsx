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
    <div className="Followers-middle-section-2-mainParent-public">
      <div className="Followers-middle-section-2-middle-container-public">
        <div className="Followers-middle-section-2-middle-section-public">
          {/* Profile Details */}
          <div className="Followers-middle-section-2-profile-header-public">
            <div className="Followers-middle-section-2-imageContainer-public">
              <img
                src={profilePic}
                alt="Profile"
                className="Followers-middle-section-2-profile-pic-public"
              />
            </div>
            <div className="Followers-middle-section-2-collabsDetails-public">
              <h4>Collabs</h4> <span>{collabs}</span>
            </div>
            <div className="Followers-middle-section-2-connectionsDetails-public">
              <h4>Connections</h4>
              <span>{connections}</span>
            </div>
          </div>

          {/* Name and Details */}
          <div className="Followers-middle-section-2-profile-info-public">
            <div className="Followers-middle-section-2-nameAndEdit-public">
              <FiEdit />
              <h2>{name}</h2>
            </div>
            <p>{title}</p>
            <p>{address}</p>
          </div>

          {/* Buttons */}
          <div className="Followers-middle-section-2-profile-buttons-public">
            {buttons.map((btn, index) => (
              <button key={index} className="Followers-middle-section-2-btn-public">
                {btn}
              </button>
            ))}
          </div>

          {/* About Section with Expandable Content */}
          <div className="Followers-middle-section-2-about-section-public">
            <h3>About</h3>

            <p>
              {displayedText}
              <span>
                {fullAboutText.length > maxLength && (
                  <button className="Followers-middle-section-2-about-button-public" onClick={toggleExpand}>
                    {isExpanded ? "See Less" : "See More"}
                  </button>
                )}
              </span>
            </p>
          </div>

          {/* Upload Section */}
          <div className="Followers-middle-section-2-upload-section-public">
            <div className="Followers-middle-section-2-headingAndEdit-public">
              <h3>Upload</h3>
              <FiEdit className="Followers-middle-section-2-icon-public" />
            </div>
            <h6>No Upload yet.</h6>
          </div>

          {/* Experience Section */}
          <div className="Followers-middle-section-2-upload-section-public">
            <div className="Followers-middle-section-2-headingAndEdit-public">
              <h3>Experience</h3>
              <FiEdit className="Followers-middle-section-2-icon-public" />
            </div>
            <h6>No Experience yet.</h6>
          </div>

          {/* Skills Section */}
          <div className="Followers-middle-section-2-skills-section-public">
            <div className="Followers-middle-section-2-headingAndIcons-public">
              <h3>Skills</h3>
              <FiEdit />
            </div>
            <div className="Followers-middle-section-2-skill-list-public">
              {skills.map((val, index) => (
                <div key={index} className="Followers-middle-section-2-skillsMiniDiv-public">
                  {val}
                </div>
              ))}
            </div>
          </div>

          {/* Collabs Section */}
          <div className="Followers-middle-section-2-upload-section-public">
            <div className="Followers-middle-section-2-headingAndEdit-public">
              <h3>Collabs</h3>
              <FiEdit className="Followers-middle-section-2-icon-public" />
            </div>
            <h6>No Collab yet.</h6>
          </div>

          {/* Interests Section */}
          <div className="Followers-middle-section-2-skills-section-public">
            <div className="Followers-middle-section-2-headingAndIcons-public">
              <h3>Interests</h3>
              <FiEdit />
            </div>
            <div className="Followers-middle-section-2-skill-list-public">
              {skills.map((val, index) => (
                <div key={index} className="Followers-middle-section-2-skillsMiniDiv-public">
                  {val}
                </div>
              ))}
            </div>
          </div>

          {/* Education Section */}
          <div className="Followers-middle-section-2-main-education-public">
            <div className="Followers-middle-section-2-education-headingAndEdit-public">
              <h3>Education</h3>
              <FiEdit />
            </div>
            <div className="Followers-middle-section-2-buttons-section-public">
              {education.map((edu, index) => (
                <button key={index} className="Followers-middle-section-2-btn-public">
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