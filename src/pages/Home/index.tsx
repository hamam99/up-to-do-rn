import React from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  ImageProps,
  ImageSourcePropType,
} from 'react-native';
import {HeaderWithProfile} from '../../components';
import {CategoryData, HomeData} from '../../data';
import GlobalStyles from '../../styles';
import {Colors, Fonts} from '../../utils';
import _ from 'lodash';
import moment from 'moment';

const Home = () => {
  const today = moment();

  return (
    <View style={[GlobalStyles.container]}>
      <HeaderWithProfile title="Home" />
      <View>
        <FlatList
          data={HomeData.ListTask}
          ListEmptyComponent={<Empty />}
          renderItem={({item, index, separators}) => <Items {...item} />}
          ItemSeparatorComponent={<Divider />}
        />
      </View>
    </View>
  );
};

export default Home;

const Items = ({
  title,
  description,
  dateTime,
  taskPriority,
  category,
  status,
}) => {
  const categoryData = _.find(CategoryData.listCategory, {
    name: category,
  });

  return (
    <View style={styles.listContainer}>
      <Circle />
      <View style={{flexDirection: 'column', flex: 1}}>
        <Title title={title} />
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            flex: 1,
          }}>
          <View style={{flex: 1}}>
            <DateTask date={dateTime} />
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <FlagCategory {...categoryData} />
            <PriorityCategory taskPriority={taskPriority} />
          </View>
        </View>
      </View>
    </View>
  );
};

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

const Divider = () => {
  return <View style={{height: 16, width: '100%'}} />;
};

const Title = ({title}: {title: string}) => {
  return (
    <Text style={styles.title} numberOfLines={2} ellipsizeMode={'tail'}>
      {title}
    </Text>
  );
};

const DateTask = ({dateTime}: {dateTime: string}) => {
  return (
    <Text style={styles.dateText}>
      Today At {moment(dateTime).format('h:mm')}
    </Text>
  );
};

const FlagCategory = ({
  icon,
  label,
  color,
}: {
  icon: ImageSourcePropType;
  label: string;
  color: string;
}) => {
  return (
    <View style={[styles.flagContainer, {backgroundColor: color}]}>
      <Image source={icon} style={styles.priorityIcon} />
      <Text style={styles.priorityText}>{label}</Text>
    </View>
  );
};

const PriorityCategory = ({taskPriority}: {taskPriority: string}) => {
  return (
    <View style={styles.priorityContainer}>
      <Image
        source={require('../../assets/icons/flag.png')}
        style={styles.priorityIcon}
      />
      <Text style={styles.priorityText}>{taskPriority}</Text>
    </View>
  );
};

const Circle = () => {
  return <View style={styles.circle} />;
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
  circle: {
    borderRadius: 8,
    width: 16,
    height: 16,
    borderWidth: 1,
    borderColor: 'white',
    marginRight: 12,
  },
  listContainer: {
    backgroundColor: Colors.black2,
    minHeight: 72,
    borderRadius: 4,
    alignItems: 'center',
    padding: 8,
    flexDirection: 'row',
  },
  title: {
    color: Colors.white,
    fontFamily: Fonts.LatoRegular,
    fontSize: 16,
    flex: 1,
  },
  dateText: {
    color: Colors.gray2,
    fontFamily: Fonts.LatoRegular,
    fontSize: 14,
  },
  flagContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 6,
    marginRight: 12,
    height: 29,
    padding: 8,
  },
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
