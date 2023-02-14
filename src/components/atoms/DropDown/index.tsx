import React, {useState, useEffect} from 'react';
import DropDownPicker from 'react-native-dropdown-picker';

type IProps = {
  defaultValue: any;
  getCurrentValue: (value: string) => void;
  style: any;
};
const DropDown = ({defaultValue = [], getCurrentValue, style = {}}: IProps) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(defaultValue);
  const [items, setItems] = useState([
    {label: 'All', value: 'all'},
    {label: 'Today', value: 'today'},
    {label: 'Inprogress', value: 'inprogress'},
    {label: 'Completed', value: 'completed'},
  ]);

  useEffect(() => {
    getCurrentValue(value);
  }, [value]);

  return (
    <DropDownPicker
      style={{...style}}
      containerStyle={{zIndex: 10}}
      open={open}
      value={value}
      items={items}
      setOpen={setOpen}
      setValue={setValue}
      setItems={setItems}
      theme="DARK"
    />
  );
};

export default DropDown;
