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



const GlobalStyles = createGlobalStyle`
  ${({ theme }) => css`
    body {
      background-color: ${theme.isDarkMode ? "darkblue" : "white"};
      color: ${theme.isDarkMode ? "white" : "black"};
      transition: background-color 0.3s ease-in-out, color 0.3s ease-in-out;
    }
  `}
`;

function GlobalStyle() {
  const theme = useContext(ThemeContext);
  return <GlobalStyles theme={theme} />;
}

function App() {
  return (
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
  );
}


export default App;
