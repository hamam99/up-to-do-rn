import {View, StyleSheet} from 'react-native';
import React, {useState, useEffect} from 'react';
import GlobalStyles from '../../styles';
import {ButtonCustom, Header, TextInputCustom} from '../../components';
import {Icon, Text} from '@rneui/themed';
import {Colors, DateTimeHelper, Fonts} from '../../utils';
import {CategoryData} from '../../data';
import {Image} from '@rneui/base';

const AddTask = () => {
  const [title, setTitle] = useState(null);
  const [description, setDescription] = useState(null);
  const [taskTime, setTaskTime] = useState(
    DateTimeHelper.getFormattedDateTime({}),
  );
  const [taskCategory, setTaskCategory] = useState({
    label: CategoryData.listCategory[0].label,
    icon: CategoryData.listCategory[0].icon,
  });

  const [taskPriority, setTaskPriority] = useState('1');

  return (
    <View style={GlobalStyles.container}>
      <Header title="Add Task" />
      <TextInputCustom
        placeholder="Title"
        containerStyle={{width: '100%'}}
        onChangeText={text => setTitle(text)}
      />
      <TextInputCustom
        placeholder="Description"
        containerStyle={{marginTop: -16}}
        onChangeText={text => setDescription(text)}
      />

      <View style={styles.formContainer}>
        <TextWithIcon
          iconName={'stopwatch'}
          iconType={'fontisto'}
          title="Task Time : "
        />
        <ButtonCustom
          title={taskTime}
          buttonStyle={styles.buttonStyle}
          containerStyle={styles.buttonContainer}
          onPress={() => {}}
          titleStyle={styles.buttonTitle}
        />
      </View>

      <View style={styles.formContainer}>
        <TextWithIcon
          iconName={'tag-outline'}
          iconType={'material-community'}
          title="Task Category : "
        />
        <ButtonCustom
          icon={
            <Image source={taskCategory.icon} style={{width: 18, height: 18}} />
          }
          title={taskCategory.label}
          buttonStyle={styles.buttonStyle}
          containerStyle={styles.buttonContainer}
          onPress={() => {}}
          titleStyle={styles.buttonTitle}
        />
      </View>

      <View style={styles.formContainer}>
        <TextWithIcon
          iconName={'flag'}
          iconType={'feather'}
          title="Task Priority : "
        />
        <ButtonCustom
          icon={
            <Image
              source={require('../../assets/icons/flag.png')}
              style={{width: 18, height: 18}}
            />
          }
          title={taskPriority}
          buttonStyle={styles.buttonStyle}
          containerStyle={styles.buttonContainer}
          onPress={() => {}}
          titleStyle={styles.buttonTitle}
        />
      </View>

      <ButtonCustom
        title={'Add Task'}
        containerStyle={{marginTop: 64}}
        onPress={() => {}}
        disabled={true}
      />
    </View>
  );
};

export default AddTask;

const TextWithIcon = ({iconName, iconType, title}) => {
  return (
    <View style={styles.textWithIconContainer}>
      <Icon name={iconName} type={iconType} color={'white'} size={24} />
      <Text style={styles.textWithIconTitle}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textWithIconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textWithIconTitle: {
    color: 'white',
    fontFamily: Fonts.LatoRegular,
    fontSize: 16,
    marginLeft: 8,
  },
  buttonStyle: {
    height: 37,
    backgroundColor: Colors.white4,
  },
  buttonContainer: {borderRadius: 6, borderWidth: 0},
  buttonTitle: {
    fontSize: 12,
  },
  formContainer: {
    height: 37,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
});
