import React from 'react';
import DatePicker from 'react-native-date-picker';

type IProps = {
  open: boolean;
  date: Date;
  onConfirm: (date: any) => void;
  onCancel: () => void;
};
const DatePickerWrapper = ({
  open = false,
  date,
  onConfirm,
  onCancel,
}: IProps) => {
  return (
    <DatePicker
      open={open}
      date={date}
      onConfirm={onConfirm}
      onCancel={onCancel}
      is24hourSource={'locale'}
      mode={'datetime'}
      modal={true}
    />
  );
};

export default DatePickerWrapper;
