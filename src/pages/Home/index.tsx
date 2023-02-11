import React from 'react';
import {View, Text, FlatList, Image, StyleSheet} from 'react-native';
import {HeaderWithProfile} from '../../components';
import {HomeData} from '../../data';
import GlobalStyles from '../../styles';
import {Colors, Fonts} from '../../utils';

const Home = () => {
  return (
    <View style={[GlobalStyles.container]}>
      <HeaderWithProfile title="Home" />
      <FlatList data={HomeData.ListTaskEmpty} ListEmptyComponent={<Empty />} />
    </View>
  );
};

export default Home;

const Empty = () => {
  return (
    <View style={styles.emptyContainer}>
      <Image
        source={require('../../assets/images/task-empty.png')}
        style={{width: 227, height: 227, padding: 8}}
        resizeMode={'contain'}
      />
      <Text style={styles.emptyTitle}>What do you want to do today?</Text>
      <Text style={styles.emptySubtitle}>Tap + to add your tasks</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 64,
  },
  emptyTitle: {
    color: Colors.white,
    fontFamily: Fonts.LatoRegular,
    fontSize: 20,
  },
  emptySubtitle: {
    color: Colors.white,
    fontFamily: Fonts.LatoRegular,
    fontSize: 16,
    marginTop: 10,
  },
});
