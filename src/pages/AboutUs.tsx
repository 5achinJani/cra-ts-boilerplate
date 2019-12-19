import React from 'react';
import { images } from 'config/images';

const { logo } = images;

export const AboutUs: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>This is about us page</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn more about us
        </a>
      </header>
    </div>
  );
};
