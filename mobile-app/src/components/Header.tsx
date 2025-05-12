import React from 'react';
import styled from 'styled-components/native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useAuth } from '../contexts/Authcontext';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../routes/types'; // ajuste o caminho conforme necessário

type NavigationProp = StackNavigationProp<RootStackParamList>;

interface HeaderProps {
  searchTerm: string;
  onSearchChange: (text: string) => void;
}

const HeaderContainer = styled.View`
  background-color: #f5e1c5;
  padding: 15px 20px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const Title = styled.Text`
  font-size: 27px;
  color: #00838f;
  flex: 1;
  text-align: center;
`;

const Button = styled.TouchableOpacity`
  background-color: #4caf50;
  padding: 10px 20px;
  border-radius: 8px;
`;

const ButtonText = styled.Text`
  color: white;
  font-size: 16px;
`;

const SearchBarContainer = styled.View`
  background-color: #00838f;
  padding: 8px 20px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const SearchInput = styled.TextInput`
  flex: 1;
  padding: 10px;
  font-size: 16px;
  border-radius: 10px;
  background-color: #ffffff;
  color: #000000;
  margin-left: 20px;
`;

const NavButton = styled.TouchableOpacity`
  background-color: #4caf50;
  padding: 10px 15px;
  border-radius: 5px;
  margin-right: 10px;
`;

const NavButtonText = styled.Text`
  color: #fff;
  font-size: 16px;
`;

const Header: React.FC<HeaderProps> = ({ searchTerm, onSearchChange }) => {
  const navigation = useNavigation<NavigationProp>(); // ✅ tipagem aplicada aqui
  const route = useRoute();
  const { isLoggedIn, logout } = useAuth();

  const isCreatePostPage = route.name === 'Criar';

  return (
    <>
      <HeaderContainer>
        <Title>Colégio Lumiar</Title>
        <Button onPress={isLoggedIn ? logout : () => navigation.navigate('Login')}>
          <ButtonText>{isLoggedIn ? 'Logout' : 'Sou Docente'}</ButtonText>
        </Button>
      </HeaderContainer>

      <SearchBarContainer>
        <NavButton onPress={() => navigation.navigate('Home')}>
          <NavButtonText>Home</NavButtonText>
        </NavButton>
        {/* {isLoggedIn && !isCreatePostPage && (
          <NavButton onPress={() => navigation.navigate('Criar')}>
            <NavButtonText>Criar Postagens</NavButtonText>
          </NavButton>
        )} */}
        <SearchInput
          placeholder="Buscar..."
          value={searchTerm}
          onChangeText={onSearchChange}
        />
      </SearchBarContainer>
    </>
  );
};

export default Header;