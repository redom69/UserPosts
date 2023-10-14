import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import UserScreen from './screens/Users'
import PostsScreen from './screens/Posts'
import DetailScreen from './screens/Detail'


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="UserScreen" component={UserScreen} options={{ title: 'Users' }} />
        <Stack.Screen name="PostsScreen" component={PostsScreen} options={{ title: 'Posts' }} />
        <Stack.Screen name="DetailScreen" component={DetailScreen} options={{ title: 'Details' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}