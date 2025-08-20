import { View, Text } from 'react-native';
import { StyleSheet, useUnistyles } from 'react-native-unistyles';

import React from 'react';
import { Octicons } from '@react-native-vector-icons/octicons';
import { SIZES, FONTS } from 'constants/theme';
import IconButton from 'components/IconButton';
import VerticalIconButton from 'components/VerticalIconButton';
import { ParamListBase, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

const HomeScreen = () => {
  const { theme } = useUnistyles();
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  const navigateToMatch = () => {
    navigation.navigate('MatchRoute');
  };
  const navigateToMatchHistory = () => {
    navigation.navigate('History');
  };
  const navigateToSettings = () => {
    navigation.navigate('Settings');
  };

  return (
    <View style={styles.content}>
      <View>
        <Octicons name="trophy" size={SIZES.header} color={theme.colors.text} />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.textTitle}>Welcome to Shuttle Tracker</Text>
        <Text style={styles.textContent}>Professional scoring for singles and doubles matches</Text>
      </View>

      <View style={styles.buttonContainer}>
        <IconButton name="plus" text={'Start New Match'} onPress={navigateToMatch} />
        <View style={styles.verticalIconContainer}>
          <View style={styles.matchHistoryButton}>
            <VerticalIconButton
              name="history"
              text="Match History"
              onPress={navigateToMatchHistory}
            />
          </View>
          <View style={styles.settingsButton}>
            <VerticalIconButton name="gear" text={'Settings'} onPress={navigateToSettings} />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create((theme) => ({
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: SIZES.display,
    backgroundColor: theme.colors.screenBackground,
  },
  textContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: SIZES.header,
  },
  textTitle: {
    ...FONTS.t3,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: SIZES.xs,
    color: theme.colors.primary,
  },
  textContent: {
    ...FONTS.h4,
    color: theme.colors.textSecondary,
    textAlign: 'center',
  },
  buttonContainer: { width: '100%', marginBottom: SIZES.header },
  verticalIconContainer: { flexDirection: 'row', marginTop: SIZES.sm },
  matchHistoryButton: { flex: 1, paddingRight: SIZES.xxs },
  settingsButton: { flex: 1, paddingLeft: SIZES.xxs },
}));

export default HomeScreen;
