import {
  View,
  Text,
  useWindowDimensions,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {Overlay, Divider, Image} from '@rneui/themed';
import ButtonCustom from '../../atoms/ButtonCustom';
import {Colors, Fonts} from '../../../utils';
import {} from '@rneui/themed';
import {CategoryData} from '../../../data';

const ListCategory = ({isVisible, hidePopup, onPress}) => {
  const {width} = useWindowDimensions();

  return (
    <Overlay
      isVisible={isVisible}
      onBackdropPress={() => {
        hidePopup();
      }}
      overlayStyle={{
        backgroundColor: Colors.black2,
        width: 327,
      }}>
      <View style={{}}>
        <Text style={styles.title}>Choose Category</Text>
        <Divider style={styles.divider} />
        <View style={{marginHorizontal: 15, marginBottom: 15}}>
          <FlatList
            numColumns={3}
            data={CategoryData.listCategory}
            renderItem={({item, index, separators}) => (
              <IconCategory
                {...item}
                key={index}
                onPress={() => {
                  onPress({...item});
                  hidePopup();
                }}
              />
            )}
            keyExtractor={(item, index) => index}
            ItemSeparatorComponent={() => <View style={{height: 16}} />}
            columnWrapperStyle={{
              justifyContent: 'space-evenly',
            }}
          />
        </View>
        {/* <ButtonCustom title={'Add Category'} /> */}
      </View>
    </Overlay>
  );
};

export default ListCategory;

const IconCategory = props => {
  const {color, icon, label, name, onPress} = props;
  return (
    <TouchableOpacity
      onPress={onPress}
      //   onPress={() => {
      //     // onPress({color, icon, label, name});
      //     onPress();
      //   }}
    >
      <View
        style={{
          width: 64,
          height: 64,
          backgroundColor: color,
          borderRadius: 4,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Image source={icon} style={{width: 32, height: 32}} />
      </View>
      <Text
        style={{
          fontFamily: Fonts.LatoRegular,
          color: 'white',
          textAlign: 'center',
          marginTop: 5,
          fontWeight: 600,
        }}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  overlay: {},
  title: {
    fontFamily: Fonts.LatoBold,
    fontSize: 16,
    color: 'white',
    width: '100%',
    textAlign: 'center',
    paddingTop: 10,
  },
  divider: {
    backgroundColor: Colors.gray2,
    width: '100%',
    height: 1,
    marginVertical: 15,
  },
});
