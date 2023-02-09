import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {Input} from '@rneui/themed';
import {TextInput, ViewStyle, StyleProp, TextStyle} from 'react-native';
import {IconNode} from '@rneui/base';
import {Colors} from '../../../utils';

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
  onChangeText?: ((text: string) => void) | undefined;
};
const TextInputCustom = (props: IProps) => {
  return (
    <View style={{marginHorizontal: -8}}>
      <Input
        placeholder={props.placeholder}
        label={props.label}
        {...props}
        labelStyle={{
          ...styles.label,
          ...props.labelStyle,
        }}
        inputStyle={{
          ...styles.input,
          ...props.inputStyle,
        }}
      />
    </View>
  );
};

export default TextInputCustom;

const styles = StyleSheet.create({
  label: {
    marginBottom: 8,
  },
  input: {
    paddingHorizontal: 12,
    backgroundColor: Colors.black1,
    borderWidth: 1,
    borderRadius: 4,
    borderColor: Colors.gray2,
    color: 'white',
  },
});
