import { React, useContext } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Projects from './components/Projects';
import Skills from './components/Skills';
import About from './components/About';
import Contact from './components/Contact';
import Header from './components/Header';
import Home from './components/Home';
import { ThemeProvider, ThemeContext } from "./contexts/ThemeContext";
import { createGlobalStyle, css } from 'styled-components';
import { AudioProvider } from './components/AudioContext';
import MasterControls from './components/MasterControls';
import './App.css';



const GlobalStyles = createGlobalStyle`
  body {
    background: ${props =>
        props.theme.isDarkMode
          ? "linear-gradient(to bottom right, #090947, #5A585A)"
          : "linear-gradient(to bottom right, #DCF8EF, #FEE2F8)"
    };
    background-repeat: no-repeat;
    background-size: cover;
    color: ${props => (props.theme.isDarkMode ? "white" : "black")};
    font-family: 'Colus', Arial, sans-serif;
    transition: background-color 0.3s ease-in-out, color 0.3s ease-in-out;
  }
`;


function GlobalStyle() {
  const theme = useContext(ThemeContext);
  return <GlobalStyles theme={theme} />;
}

function App() {
  return (
    <AudioProvider>
      <ThemeProvider>
        <Router>
          <GlobalStyle />
          <Header />
          <Routes>
            <Route path="/" element={<Home />} exact />
            <Route path="/projects" element={<Projects />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Router>
      </ThemeProvider>
      <MasterControls />
    </AudioProvider>
  );
}


export default App;
