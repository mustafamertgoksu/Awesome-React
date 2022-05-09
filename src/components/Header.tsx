import React from 'react';
import styled from 'styled-components';
import { FaReact } from 'react-icons/fa';

const Header: React.FC = () => {
  return (
    <StyledHeader>
      <h1>Awesome React</h1>
      <FaReact className="react-icon" />
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  width: 100%;
  height: 100px;
  background-color: #111;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0 1rem;
  h1 {
    color: #eee;
  }
  .react-icon {
    color: #61dbfb;
    font-size: 50px;
    cursor: pointer;
  }
`;

export default Header;
