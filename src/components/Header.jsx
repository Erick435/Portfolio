import { React, useContext } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { ThemeContext } from "../contexts/ThemeContext";

const Navbar = styled.nav`
background: ${props => 
  props.dark 
    ? "linear-gradient(to bottom right, #090947, #5A585A)" 
    : "linear-gradient(to bottom right, #DCF8EF, #FEE2F8)"
};
background-repeat: no-repeat;
background-size: cover;
color: ${props => (props.dark ? "white" : "black")};
  border-bottom: 1px solid ${props => (props.dark ? "white" : "black")};
  display: flex;
  justify-content: flex-end;
  padding: 15px;
`;

const NameButton = styled(Link)`
  font-weight: bold;
  font-size: 1.7em;
  margin-right: auto;
  text-decoration: none;
  color: ${props => (props.dark ? "white" : "black")};
  /* ...other styles as required... */
`;


const NavButton = styled(Link)`
  background: none;
  font-size: 1.5em;
  border: none;
  color: ${props => (props.dark ? "white" : "black")};
  margin: 0 10px;
  text-decoration: none;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.1);
  }
`;

function Header() {
    const { isDarkMode, setIsDarkMode } = useContext(ThemeContext);

    const toggleMode = () => {
        setIsDarkMode(prevMode => !prevMode);
    };

    return (
        <Navbar dark={isDarkMode}>
            <NameButton to="/" dark={isDarkMode}>Erik Ortega</NameButton>
            <NavButton to="/projects" dark={isDarkMode}>Projects</NavButton>
            <NavButton to="/skills" dark={isDarkMode}>Skills</NavButton>
            <NavButton to="/about" dark={isDarkMode}>About</NavButton>
            <NavButton to="/contact" dark={isDarkMode}>Contact</NavButton>
            <NavButton as="" onClick={toggleMode} dark={isDarkMode}> {isDarkMode ? "Dark Mode" : "Light Mode"} </NavButton>
        </Navbar>
    );
}

export default Header;
