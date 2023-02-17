import {View, Text, StyleSheet} from 'react-native';
import React, {Ref} from 'react';
import {Input} from '@rneui/themed';
import {TextInput, ViewStyle, StyleProp, TextStyle} from 'react-native';
import {IconNode} from '@rneui/base';
import {Colors, Fonts} from '../../../utils';

type IProps = {
  containerStyle?: StyleProp<ViewStyle>;
  disabled?: boolean;
  disabledInputStyle?: StyleProp<TextStyle>;
  inputContainerStyle?: StyleProp<ViewStyle>;
  leftIcon?: IconNode;
  leftIconContainerStyle?: StyleProp<ViewStyle>;
  rightIcon?: IconNode;
  rightIconContainerStyle?: StyleProp<ViewStyle>;
  inputStyle?: StyleProp<TextStyle>;
  InputComponent?: React.ComponentType | React.ForwardRefExoticComponent<any>;
  errorProps?: object;
  errorStyle?: StyleProp<TextStyle>;
  errorMessage?: string;
  label?: string | React.ReactNode;
  placeholder?: string | undefined;
  labelStyle?: StyleProp<TextStyle> | object;
  labelProps?: object;
  renderErrorMessage?: boolean;
  secureTextEntry?: boolean;
  onChangeText?: ((text: string) => void) | undefined;
  ref?: Ref<T> | undefined;
};
const TextInputCustom = React.forwardRef((props, ref) => {
  return (
    <View style={{marginHorizontal: -8}}>
      <Input
        placeholder={props.placeholder}
        label={props.label}
        ref={ref}
        {...props}
        labelStyle={{
          ...styles.label,
          ...props.labelStyle,
        }}
        inputStyle={{
          ...styles.input,
          ...props.inputStyle,
        }}
        inputContainerStyle={{
          ...styles.inputContainer,
          ...props.inputContainerStyle,
        }}
        leftIcon={props.leftIcon}
      />
    </View>
  );
});

export default TextInputCustom;

const styles = StyleSheet.create({
  label: {
    marginBottom: 8,
  },
  input: {
    color: 'white',
    fontFamily: Fonts.LatoRegular,
    fontSize: 16,
  },
  inputContainer: {
    borderBottomColor: 'transparent',
    paddingHorizontal: 12,
    backgroundColor: Colors.black1,

    borderWidth: 1,
    borderRadius: 4,
    borderColor: Colors.gray2,
  },
  container: {
    borderWidth: 1,
    borderRadius: 4,
    borderColor: Colors.gray2,
  },
});
