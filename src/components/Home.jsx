import React from 'react';
import styled, { keyframes } from 'styled-components';

const slideInFromLeft = keyframes`
  0% {
    transform: translateX(-100%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
`;

const WelcomeText = styled.h1`
  font-weight: bold;
  font-size: 2em;
  animation: ${slideInFromLeft} 1s forwards;  // 1 second duration for the animation
`;


function Home() {
  return(
    <div>
      <WelcomeText>Welcome to my portfolio!</WelcomeText>

      <h1>This is an h1 tag </h1>
      <p>I am writing this paragraph just to see what will happen</p>
      <h2>This is a test </h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero doloribus atque molestiae, enim aperiam, repudiandae aspernatur est fugit in nulla eius, dignissimos illo quaerat ad dolorem tempora quasi nemo voluptatem.</p>
      <h1>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero quos officiis cupiditate ab tempore hic asperiores, magni qui quaerat voluptates odit totam sapiente atque molestias consequatur iure soluta, exercitationem nam.</h1>
      <h2>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet laudantium sint voluptatem nam repellendus quam, quae, dolore porro vero commodi optio quia esse? Quod voluptate voluptatum sint molestias assumenda nisi.</h2>
    </div>
  )
}

export default Home;
