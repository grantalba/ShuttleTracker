import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MatchScreen from '@pages/Match/MatchScreen';
import InGameMatchScreen from '@pages/Match/InGameMatchScreen';

const Stack = createNativeStackNavigator();

const MatchRoute = () => {
  return (
    <Stack.Navigator initialRouteName="Match" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Match" component={MatchScreen} />
      <Stack.Screen
        name="InGameMatch"
        component={InGameMatchScreen}
        options={{ orientation: 'landscape', fullScreenGestureEnabled: true }}
      />
    </Stack.Navigator>
  );
};

export default MatchRoute;
