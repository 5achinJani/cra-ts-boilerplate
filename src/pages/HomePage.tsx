import React from 'react';
import { images } from 'config/images';

const { logo } = images;

export const HomePage: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>This is Home Page</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Login/Sign-up
        </a>
      </header>
    </div>
  );
};
