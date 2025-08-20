import { View } from 'react-native';
import { StyleSheet } from 'react-native-unistyles';
import React from 'react';
import { SIZES } from 'constants/theme';

const Card = ({ children }: { children: React.ReactNode }) => {
  return <View style={styles.card}>{children}</View>;
};

const styles = StyleSheet.create((theme) => ({
  card: {
    height: 'auto',
    width: '100%',
    borderRadius: SIZES.sm,
    marginVertical: SIZES.base,
    borderWidth: 1,
    borderColor: theme.colors.borderColor,
    padding: SIZES.base,
  },
}));

export default Card;
