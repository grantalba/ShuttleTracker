import { Text, TouchableOpacity, View } from 'react-native';
import { StyleSheet, useUnistyles } from 'react-native-unistyles';
import React, { memo, useCallback } from 'react';
import Card from '@components/Card';
import Octicons from '@react-native-vector-icons/octicons';
import { SIZES, FONTS } from 'constants/theme';

type MatchTypeProps = {
  matchType: 'singles' | 'doubles';
  changeMatchType: (matchType: 'singles' | 'doubles') => void;
};

const MatchType = memo(({ matchType = 'singles', changeMatchType }: MatchTypeProps) => {
  const { theme } = useUnistyles();
  const handleOnChangeMatchType = useCallback((match: 'singles' | 'doubles') => {
    changeMatchType(match);
  }, []);

  return (
    <Card>
      <View style={styles.cardContainer}>
        <Octicons name="people" size={SIZES.base} color={theme.colors.text} />
        <Text style={styles.cardText}>Match Type</Text>
      </View>

      <View>
        <TouchableOpacity
          style={styles.matchType}
          onPress={() => handleOnChangeMatchType('singles')}
        >
          {matchType === 'singles' ? (
            <View style={styles.selectedDot} />
          ) : (
            <View style={styles.withoutDot} />
          )}
          <Octicons name="person" size={SIZES.md} color={theme.colors.text} />
          <Text style={styles.cardContentText}>{`Singles (1 vs 1)`}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.matchType}
          onPress={() => handleOnChangeMatchType('doubles')}
        >
          {matchType === 'doubles' ? (
            <View style={styles.selectedDot} />
          ) : (
            <View style={styles.withoutDot} />
          )}
          <Octicons name="people" size={SIZES.md} color={theme.colors.text} />
          <Text style={styles.cardContentText}>{`Doubles (2 vs 2)`}</Text>
        </TouchableOpacity>
      </View>
    </Card>
  );
});

export default MatchType;

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
  matchType: {
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
