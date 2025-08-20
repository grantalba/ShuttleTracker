import { create } from 'zustand';

type Player = {
  playerName: string;
};

type MatchSettings = {
  matchType: 'singles' | 'doubles';
  gameFormat: '21pt' | '15pt';
  players: {
    team1: Player[];
    team2: Player[];
  };
};

type MatchSettingsStore = {
  matchSettings: MatchSettings;
  changeMatchType: (matchType: MatchSettings['matchType']) => void;
  changeGameFormat: (gameFormat: MatchSettings['gameFormat']) => void;
  updatePlayerName: (team: 'team1' | 'team2', playerIndex: number, playerName: string) => void;
};

const singlePlayers = {
  team1: [
    {
      playerName: '',
    },
  ],
  team2: [
    {
      playerName: '',
    },
  ],
};

const doublePlayers = {
  team1: [
    {
      playerName: '',
    },
    {
      playerName: '',
    },
  ],
  team2: [
    {
      playerName: '',
    },
    {
      playerName: '',
    },
  ],
};

const INITIAL_STATE: MatchSettings = {
  matchType: 'singles',
  gameFormat: '21pt',
  players: singlePlayers,
};

export const useMatchStore = create<MatchSettingsStore>((set) => ({
  matchSettings: INITIAL_STATE,
  changeMatchType: (matchType) =>
    set((state) => {
      if (state.matchSettings.matchType === matchType) {
        return state;
      }

      return {
        matchSettings: {
          ...state.matchSettings,
          matchType: matchType,
          players: matchType === 'singles' ? singlePlayers : doublePlayers,
        },
      };
    }),
  changeGameFormat: (gameFormat) =>
    set((state) => {
      if (state.matchSettings.gameFormat === gameFormat) {
        return state;
      }

      return {
        matchSettings: {
          ...state.matchSettings,
          gameFormat: gameFormat,
        },
      };
    }),
  updatePlayerName: (team, playerIndex, playerName) =>
    set((state) => {
      const newPlayers: { team1: Player[]; team2: Player[] } = { ...state.matchSettings.players };
      if (newPlayers[team][playerIndex]) {
        newPlayers[team] = [...newPlayers[team]];
        newPlayers[team][playerIndex] = { playerName };
      }
      return {
        matchSettings: {
          ...state.matchSettings,
          players: newPlayers,
        },
      };
    }),
}));
