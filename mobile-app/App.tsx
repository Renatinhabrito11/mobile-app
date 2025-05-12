import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { AuthProvider } from './src/contexts/Authcontext';
import TeacherLogin from './src/pages/Login';
import Home from './src/pages/Home';
import type { RootStackParamList } from './src/routes/types'; // use o caminho certo

const Stack = createStackNavigator<RootStackParamList>();

const App: React.FC = () => {
  return (
    <AuthProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Login" component={TeacherLogin} />
          <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
      </NavigationContainer>
    </AuthProvider>
  );
};

export default App;