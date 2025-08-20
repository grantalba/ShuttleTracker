import { Text, TouchableOpacity, View } from 'react-native';
import { StyleSheet, UnistylesRuntime, useUnistyles } from 'react-native-unistyles';
import React, { useCallback, useState } from 'react';
import Card from '@components/Card';
import Octicons from '@react-native-vector-icons/octicons';
import Ionicons from '@react-native-vector-icons/ionicons';
import { SIZES, FONTS } from 'constants/theme';

const Appearance = () => {
  const { theme } = useUnistyles();
  const [appearance, setAppearance] = useState(UnistylesRuntime.themeName);

  const handleOnChangeTheme = useCallback(
    (theme: 'light' | 'dark') => {
      UnistylesRuntime.setTheme(theme);
      setAppearance(theme);
    },
    [appearance]
  );

  return (
    <Card>
      <View style={styles.cardContainer}>
        <Ionicons name="color-palette-outline" size={SIZES.base} color={theme.colors.text} />
        <Text style={styles.cardText}>Appearance</Text>
      </View>

      <View>
        <Text style={styles.themeText}>Theme</Text>
        <TouchableOpacity
          style={styles.appearanceButton}
          onPress={() => handleOnChangeTheme('light')}
        >
          {appearance === 'light' ? (
            <View style={styles.selectedDot} />
          ) : (
            <View style={styles.withoutDot} />
          )}
          <Octicons name="sun" size={SIZES.md} color={theme.colors.text} />
          <Text style={styles.cardContentText}>{`Light`}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.appearanceButton}
          onPress={() => handleOnChangeTheme('dark')}
        >
          {appearance === 'dark' ? (
            <View style={styles.selectedDot} />
          ) : (
            <View style={styles.withoutDot} />
          )}
          <Octicons name="moon" size={SIZES.md} color={theme.colors.text} />
          <Text style={styles.cardContentText}>{`Dark`}</Text>
        </TouchableOpacity>
      </View>
    </Card>
  );
};

export default Appearance;

const styles = StyleSheet.create((theme) => ({
  cardContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: SIZES.base,
  },
  cardText: {
    ...FONTS.h3,
    marginLeft: SIZES.xs,
    color: theme.colors.text,
    fontWeight: 'bold',
  },
  themeText: {
    ...FONTS.h4,
    color: theme.colors.text,
    marginBottom: SIZES.xs,
  },
  appearanceButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  cardContentText: {
    ...FONTS.h4,
    marginHorizontal: SIZES.xxs,
    color: theme.colors.text,
  },
  selectedDot: {
    height: SIZES.xxs,
    width: SIZES.xxs,
    backgroundColor: theme.colors.text,
    borderRadius: SIZES.xxs / 2,
    marginRight: SIZES.sm,
  },
  withoutDot: {
    height: SIZES.xxs,
    width: SIZES.xxs,
    marginRight: SIZES.sm,
  },
}));
