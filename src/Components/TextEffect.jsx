import React from 'react'
import {TypeAnimation} from "react-type-animation"

const TextEffect = () => {
  return (
    <TypeAnimation
        sequence={[
            "Student",
            1500,
            "Web Developer",
            1500,
            "React Developer",
            1500,
            "Front-End Developer",
            1500,
            "Back-End Developer",
            1500,
        ]}
        wrapper="span"
        speed={50}
        style={{ display: 'inline-block' }}
        repeat={Infinity}
    />
  )
}

export default TextEffect
