import React from 'react'
import { NavLink } from 'react-router-dom'
import NavItem from './NavItem'
import styled from "styled-components"

const Header = () => {
  return (
    <MainHeader>
        <NavLink to="/">
            {/* Place your logo as an image form */}
            {/* Specify the class to img to you logo */}
            <h2 className="font-bold nameHeading">Devendra Parmar</h2>
        </NavLink>
        <NavItem />
    </MainHeader>
  )
}

const MainHeader = styled.header`
    padding: 0 4.8rem;
    height: 9rem;
    background-color: #0a1435;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .nameHeading {
      color: white;
    }

    .nameHeading:hover {
      color: ${({theme}) => theme.colors.helper};
      transition: color 0.2s linear;
    }

    .logo {
      height: auto;
      max-width: 30%;
    }
`

export default Header
