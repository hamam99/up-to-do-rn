import {View} from 'react-native';
import {Colors} from '../../../utils';

type IProps = {
  isActive: boolean;
};
const Indicator = ({isActive = false}: IProps) => {
  return (
    <View
      style={{
        width: 26,
        height: 4,
        backgroundColor: isActive ? Colors.white1 : Colors.gray1,
        borderRadius: 56,
        marginHorizontal: 8,
      }}
    />
  );
};

export default Indicator;
