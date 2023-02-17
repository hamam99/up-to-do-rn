import moment from 'moment';

const getTimestamp = () => {
  return moment().unix();
};

const format = ({
  date,
  pattern = 'MMMM Do YYYY, HH:mm',
}: {
  date: number;
  pattern: string;
}) => {
  return moment.unix(date).format(pattern);
};

const getFormattedDateTime = ({unixTimeStamp = getTimestamp()}) => {
  const ts = moment.unix(unixTimeStamp); // any unix timestamp. This is 2018-03-01

  const today = moment(); // further test data
  const yesterday = moment().subtract(1, 'days'); // further test data
  let prefix = format({date: unixTimeStamp, pattern: 'MMM DD YYYY'}) + ',';

  if (ts.isSame(today, 'day')) {
    prefix = 'Today';
  } else if (ts.isSameOrBefore(yesterday, 'day')) {
    prefix = 'Yesterday';
  }

  return prefix + ' at ' + format({date: unixTimeStamp, pattern: 'hh:mm A'});
};
const DateTimeHelper = {getTimestamp, getFormattedDateTime};

export default DateTimeHelper;
