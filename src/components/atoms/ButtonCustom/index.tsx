import React from 'react';
import {ViewStyle, StyleSheet, TextStyle} from 'react-native';
import {Button} from '@rneui/themed';
import {Colors, Fonts} from '../../../utils';

type IPropsLocal = {
  title: string | React.ReactElement<{}>;
  buttonStyle: ViewStyle;
  titleStyle: TextStyle;
  containerStyle: ViewStyle;
  type: 'solid' | 'clear' | 'outline';
  disabled: boolean;
  onPress: () => void;
};
const ButtonCustom = ({
  title,
  buttonStyle = {},
  titleStyle = {},
  containerStyle = {},
  type = 'solid',
  disabled = false,
  onPress = () => {},
}: IPropsLocal) => {
  return (
    <Button
      type={type}
      title={title}
      buttonStyle={[type !== 'clear' ? style.button : {}, buttonStyle]}
      titleStyle={{
        ...style.title,
        ...titleStyle,
      }}
      containerStyle={{
        ...style.container,
        ...containerStyle,
      }}
      disabled={disabled}
      onPress={() => onPress()}
    />
  );
};

export default ButtonCustom;

const style = StyleSheet.create({
  button: {
    backgroundColor: Colors.purple,
  },
  title: {
    color: 'white',
    fontSize: 16,
    fontFamily: Fonts.LatoRegular,
    paddingHorizontal: 12,
  },
  container: {
    height: 48,
    borderRadius: 4,
  },
});
