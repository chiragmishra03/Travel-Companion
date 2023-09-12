import React from 'react'
import { PageLinks, socialLinks } from '../Data'
import styled from 'styled-components'
const StyledText = styled.div`
  display: inline-block;
`;

const BlueLetter = styled.span`
  color: blue;
`;

const GreenLetter = styled.span`
  color: green;
`;

const RedLetter = styled.span`
  color: red;
`;
const Navbar = () => {
  return (
    <>
      <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <h3><StyledText>
      <BlueLetter>Y</BlueLetter>
      <GreenLetter>T</GreenLetter>
      <RedLetter>C</RedLetter>
    </StyledText></h3>
          <button type="button" className="nav-toggle" id="nav-toggle">
            <i className="fas fa-bars"></i>
          </button>
        </div>
        {/* left this comment on purpose */}
        <ul className="nav-links" id="nav-links">
        {PageLinks.map((link)=>{
          return (
            <li key={link.id}>
            <a href={link.href} className="nav-link"> {link.text} </a>
          </li>
          )
        })}
        </ul>

        <ul className="nav-icons">
        {socialLinks.map((slink)=>{
          return (
            <li>
            <a href={slink.href} target="_blank" className="nav-icon"
              ><i className={slink.icon}></i
            >
              
            </a>
          </li>
          )
        })}
          
          
        </ul>
      </div>
    </nav>
    </>
  )
}

export default Navbar
