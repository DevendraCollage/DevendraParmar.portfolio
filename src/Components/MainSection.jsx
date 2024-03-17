import React from 'react'
import styled from 'styled-components';
import {Button} from "../Styles/Button"
import { NavLink } from 'react-router-dom'
import TextEffect from './TextEffect';
import { PiDownloadSimpleBold } from "react-icons/pi";
import { useGlobalContext } from "../context";

const MainSection = () => {

    const {name, image, about, resume} = useGlobalContext();

    //? Date(08/03/2024) - Download Resume From Button Function
    const OpenResume = () => {
        window.open(resume, "_blank");
        return false;
    };
    
    //? Date(08/03/2024) - This is the contextAPI to pass the data
    //? Date(09/03/2024) -  This will i pass the data using context API
    // const FirstName = useContext(AppContext);

    return (
        <Wrapper>
        <div className="container grid grid-two-column">
            <div className="section-main-data">
                {/* <p>{props.heading}</p>  //? Date(09/03/2024) - Some times i will comment this paragraph for set the style of the about component */} 
                <h1 className='mainTopData'>Hello, I'm {name}</h1>
                <h2><span><TextEffect/></span></h2>
                <p className='mainInfoPara'>{about}</p>
                <Button onClick={OpenResume} className="btn HireMe-btn">
                    <NavLink  style={{ display: 'inline-flex', alignItems: 'center' }}> Download Resume <PiDownloadSimpleBold size={20} style={{ marginLeft: '5px' }}/></NavLink>
                </Button>
            </div>
            <div className="section-main-image">
                <picture>
                    <img src={image} alt="" className='main-img' />
                </picture>
            </div>
        </div>
        </Wrapper>
    )
}

const Wrapper = styled.section`
    padding: 11rem 0; //? Date(08/03/2024) - Change the size of the screen to set the padding

    .section-main-data { //? Main data to get in the center
        display: flex;
        flex-direction: column;
        justify-content: center;
        max-height: 40rem; //? Date(08/03/2024) - Set the max height of the screen
    }

    .btn {
        max-width: 22rem; //? 16rem = 160px
    }

    .mainTopData {
        text-transform: uppercase;
        font-weight: 500;
        font-size: 2.9rem; //? 2.9rem = 29px
        color: ${({theme}) =>  theme.colors.heading};
    }
    
    .mainHeading {
        text-transform: uppercase;
        font-size: 6.4rem;
    }

    .mainInfoPara {
        margin-top: 1.5rem;
        margin-bottom: 3.4rem;
        max-width: 60rem;
    }

    .section-main-image {
        display: flex;
        justify-content: center;
        align-items: center;
        max-height: 80%; //? Date(08/03/2024) - To set the height of the image of the component
    }

    picture { //? To get picture in the center
        text-align: center;
    }

    .main-img {
        max-width: 128%;
    }

    @media (max-width: ${({theme}) => theme.media.mobile}) {
        .grid {
            flex-wrap: wrap;
            gap: 7.2rem;
            align-items: center;
            justify-content: center;
        }

        .grid img { //? Set the picture in the Center
            max-width: 100%; /* Ensure images take up the full width of their container */
            height: auto; /* Maintain the aspect ratio of the images */
        }
    }

`;

export default MainSection
