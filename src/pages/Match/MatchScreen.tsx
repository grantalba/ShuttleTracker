import { View, Text, ScrollView } from 'react-native';
import { StyleSheet, useUnistyles } from 'react-native-unistyles';
import React from 'react';
import Container from '@components/Container';
import Octicons from '@react-native-vector-icons/octicons';
import { SIZES, FONTS } from 'constants/theme';
import MatchType from './MatchType';
import GameFormat from './GameFormat';
import PlayersName from './PlayersName';
import { useMatchStore } from '@store/matchStore';
import IconButton from 'components/IconButton';
import { ParamListBase, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

const MatchScreen = () => {
  const { theme } = useUnistyles();
  const matchSettings = useMatchStore((state) => state.matchSettings);
  const changeMatchType = useMatchStore((state) => state.changeMatchType);
  const changeGameFormat = useMatchStore((state) => state.changeGameFormat);
  const updatePlayerName = useMatchStore((state) => state.updatePlayerName);
  const { matchType, gameFormat, players } = matchSettings;
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  const navigateToInGameMatch = () => {
    navigation.navigate('InGameMatch');
  };

  return (
    <Container>
      <View style={styles.header}>
        <Octicons name="gear" size={SIZES.xl} color={theme.colors.text} />
        <Text style={styles.headerTitle}>New Match Setup</Text>
      </View>

      <ScrollView
        removeClippedSubviews={true}
        scrollEventThrottle={16}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        decelerationRate="normal"
        bounces={true}
        bouncesZoom={false}
        alwaysBounceVertical={false}
        maintainVisibleContentPosition={null}
        automaticallyAdjustContentInsets={false}
        contentInsetAdjustmentBehavior="never"
        keyboardShouldPersistTaps="handled"
        keyboardDismissMode="on-drag"
      >
        <MatchType matchType={matchType} changeMatchType={changeMatchType} />

        <GameFormat gameFormat={gameFormat} changeGameFormat={changeGameFormat} />

        <PlayersName matchType={matchType} players={players} updatePlayerName={updatePlayerName} />

        <IconButton
          name={'play'}
          text={'Start Match'}
          onPress={navigateToInGameMatch}
          containerStyle={styles.iconButtonContainer}
        />
      </ScrollView>
    </Container>
  );
};

const styles = StyleSheet.create((theme) => ({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: SIZES.xs,
  },
  headerTitle: {
    ...FONTS.h2,
    fontWeight: 'bold',
    marginLeft: SIZES.sm,
    color: theme.colors.text,
  },
  iconButtonContainer: {
    marginBottom: SIZES.header,
  },
}));

export default MatchScreen;
