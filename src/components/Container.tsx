import { View } from 'react-native';
import { StyleSheet } from 'react-native-unistyles';
import React from 'react';
import { SIZES } from 'constants/theme';

const Container = ({ children }: { children: React.ReactNode }) => {
  return <View style={styles.container}>{children}</View>;
};

const styles = StyleSheet.create((theme) => ({
  container: {
    flex: 1,
    paddingHorizontal: SIZES.lg,
    paddingTop: SIZES.lg,
    backgroundColor: theme.colors.screenBackground,
  },
}));

export default Container;
