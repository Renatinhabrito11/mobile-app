import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../pages/Home';

const Stack = createStackNavigator();

const StackNavigator: React.FC = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={Home} />
      {/* <Stack.Screen name="LoginDocente" component={LoginScreen} /> */}
      {/* <Stack.Screen name="Criar" component={CriarScreen} /> */}
    </Stack.Navigator>
  );
};

export default StackNavigator
