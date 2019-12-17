import dayjs from 'dayjs';

/**
 * @description You can use other date lib of your choice.
 * - important thing is to have an abstraction over it,
 *  we shouldn't pollute all the places in the app by
 *  directly importing the date lib like dayjs/moment.
 *  we should create wrapper function to the date/time
 *  jobs. This helps us replace the date lib if needed.
 *  and also this creates single-source-of-truth
 */

const dateFormat: string = 'dddd, MMMM D';
const timeFormat: string = 'h:mm a';

export const getDisplayDateTime = () => {
  const todaysDate = dayjs();
  const time = todaysDate.format(timeFormat);
  const date = todaysDate.format(dateFormat);
  return {
    date,
    time
  };
};
