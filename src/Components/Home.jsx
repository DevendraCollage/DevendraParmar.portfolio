import React, { useEffect } from 'react'
import MainSection from './MainSection'
import {useGlobalContext} from "../context";
import Service from "./Service"
import Contact from "./Contact"

const Home = () => {
  
  //? Date(09/03/2024) - This data i will pass through the context API
  // const data = {
  //   name: "Devendra Parmar",
  //   image: "../../public/Images/dev-ed-wave.png",
  //   alternative: "Devendra Parmar",
  //   about: "As an aspiring computer science student, I am passionate about harnessing the power of technology to create innovative solutions and drive positive change.",
  //   resumeLink: "https://drive.google.com/file/d/1o3c9L9aBpOGuCOoxN27jTRscG4k0wJfX/view"
  // }

  const {updateHomePage} = useGlobalContext();

  useEffect(()=> updateHomePage(), [])

  return (
    <div>
      <MainSection />
      <Service />
      <Contact />
    </div>
  )
}

export default Home;
