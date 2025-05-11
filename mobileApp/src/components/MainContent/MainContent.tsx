import React from 'react';
import styled from 'styled-components/native';

const Main = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 20px;
  background-color: #ffffff;
`;

interface MainContentProps {
  children: React.ReactNode;
}

const MainContent: React.FC<MainContentProps> = ({ children }) => {
  return <Main>{children}</Main>;
};

export default MainContent;