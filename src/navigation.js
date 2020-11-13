import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';import HomeScreen from './screens/home'
import HomeScreen from './screens/home'
import WalletScreen from './screens/wallet'
import PayScreen from './screens/pay'


const Tab = createBottomTabNavigator()
const Naviation = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Wallet" component={WalletScreen} />
      <Tab.Screen name="Pay" component={PayScreen} />
    </Tab.Navigator>

  );
}

export default Naviation;