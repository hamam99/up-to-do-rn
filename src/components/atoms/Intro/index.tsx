import React from 'react';
import {Text, View, ImageSourcePropType, StyleSheet} from 'react-native';
import {Image} from '@rneui/themed';
import {Fonts} from '../../../utils';
import Indicator from './Indicator';

type IProps = {
  image: ImageSourcePropType;
  title: String;
  description: String;
  indexActive: Number;
};
const IntroItem = ({image, title, description, indexActive}: IProps) => {
  return (
    <View style={styles.container}>
      <Image source={image} style={styles.image} />
      <View style={styles.indicatorWrapper}>
        <Indicator isActive={indexActive === 0} />
        <Indicator isActive={indexActive === 1} />
        <Indicator isActive={indexActive === 2} />
      </View>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
    </View>
  );
};

export default IntroItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  image: {
    width: 213,
    height: 277,
  },
  indicatorWrapper: {
    width: '100%',
    flexDirection: 'row',
    marginTop: 51,
    justifyContent: 'center',
  },
  title: {
    color: 'white',
    fontFamily: Fonts.LatoBold,
    fontSize: 32,
    marginTop: 50,
  },
  description: {
    color: 'white',
    fontFamily: Fonts.LatoRegular,
    fontSize: 16,
    textAlign: 'center',
    marginTop: 42,
  },
});
