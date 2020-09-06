import React from 'react'

import { enableScreens } from 'react-native-screens'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Home from './Screens/Home'
import RecipeList from './Screens/RecipeList'
import SellingPage from './Screens/SellingPage'
import Recipe from './Screens/Recipes'

const Stack = createStackNavigator()
enableScreens()

const mainNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="RecipeList" component={RecipeList} />
        <Stack.Screen name="Recipe" component={Recipe} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default mainNavigation
