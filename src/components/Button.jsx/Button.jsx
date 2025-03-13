import React from 'react'
import './Button.css'
const Button = ({btn}) => {
  return (
    <div>
        <button  className="middle-section-2-btn">
              {btn}
            </button>
    </div>
  )
}

export default Button