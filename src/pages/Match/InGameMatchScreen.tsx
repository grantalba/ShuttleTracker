import { View, Text, Platform } from 'react-native';
import React, { useEffect, useLayoutEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useUnistyles } from 'react-native-unistyles';

const InGameMatchScreen = () => {
  const { theme } = useUnistyles();
  const navigation = useNavigation();

  useLayoutEffect(() => {
    const rootStackNavigator = navigation.getParent()?.getParent();
    const bottomTabNavigator = navigation.getParent();

    const hideHeaderAndTabs = () => {
      rootStackNavigator?.setOptions({
        headerShown: false,
      });

      bottomTabNavigator?.setOptions({
        tabBarStyle: { display: 'none' },
      });
    };
    const restoreHeaderAndTabs = () => {
      rootStackNavigator?.setOptions({
        headerShown: true,
      });

      bottomTabNavigator?.setOptions({
        tabBarStyle: {
          height: Platform.OS === 'ios' ? 110 : 75,
          backgroundColor: theme.colors.background,
        },
      });
    };

    hideHeaderAndTabs();

    return () => {
      restoreHeaderAndTabs();
    };
  }, [navigation]);

  return (
    <View>
      <Text>InGameMatchScreen</Text>
    </View>
  );
};

export default InGameMatchScreen;
