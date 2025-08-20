import React from 'react';
import { TouchableOpacity, Text, View, ViewStyle } from 'react-native';
import { StyleSheet, useUnistyles } from 'react-native-unistyles';
import { Octicons, OcticonsIconName } from '@react-native-vector-icons/octicons';
import { SIZES } from 'constants/theme';

interface IconButtonProps {
  name: OcticonsIconName;
  text: string;
  onPress: () => void;
  color?: string;
  iconSize?: number;
  containerStyle?: ViewStyle;
}

const IconButton: React.FC<IconButtonProps> = ({
  name = 'plus',
  text,
  onPress,
  containerStyle,
}) => {
  const { theme } = useUnistyles();
  return (
    <TouchableOpacity style={[styles.button, containerStyle]} onPress={onPress}>
      <View style={styles.contentContainer}>
        <Octicons name={name} size={SIZES.lg} color={theme.colors.buttonText} />
        <Text style={[styles.text, { color: theme.colors.buttonText }]}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create((theme) => ({
  button: {
    height: 60,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.colors.buttonBackground,
    borderRadius: 5,
    paddingHorizontal: 15,
  },
  contentContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1, // Allows content to take up available space and center
  },
  text: {
    marginLeft: 10,
    fontSize: 16,
    fontWeight: 'bold',
  },
}));

export default IconButton;
