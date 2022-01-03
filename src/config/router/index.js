import React from 'react';
import {DetailOptionPage, HomePage} from '../../containers/pages';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();
const Router = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTintColor: 'white',
        headerStyle: {backgroundColor: 'tomato'},
      }}>
      <Stack.Screen
        component={HomePage}
        name="HomePage"
        options={{headerShown: false}}
      />
      <Stack.Screen
        component={DetailOptionPage}
        name="DetailOptionPage"
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};
export default Router;
