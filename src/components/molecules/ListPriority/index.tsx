import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';
import React from 'react';
import {Colors, Fonts} from '../../../utils';
import {Divider, Overlay} from '@rneui/themed';

const data = Array.from({length: 10}, (_, i) => i + 1);

type IProps = {
  isVisible: boolean;
  hidePopup: () => void;
  onPress: (item: any) => void;
};

const ListPriority = ({isVisible, hidePopup, onPress}: IProps) => {
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
            data={data}
            renderItem={({item, index, separators}) => (
              <IconCategory
                item={item}
                key={index}
                onPress={() => {
                  onPress(item);
                  hidePopup();
                }}
              />
            )}
            keyExtractor={(item, index) => index}
            ItemSeparatorComponent={() => <View style={styles.itemSeparator} />}
            columnWrapperStyle={styles.columnWrapper}
          />
        </View>
      </View>
    </Overlay>
  );
};

export default ListPriority;

const IconCategory = props => {
  console.log('IconCategory', props);
  //   const {color, icon, label, name, onPress} = props;
  return (
    <TouchableOpacity onPress={props.onPress}>
      <View style={[styles.iconWrapper, {}]}>
        <Image
          source={require('../../../assets/icons/flag.png')}
          style={styles.icon}
        />
      </View>
      <Text style={styles.iconLabel}>{props.item}</Text>
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
  iconWrapper: {
    width: 64,
    height: 64,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.black3,
  },
  icon: {
    width: 32,
    height: 32,
  },
  iconLabel: {
    fontFamily: Fonts.LatoRegular,
    color: 'white',
    textAlign: 'center',
    marginTop: 5,
    fontWeight: 600,
  },
});
