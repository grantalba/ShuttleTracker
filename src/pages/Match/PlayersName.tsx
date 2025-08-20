import { Platform, Text, TextInput, View } from 'react-native';
import { StyleSheet, useUnistyles } from 'react-native-unistyles';
import React, { memo } from 'react';
import Card from '@components/Card';
import Octicons from '@react-native-vector-icons/octicons';
import { SIZES, FONTS } from 'constants/theme';

type PlayersNameProps = {
  matchType: 'singles' | 'doubles';
  players: {
    team1: {
      playerName: string;
    }[];
    team2: {
      playerName: string;
    }[];
  };
  updatePlayerName: (team: 'team1' | 'team2', playerIndex: number, playerName: string) => void;
};

const PlayersName = memo(
  ({ matchType = 'doubles', players, updatePlayerName }: PlayersNameProps) => {
    const { theme } = useUnistyles();

    const handlePlayerNameChange =
      (team: 'team1' | 'team2', playerIndex: number) => (text: string) => {
        updatePlayerName(team, playerIndex, text);
      };

    const renderPlayerInput = (
      team: 'team1' | 'team2',
      playerIndex: number,
      placeholder: string
    ) => {
      const player = players[team][playerIndex];
      const isSecondPlayer = playerIndex === 1;

      return (
        <TextInput
          key={`${team}-${playerIndex}`}
          style={isSecondPlayer ? styles.textInputSecond : styles.textInput}
          placeholder={placeholder}
          placeholderTextColor={theme.colors.textSecondary}
          value={player?.playerName || ''}
          onChangeText={handlePlayerNameChange(team, playerIndex)}
        />
      );
    };

    return (
      <Card>
        <View style={styles.cardContainer}>
          <Octicons name="feed-person" size={SIZES.base} color={theme.colors.text} />
          <Text style={styles.cardText}>Players</Text>
        </View>
        <View>
          {/* Team 1 */}
          <View>
            <Text style={styles.teamText}>Team 1</Text>
            {players.team1.map((_, index) =>
              renderPlayerInput('team1', index, `Player ${index + 1}`)
            )}
          </View>

          {/* Team 2 */}
          <View>
            <Text style={styles.teamText}>Team 2</Text>
            {players.team2.map((_, index) =>
              renderPlayerInput(
                'team2',
                index,
                `Player ${matchType === 'singles' ? index + 2 : index + 3}`
              )
            )}
          </View>
        </View>
      </Card>
    );
  }
);

export default PlayersName;

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
  teamText: {
    ...FONTS.h4,
    color: theme.colors.text,
  },
  textInput: {
    backgroundColor: theme.colors.textInputBackground,
    width: '100%',
    borderRadius: SIZES.xs,
    height: Platform.OS === 'ios' ? 30 : 35,
    paddingHorizontal: SIZES.sm,
    paddingVertical: SIZES.xxxs,
    marginVertical: SIZES.xs,
  },
  textInputSecond: {
    backgroundColor: theme.colors.textInputBackground,
    width: '100%',
    borderRadius: SIZES.xs,
    height: Platform.OS === 'ios' ? 30 : 35,
    paddingHorizontal: SIZES.sm,
    paddingVertical: SIZES.xxxs,
    marginBottom: SIZES.xs,
  },
}));
