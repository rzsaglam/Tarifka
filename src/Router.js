import React from 'react';
import {} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './pages/Home';
import FoodCategory from './pages/FoodCategory';
import FoodDetail from './pages/FoodDetail/';

const Stack = createNativeStackNavigator();

export default function Router() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="HomePage"
          component={Home}
          options={{
            title: 'Categories',
            headerTintColor: '#fb8c00',
            headerTitleStyle: {fontWeight: 'bold'},
          }}
        />
        <Stack.Screen
          name="FoodCategoryPage"
          component={FoodCategory}
          options={{
            title: 'Meals',
            headerTintColor: '#fb8c00',
            headerTitleStyle: {fontWeight: 'bold'},
          }}
        />
        <Stack.Screen
          name="FoodDetailPage"
          component={FoodDetail}
          options={{
            title: 'Detail',
            headerTintColor: '#fb8c00',
            headerTitleStyle: {fontWeight: 'bold'},
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
