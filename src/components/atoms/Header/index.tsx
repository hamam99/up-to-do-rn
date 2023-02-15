import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import {Icon} from '@rneui/themed';
import {Fonts} from '../../../utils';

type IProps = {
  customlLeftIcon: any | null | undefined;
  leftIcon: string | null | undefined;
  leftIconOnPress: () => void | undefined;
  rightIcon: string | null | undefined;
  customRightIcon: any | null | undefined;
  rightIconOnPress: () => void | undefined;
  title: string | undefined;
  type: string | undefined;
  color: string | undefined;
  size: number | undefined;
};

type IButtonProps = {
  name: string;
  onPress: () => void | undefined;
};
const Header = (props: IProps) => {
  const {
    leftIcon,
    leftIconOnPress,
    rightIcon,
    customRightIcon,
    rightIconOnPress,
    title,
    color = 'white',
    size = 32,
    type,
  } = props;

  const buildLeftIcon = () => {
    if (!leftIcon) {
      return null;
    }
    return buildIcon({
      name: leftIcon,
      onPress: leftIconOnPress,
    });
  };

  const buildRightIcon = () => {
    if (customRightIcon) {
      return customRightIcon;
    }

    if (rightIcon) {
      return buildIcon({
        name: rightIcon,
        onPress: rightIconOnPress,
      });
    }
    return null;
  };

  const buildIcon = (props: IButtonProps) => {
    const {name, onPress} = props;
    return (
      <TouchableOpacity onPress={onPress}>
        <Icon name={name} size={size} color={color} type={type} />
      </TouchableOpacity>
    );
  };

  const buildTitle = () => {
    if (!title) {
      return null;
    }

    return (
      <View style={{flex: 1}}>
        <Text style={styles.title}>{title}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {buildLeftIcon()}
      {buildTitle()}
      {buildRightIcon()}
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 42,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 16,
    paddingBottom: 8,
  },
  title: {
    width: '100%',
    fontSize: 20,
    fontFamily: Fonts.LatoRegular,
    color: 'white',
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
