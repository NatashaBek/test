import moment from 'moment';
import { dateTimeFormat } from './statics';

export const dateTimeFormatOrHyphen = (dateTimeValue?: string) =>
  dateTimeValue ? moment(dateTimeValue, 'YYYY/MM/DD hh:mm:ss').format(dateTimeFormat) : ' - ';

export const truncatedString = (stringValue: string, length: number) =>
  stringValue.substring(0, length);

//   export const dataOrHyphen = (value?: string | number) => value || ' - ';