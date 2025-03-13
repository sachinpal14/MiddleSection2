import React from 'react'
import './SkillsTypeSection.css'
import { FiEdit } from 'react-icons/fi'
const SkillsTypeSection = ({dummyData ,name}) => {
  return (
  
         <div className="middle-section-2-skills-section">
         <div className="middle-section-2-headingAndIcons">
            <h3>{name}</h3>
            <FiEdit/>
         </div>
          {/* All skills  section  */}
          <div className="middle-section-2-skill-list">
            {dummyData.skills.map((val,index) => (
              <div key={index} className="middle-section-2-skillsMiniDiv">{val}</div>
            ))}
          </div>
        </div>
    
  )
}

export default SkillsTypeSection