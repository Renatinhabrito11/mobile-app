import React from 'react';
import styled from 'styled-components/native';
import { useNavigation } from '@react-navigation/native';
import { useAuth } from '../../contexts/AuthContext'; // Certifique-se de adaptar esse contexto para mobile também

interface HeaderProps {
  searchTerm: string;
  onSearchChange: (text: string) => void;
}

const HeaderContainer = styled.View`
  background-color: #F5E1C5;
  padding: 15px 30px;
`;

const Title = styled.Text`
  font-size: 27px;
  color: #00838F;
  font-weight: bold;
`;

const ButtonGroup = styled.View`
  margin-top: 10px;
  flex-direction: row;
  justify-content: flex-end;
`;

const Button = styled.TouchableOpacity`
  background-color: #4CAF50;
  padding: 12px 24px;
  border-radius: 8px;
`;

const ButtonText = styled.Text`
  color: white;
  font-size: 18px;
`;

const Nav = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: #00838F;
  padding: 8px 15px;
`;

const NavButtons = styled.View`
  flex-direction: row;
  gap: 10px;
`;

const NavButton = styled.TouchableOpacity`
  background-color: #4CAF50;
  border-radius: 5px;
  padding: 10px 15px;
  margin-right: 8px;
`;

const NavButtonText = styled.Text`
  color: white;
  font-size: 16px;
`;

const SearchInput = styled.TextInput`
  background-color: #ffffff;
  color: #000;
  padding: 10px 15px;
  border-radius: 10px;
  font-size: 16px;
  flex: 1;
`;

const Header: React.FC<HeaderProps> = ({ searchTerm, onSearchChange }) => {
  const navigation = useNavigation();
  const { isLoggedIn, logout } = useAuth();

  return (
    <>
      <HeaderContainer>
        <Title>Colégio Lumiar</Title>
        <ButtonGroup>
          {isLoggedIn ? (
            <Button onPress={logout}>
              <ButtonText>Logout</ButtonText>
            </Button>
          ) : (
            <Button onPress={() => navigation.navigate('LoginDocente' as never)}>
              <ButtonText>Sou Docente</ButtonText>
            </Button>
          )}
        </ButtonGroup>
      </HeaderContainer>

      <Nav>
        <NavButtons>
          <NavButton onPress={() => navigation.navigate('Home' as never)}>
            <NavButtonText>Home</NavButtonText>
          </NavButton>
          {isLoggedIn && (
            <NavButton onPress={() => navigation.navigate('CriarPostagem' as never)}>
              <NavButtonText>Criar Postagens</NavButtonText>
            </NavButton>
          )}
        </NavButtons>
        <SearchInput
          placeholder="Buscar..."
          value={searchTerm}
          onChangeText={onSearchChange}
          placeholderTextColor="#999"
        />
      </Nav>
    </>
  );
};

export default Header;