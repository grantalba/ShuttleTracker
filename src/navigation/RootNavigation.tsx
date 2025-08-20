import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomTabNavigation from './BottomTabNavigation';
import Header from '@components/Header';
import { useUnistyles } from 'react-native-unistyles';

const Stack = createNativeStackNavigator();

const RootNavigation = () => {
  const { theme } = useUnistyles();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomeStack"
        component={BottomTabNavigation}
        options={{
          headerTitle: () => <Header />,
          headerStyle: {
            backgroundColor: theme.colors.background,
          },
          headerShadowVisible: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default RootNavigation;
