import { Text, TouchableOpacity, View } from 'react-native';
import { StyleSheet, useUnistyles } from 'react-native-unistyles';
import React, { memo, useCallback } from 'react';
import Card from '@components/Card';
import Octicons from '@react-native-vector-icons/octicons';
import { SIZES, FONTS } from 'constants/theme';

type GameFormatProps = {
  gameFormat: '15pt' | '21pt';
  changeGameFormat: (gameFormat: '15pt' | '21pt') => void;
};

const GameFormat = memo(({ gameFormat = '21pt', changeGameFormat }: GameFormatProps) => {
  const { theme } = useUnistyles();
  const handleOnChangeGameFormat = useCallback((gameFormat: '15pt' | '21pt') => {
    changeGameFormat(gameFormat);
  }, []);
  return (
    <Card>
      <View style={styles.cardContainer}>
        <Octicons name="workflow" size={SIZES.base} color={theme.colors.text} />
        <Text style={styles.cardText}>Game Format</Text>
      </View>

      <View>
        <TouchableOpacity style={styles.matchType} onPress={() => handleOnChangeGameFormat('21pt')}>
          {gameFormat === '21pt' ? (
            <View style={styles.gameFormatDot} />
          ) : (
            <View style={styles.styleWithoutDot} />
          )}
          <Text style={styles.cardContentText}>{`21-Point System`}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.matchType} onPress={() => handleOnChangeGameFormat('15pt')}>
          {gameFormat === '15pt' ? (
            <View style={styles.gameFormatDot} />
          ) : (
            <View style={styles.styleWithoutDot} />
          )}
          <Text style={styles.cardContentText}>{`15-Point System`}</Text>
        </TouchableOpacity>
      </View>
    </Card>
  );
});

export default GameFormat;

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
  gameFormatDot: {
    height: SIZES.xxs,
    width: SIZES.xxs,
    backgroundColor: theme.colors.text,
    borderRadius: SIZES.xxs / 2,
    marginRight: SIZES.xxs,
  },
  styleWithoutDot: {
    height: SIZES.xxs,
    width: SIZES.xxs,
    marginRight: SIZES.xxs,
  },
}));
