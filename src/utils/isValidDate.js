 export const isValidDate = (date) => {
  const pattern = /^\d{2}-\d{2}-\d{4}$/;
  if (!pattern.test(date)) {
    return false;
  }
  const [day, month, year] = date.split('-');
  const dateObj = new Date(`${year}-${month}-${day}`);
  return dateObj instanceof Date && !isNaN(dateObj);
};