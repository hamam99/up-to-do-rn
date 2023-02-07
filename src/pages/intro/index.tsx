import React from 'react';
import {Text, View} from 'react-native';
import {Image, Button} from '@rneui/themed';

import Intro1Img from '../../assets/images/intro-1.png';

const Intro = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'black',
        paddingHorizontal: 24,
        paddingVertical: 14,
      }}>
      <Text
        style={{
          color: 'rgba(255, 255, 255, 0.44)',
          fontFamily: 'Lato-Regular',
          fontSize: 16,
        }}>
        SKIP
      </Text>

      <View
        style={{flex: 1, justifyContent: 'flex-start', alignItems: 'center'}}>
        <Image source={Intro1Img} style={{width: 213, height: 277}} />
        <View
          style={{
            width: '100%',
            flexDirection: 'row',
            marginTop: 51,
            justifyContent: 'center',
          }}>
          <View
            style={{
              width: 26,
              height: 4,
              backgroundColor: 'rgba(255, 255, 255, 0.87)',
              borderRadius: 56,
            }}
          />
          <View
            style={{
              width: 26,
              height: 4,
              backgroundColor: '#AFAFAF',
              borderRadius: 56,
              marginHorizontal: 8,
            }}
          />
          <View
            style={{
              width: 26,
              height: 4,
              backgroundColor: '#AFAFAF',
              borderRadius: 56,
            }}
          />
        </View>
        <Text
          style={{
            color: 'white',
            fontFamily: 'Lato-Bold',
            fontSize: 32,
            marginTop: 50,
          }}>
          Manage your tasks
        </Text>
        <Text
          style={{
            color: 'white',
            fontFamily: 'Lato-Regular',
            fontSize: 16,
            textAlign: 'center',
            marginTop: 42,
          }}>
          You can easily manage all of your daily tasks in DoMe for free
        </Text>
      </View>

      <View
        style={{
          width: '100%',
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <Button
          type="clear"
          title={'BACK'}
          titleStyle={{
            color: 'rgba(255, 255, 255, 0.44)',
            fontSize: 16,
            fontFamily: 'Lato-Regular',
          }}
          containerStyle={{
            width: 90,
            height: 48,
            borderRadius: 4,
          }}
        />
        <Button
          title={'NEXT'}
          buttonStyle={{
            backgroundColor: '#8875FF',
          }}
          titleStyle={{
            color: 'white',
            fontSize: 16,
            fontFamily: 'Lato-Regular',
          }}
          containerStyle={{
            width: 90,
            height: 48,
            borderRadius: 4,
          }}
        />
      </View>
    </View>
  );
};

export default Intro;
