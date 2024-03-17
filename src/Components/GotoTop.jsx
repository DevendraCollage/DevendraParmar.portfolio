import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { FaArrowUp } from "react-icons/fa6";

const GotoTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    //? Function to get the user on the top of the page of the website
    const goToTop = () => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'})
    }
    const listenToScroll = () => {
        let height = 400;
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        //? Check the condition if height will less scroll then set the this function to true
        if (winScroll > height) {
            setIsVisible(true);
        }else{
            setIsVisible(false);
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", listenToScroll);
        return () => window.removeEventListener("scroll", listenToScroll);
    }, [])

  return (
    <Wrapper>
        {isVisible && (
            <div className='topBtn' onClick={goToTop}>
                <FaArrowUp />   
            </div>
        )}
    </Wrapper>
  )
}

const Wrapper = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

    .topBtn {
        font-size: 2.4rem;
        width: 6rem;
        height: 6rem;
        color: #fff;
        background-color: ${({theme}) => theme.colors.btn};
        box-shadow: ${({theme}) => theme.colors.shadow};
        border-radius: 50%;
        position: fixed;
        bottom: 5rem;
        right: 5rem;
        z-index: 999;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
    }

    @media (max-width: ${({ theme }) => theme.media.mobile}) {
        .topBtn {
        right: 0;
        left: 40%;
        }
    }
`;

export default GotoTop
