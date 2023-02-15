import moment from 'moment';

const getTimestamp = () => {
  return moment().format();
};

const format = ({
  date,
  pattern = 'MMMM Do YYYY, h:mm',
}: {
  date: string;
  pattern: string;
}) => {
  return moment(date).format(pattern);
};

const getFormattedDateTime = ({date = getTimestamp()}) => {
  const diff = moment().diff(date, 'days');
  let prefix = 'Today';
  if (diff === 0) {
    prefix = 'Today';
  } else if (diff === -1) {
    prefix = 'Yesterday';
  } else {
    prefix = format({date: date, pattern: 'MMM DD YYYY'}) + ',';
  }

  return prefix + ' at ' + format({date: date, pattern: 'h:mm'});
};
const DateTimeHelper = {getTimestamp, getFormattedDateTime};

export default DateTimeHelper;
