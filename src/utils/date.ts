import moment from 'moment';

export const formatDate = (timestamp: number) =>
  moment.unix(timestamp).format('MMM D, yyyy hh:mm a');
