import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import React from 'react';
import {Overlay, Divider, Image} from '@rneui/themed';
import {Colors, Fonts} from '../../../utils';
import {CategoryData} from '../../../data';

type IProps = {
  isVisible: boolean;
  hidePopup: () => void;
  onPress: (item: any) => void;
};
const ListCategory = ({isVisible, hidePopup, onPress}: IProps) => {
  return (
    <Overlay
      isVisible={isVisible}
      onBackdropPress={() => {
        hidePopup();
      }}
      overlayStyle={styles.overlay}>
      <View style={{}}>
        <Text style={styles.title}>Choose Category</Text>
        <Divider style={styles.divider} />
        <View style={styles.listWrapper}>
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
            ItemSeparatorComponent={() => <View style={styles.itemSeparator} />}
            columnWrapperStyle={styles.columnWrapper}
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
    <TouchableOpacity onPress={onPress}>
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
  overlay: {
    backgroundColor: Colors.black2,
    width: 327,
  },
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
  listWrapper: {
    marginHorizontal: 15,
    marginBottom: 15,
  },
  itemSeparator: {
    height: 16,
  },
  columnWrapper: {
    justifyContent: 'space-evenly',
  },
});
