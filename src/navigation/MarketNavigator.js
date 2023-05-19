import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {routes} from './routes';
import Basket from '../ui/screens/Basket';

const Stack = createNativeStackNavigator();

const MarketNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={routes.BASKET} component={Basket} />
    </Stack.Navigator>
  );
};

export default MarketNavigator;
