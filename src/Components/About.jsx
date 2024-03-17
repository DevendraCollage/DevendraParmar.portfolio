import React, { useEffect } from 'react'
import MainSection from './MainSection'
import {useGlobalContext} from  "../context"


const About = () => {

  //? Date(09/03/2024) - This data i will pass through the context API
  // const data = {
  //   heading: "About us",
  //   name: "Devendra Parmar",
  //   image: "../../public/Images/about-us.png",
  //   alternative: "Devendra Parmar",
  //   about: "As an aspiring computer science student, I am passionate about harnessing the power of technology to create innovative solutions and drive positive change."
  // }

  const {updateAboutPage} = useGlobalContext();

  useEffect(() => updateAboutPage(), []);

  return (
    <div>
      <MainSection />
    </div>
  )
}

export default About
