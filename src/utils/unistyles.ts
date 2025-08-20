import { StyleSheet } from 'react-native-unistyles';

const lightTheme = {
  colors: {
    primary: '#000000',
    text: '#000000',
    textSecondary: '#777777',
    textEmpty: '#919191',
    textInputBackground: '#DADADA',
    background: '#FFFFFF',
    buttonBackground: '#000000',
    screenBackground: '#F2F2F2',
    buttonText: '#FFFFFF',
    borderColor: '#616161',
  },
};

const darkTheme = {
  colors: {
    primary: '#FFFFFF',
    text: '#FFFFFF',
    textSecondary: '#DADADA',
    textEmpty: '#888888',
    textInputBackground: '#2A2A2A',
    background: '#000000',
    buttonBackground: '#FFFFFF',
    screenBackground: '#141414',
    buttonText: '#000000',
    borderColor: '#B0B0B0',
  },
};

const appThemes = {
  light: lightTheme,
  dark: darkTheme,
};

type AppThemes = typeof appThemes;

declare module 'react-native-unistyles' {
  export interface UnistylesThemes extends AppThemes {}
}

StyleSheet.configure({
  themes: appThemes,
  settings: {
    initialTheme: 'light',
  },
});
