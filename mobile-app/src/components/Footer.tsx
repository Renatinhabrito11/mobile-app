import React from 'react';
import styled from 'styled-components/native';

const FooterContainer = styled.View`
  background-color: #00838f;
  padding: 15px 0;
  width: 100%;
  align-items: center;
`;

const FooterText = styled.Text`
  color: white;
  font-size: 14px;
`;

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <FooterText>© 2025 Colégio Lumiar - Todos os direitos reservados</FooterText>
    </FooterContainer>
  );
};

export default Footer;