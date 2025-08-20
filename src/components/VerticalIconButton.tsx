import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { StyleSheet, useUnistyles } from 'react-native-unistyles';
import { Octicons, OcticonsIconName } from '@react-native-vector-icons/octicons';
import { SIZES } from 'constants/theme';

interface VerticalIconButtonProps {
  name: OcticonsIconName;
  text: string;
  onPress: () => void;
}

const VerticalIconButton: React.FC<VerticalIconButtonProps> = ({ name, text, onPress }) => {
  const { theme } = useUnistyles();
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Octicons name={name} size={SIZES.md} color={theme.colors.primary} />
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create((theme) => ({
  button: {
    height: 60,
    width: '100%',
    backgroundColor: theme.colors.background,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: theme.colors.primary,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    paddingVertical: 5,
  },
  text: {
    color: theme.colors.primary,
    fontSize: 12,
    marginTop: 4,
  },
}));

export default VerticalIconButton;
