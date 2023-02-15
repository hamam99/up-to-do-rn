import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {Colors, Fonts} from '../../../utils';
const PriorityCategory = ({taskPriority}: {taskPriority: number}) => {
  return (
    <View style={styles.priorityContainer}>
      <Image
        source={require('../../../assets/icons/flag.png')}
        style={styles.priorityIcon}
      />
      <Text style={styles.priorityText}>{taskPriority}</Text>
    </View>
  );
};

export default PriorityCategory;

const styles = StyleSheet.create({
  priorityContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 8,
    borderWidth: 1,
    borderColor: Colors.purple2,
    borderRadius: 4,
    height: 29,
  },
  priorityIcon: {
    width: 14,
    height: 14,
    marginRight: 5,
  },
  priorityText: {
    fontFamily: Fonts.LatoRegular,
    fontSize: 12,
    color: Colors.white,
  },
});
