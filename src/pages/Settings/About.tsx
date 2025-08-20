import { Text, TouchableOpacity, View } from 'react-native';
import { StyleSheet, useUnistyles } from 'react-native-unistyles';
import React from 'react';
import Card from '@components/Card';
import Octicons from '@react-native-vector-icons/octicons';
import { SIZES, FONTS } from 'constants/theme';

const About = () => {
  const { theme } = useUnistyles();

  return (
    <Card>
      <View style={styles.cardContainer}>
        <Octicons name="info" size={SIZES.base} color={theme.colors.text} />
        <Text style={styles.cardText}>About</Text>
      </View>

      <View style={styles.contentStyle}>
        <Text style={styles.textContent}>Shuttle Tracker App v1.0</Text>
        <Text style={styles.textContent}>
          Track scores, manage matches, and maintin your badminton history.
        </Text>
        <Text style={styles.textContent}>Built with React Native.</Text>
      </View>
    </Card>
  );
};

export default About;

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
  contentStyle: {
    marginTop: SIZES.xs,
  },
  textContent: {
    ...FONTS.h4,
    color: theme.colors.text,
    marginBottom: SIZES.xs,
  },
}));
