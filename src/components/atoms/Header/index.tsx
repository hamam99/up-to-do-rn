import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import {Icon} from '@rneui/themed';
import {Fonts} from '../../../utils';

type IProps = {
  leftIcon: string | null | undefined;
  leftIconOnPress: () => void | undefined;
  rightIcon: string | null | undefined;
  customRightIcon: any | null | undefined;
  rightIconOnPress: () => void | undefined;
  title: string | undefined;
};

type IButtonProps = {
  name: string;
  onPress: () => void | undefined;
};
const Header = ({
  leftIcon,
  leftIconOnPress,
  rightIcon,
  customRightIcon,
  rightIconOnPress,
  title,
}: IProps) => {
  const buildLeftIcon = () => {
    if (!leftIcon) {
      return null;
    }
    return buildIcon({name: leftIcon, onPress: leftIconOnPress});
  };

  const buildRightIcon = () => {
    if (customRightIcon) {
      return customRightIcon;
    }

    if (rightIcon) {
      return buildIcon({name: rightIcon, onPress: rightIconOnPress});
    }
    return null;
  };

  const buildIcon = ({name, onPress}: IButtonProps) => {
    return (
      <TouchableOpacity onPress={onPress}>
        <Icon name={name} size={32} color="white" />
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
    paddingTop: 16,
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
