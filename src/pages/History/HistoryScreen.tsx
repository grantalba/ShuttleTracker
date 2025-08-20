import { View, Text } from 'react-native';
import { StyleSheet, useUnistyles } from 'react-native-unistyles';
import React from 'react';
import Container from 'components/Container';
import Octicons from '@react-native-vector-icons/octicons';
import { SIZES, FONTS } from 'constants/theme';

const HistoryScreen = () => {
  const { theme } = useUnistyles();
  return (
    <Container>
      <View style={styles.container}>
        <Octicons name="history" size={SIZES.display} color={theme.colors.textEmpty} />
        <Text style={styles.title}>No Match History</Text>
        <Text style={styles.text}>Your completed matches will appear here.</Text>
        <Text style={styles.text}>Start playing to build your history!</Text>
      </View>
    </Container>
  );
};

const styles = StyleSheet.create((theme) => ({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    ...FONTS.h3,
    fontWeight: 'bold',
    marginVertical: SIZES.base,
    color: theme.colors.text,
  },
  text: {
    ...FONTS.h4,
    lineHeight: SIZES.base,
    marginBottom: SIZES.xs,
    color: theme.colors.textEmpty,
  },
}));

export default HistoryScreen;
