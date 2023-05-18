import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { StatusBar, SafeAreaView, View } from 'react-native';

import mock from '../src/mocks/mock'
import Sobre from '../src/telas/sobre'
import Contato from '../src/telas/contato'
import Catalogo from '../src/telas/catalogo'
import Home from '../src/telas/home'

const Tab = createBottomTabNavigator();

function TabsMenu() {
  return(
    <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;

        if (route.name === 'Home') {
          iconName = focused
            ? 'home'
            : 'home-outline';
        } else if (route.name === 'Sobre') {
          iconName = focused 
          ? 'chatbubble-ellipses' 
          : 'chatbubble-ellipses-outline';
        }

        // You can return any component that you like here!
        return <Ionicons name={iconName} size={size} color={color} />;
      },
      tabBarActiveTintColor: 'Red',
      tabBarInactiveTintColor: 'White',
    })}>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Sobre" component={Sobre} />
      </Tab.Navigator>
  );
}


export default function App() {
  return (
  <NavigationContainer>
    <TabsMenu/>
  </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
