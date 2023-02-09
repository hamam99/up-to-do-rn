/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';

import {Colors} from '../../utils';
import {IntroData} from '../../data';
import IntroItem from '../../components/atoms/Intro';
import {ButtonCustom} from '../../components';

const Intro = () => {
  const [activeIntro, setActiveIntro] = useState(0);

  return (
    <View style={styles.container}>
      <View
        style={{
          justifyContent: 'flex-start',
          alignItems: 'flex-start',
        }}>
        <ButtonCustom
          type={'clear'}
          title={'Skip'}
          titleStyle={{
            paddingHorizontal: 12,
            color: Colors.white2,
          }}
          containerStyle={{
            borderColor: undefined,
          }}
          onPress={() => {}}
        />
      </View>

      <IntroItem
        description={IntroData.intro[activeIntro].description}
        image={IntroData.intro[activeIntro].image}
        title={IntroData.intro[activeIntro].title}
        indexActive={activeIntro}
      />

      <View style={styles.buttonWrapper}>
        <ButtonCustom
          type={'clear'}
          title={'BACK'}
          titleStyle={{
            paddingHorizontal: 12,
            color: Colors.white2,
          }}
          containerStyle={{
            borderColor: undefined,
          }}
          onPress={() => {
            if (activeIntro > 0) {
              setActiveIntro(activeIntro - 1);
            }
          }}
        />
        <ButtonCustom
          title={activeIntro === 2 ? 'GET STARTED' : 'NEXT'}
          buttonStyle={{
            backgroundColor: Colors.purple,
          }}
          containerStyle={{
            borderRadius: 4,
          }}
          onPress={() => {
            if (activeIntro < 2) {
              setActiveIntro(activeIntro + 1);
            }
          }}
        />
      </View>
    </View>
  );
};

export default Intro;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    paddingHorizontal: 24,
    paddingVertical: 14,
  },
  buttonWrapper: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
