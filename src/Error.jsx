import React from 'react'
import styled from 'styled-components'
import { Button } from './Styles/Button'
import { NavLink } from 'react-router-dom'
import { IoArrowBackCircleSharp } from "react-icons/io5";

const Error = () => {
  return (
    <Wrapper>
        <img className='Page404' src="../public/Images/error.svg" alt="404 Page Not Found" />
        <NavLink to="/">
            <Button style={{ display: 'inline-flex', alignItems: 'center' }} className="btn"> <IoArrowBackCircleSharp size={22} style={{ marginLeft: '5px' }}/>Go Back</Button>
        </NavLink>
    </Wrapper>
  )
}

const Wrapper = styled.section`
    padding: 8rem 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;

    .btn {
        font-size: 2rem;
        margin-top: 4rem;
    }

    .Page404 {
        height: auto;
        width: 400px;
        max-width: 90%;
    }
`;  

export default Error;
