import { Platform } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MatchScreen from '@pages/Match/MatchScreen';
import HistoryScreen from '@pages/History/HistoryScreen';
import HomeScreen from '@pages/Home/HomeScreen';
import SettingsScreen from '@pages/Settings/SettingsScreen';
import { SIZES } from 'constants/theme';
import Octicons from '@react-native-vector-icons/octicons';
import { useUnistyles } from 'react-native-unistyles';

const Tab = createBottomTabNavigator();

const BottomTabNavigation = () => {
  const { theme } = useUnistyles();

  const TabScreens = [
    {
      name: 'Home',
      component: HomeScreen,
      options: ({ navigation }: { navigation: { isFocused: any } }) => {
        const { isFocused } = navigation;

        return {
          tabBarIcon: () => (
            <Octicons
              name="home"
              size={SIZES.base}
              color={isFocused() ? theme.colors.background : theme.colors.primary}
            />
          ),
          tabBarItemStyle: {
            marginHorizontal: SIZES.xxs,
            marginVertical: SIZES.xxs,
            borderRadius: isFocused() ? 10 : 0,
            borderColor: isFocused() ? theme.colors.primary : theme.colors.background,
            borderWidth: isFocused() ? 4 : 0,
          },
        };
      },
    },
    {
      name: 'Match',
      component: MatchScreen,
      options: ({ navigation }: { navigation: { isFocused: any } }) => {
        const { isFocused } = navigation;

        return {
          tabBarIcon: () => (
            <Octicons
              name="plus"
              size={SIZES.base}
              color={isFocused() ? theme.colors.background : theme.colors.primary}
            />
          ),
          tabBarItemStyle: {
            marginHorizontal: SIZES.xxs,
            marginVertical: SIZES.xxs,
            borderRadius: isFocused() ? 10 : 0,
            borderColor: isFocused() ? theme.colors.primary : theme.colors.background,
            borderWidth: isFocused() ? 4 : 0,
          },
          orientation: 'landscape',
        };
      },
    },
    {
      name: 'History',
      component: HistoryScreen,
      options: ({ navigation }: { navigation: { isFocused: any } }) => {
        const { isFocused } = navigation;

        return {
          tabBarIcon: () => (
            <Octicons
              name="history"
              size={SIZES.base}
              color={isFocused() ? theme.colors.background : theme.colors.primary}
            />
          ),
          tabBarItemStyle: {
            marginHorizontal: SIZES.xxs,
            marginVertical: SIZES.xxs,
            borderRadius: isFocused() ? 10 : 0,
            borderColor: isFocused() ? theme.colors.primary : theme.colors.background,
            borderWidth: isFocused() ? 4 : 0,
          },
        };
      },
    },
    {
      name: 'Settings',
      component: SettingsScreen,
      options: ({ navigation }: { navigation: { isFocused: any } }) => {
        const { isFocused } = navigation;

        return {
          tabBarIcon: () => (
            <Octicons
              name="gear"
              size={SIZES.base}
              color={isFocused() ? theme.colors.background : theme.colors.primary}
            />
          ),
          tabBarItemStyle: {
            marginHorizontal: SIZES.xxs,
            marginVertical: SIZES.xxs,
            borderRadius: isFocused() ? 10 : 0,
            borderColor: isFocused() ? theme.colors.primary : theme.colors.background,
            borderWidth: isFocused() ? 4 : 0,
          },
        };
      },
    },
  ];

  return (
    <Tab.Navigator
      key={theme.colors.primary}
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        tabBarLabelPosition: 'below-icon',
        tabBarActiveTintColor: theme.colors.background,
        tabBarInactiveTintColor: theme.colors.primary,
        tabBarActiveBackgroundColor: theme.colors.primary,
        tabBarInactiveBackgroundColor: theme.colors.background,
        tabBarStyle: {
          height: Platform.OS === 'ios' ? 110 : 75,
          backgroundColor: theme.colors.background,
        },
      }}
    >
      {TabScreens.map((screen, index) => {
        return (
          <Tab.Screen
            key={`${screen.name}-${index}`}
            name={screen.name}
            component={screen.component}
            options={screen.options}
          />
        );
      })}
    </Tab.Navigator>
  );
};

export default BottomTabNavigation;
