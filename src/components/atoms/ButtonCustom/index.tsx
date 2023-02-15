import React from 'react';
import {ViewStyle, StyleSheet, TextStyle, StyleProp} from 'react-native';
import {Button} from '@rneui/themed';
import {Colors, Fonts} from '../../../utils';
import {IconNode} from '@rneui/base';

type IPropsLocal = {
  title: string | React.ReactElement<{}>;
  buttonStyle: ViewStyle;
  titleStyle: TextStyle;
  containerStyle: ViewStyle;
  type: 'solid' | 'clear' | 'outline';
  disabled: boolean;
  onPress: () => void;
  icon?: IconNode;
  iconContainerStyle?: StyleProp<ViewStyle>;
  iconRight?: boolean;
  iconPosition?: 'left' | 'right' | 'top' | 'bottom';
  loading?: boolean;
};
const ButtonCustom = (props: IPropsLocal) => {
  const {
    title,
    buttonStyle = {},
    titleStyle = {},
    containerStyle = {},
    type = 'solid',
    onPress = () => {},
  } = props;
  return (
    <Button
      {...props}
      type={type}
      title={title}
      // buttonStyle={[type === 'solid' ? style.button : {}, buttonStyle]}
      buttonStyle={[
        style.button,
        type !== 'solid' ? {backgroundColor: undefined} : {},
        buttonStyle,
      ]}
      titleStyle={{
        ...style.title,
        ...titleStyle,
      }}
      containerStyle={{
        ...style.container,
        ...containerStyle,
      }}
      disabledTitleStyle={{
        color: 'black',
      }}
      onPress={() => onPress()}
    />
  );
};

export default ButtonCustom;

const style = StyleSheet.create({
  button: {
    backgroundColor: Colors.purple,
    height: 48,
  },
  title: {
    color: 'white',
    fontSize: 16,
    fontFamily: Fonts.LatoRegular,
    paddingHorizontal: 12,
  },
  container: {
    borderRadius: 4,
    borderColor: Colors.purple2,
    borderWidth: 1,
  },
});
