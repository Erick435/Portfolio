import { React, useContext } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { ThemeContext } from "../contexts/ThemeContext";

const Navbar = styled.nav`
  background-color: ${props => (props.dark ? "darkblue" : "white")};
  color: ${props => (props.dark ? "white" : "black")};
  border-bottom: 1px solid white;
  display: flex;
  justify-content: flex-end;
  padding: 15px;
`;

const NavButton = styled(Link)`
  background: none;
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
            <NavButton to="/projects" dark={isDarkMode}>Projects</NavButton>
            <NavButton to="/skills" dark={isDarkMode}>Skills</NavButton>
            <NavButton to="/about" dark={isDarkMode}>About</NavButton>
            <NavButton to="/contact" dark={isDarkMode}>Contact</NavButton>
            <NavButton as="button" onClick={toggleMode} dark={isDarkMode}> {isDarkMode ? "Dark Mode" : "Light Mode"} </NavButton>
        </Navbar>
    );
}

export default Header;
