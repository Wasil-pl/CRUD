import PropTypes from 'prop-types';

export const isValidDate = (date) => {
  const pattern = /^\d{2}-\d{2}-\d{4}$/;
  if (!pattern.test(date)) {
    return false;
  }
  const [day, month, year] = date.split('-');
  const maxDaysInMonth = new Date(year, month, 0).getDate();
  const dateObj = new Date(`${year}-${month}-${day}`);
  return dateObj instanceof Date && !isNaN(dateObj) && day <= maxDaysInMonth;
};

isValidDate.propTypes = {
  date: PropTypes.string.isRequired,
};
