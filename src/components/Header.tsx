import { View, Text } from 'react-native';
import { StyleSheet, useUnistyles } from 'react-native-unistyles';
import React from 'react';
import { Octicons } from '@react-native-vector-icons/octicons';
import { FONTS, SIZES } from '@constants/theme';

const Header = () => {
  const { theme } = useUnistyles();
  return (
    <View style={styles.container}>
      <Octicons name="trophy" size={SIZES.xl} color={theme.colors.text} />
      <Text style={styles.headerTitle}>Shuttle Tracker</Text>
    </View>
  );
};

const styles = StyleSheet.create((theme) => ({
  container: { flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' },
  headerTitle: { ...FONTS.h1, fontWeight: 'bold', marginLeft: SIZES.xxs, color: theme.colors.text },
}));

export default Header;
