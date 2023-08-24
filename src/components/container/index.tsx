import React from 'react';
import './container.css';

interface ContainerProps {
  children: JSX.Element | JSX.Element[];
}

const Container: React.FC<ContainerProps> = ({ children }) => (
  <div className="styled-container">
    <React.Fragment>{children}</React.Fragment>
  </div>
);

export default Container;
