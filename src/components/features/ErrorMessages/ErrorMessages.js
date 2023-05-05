import PropTypes from 'prop-types';

export const errorMessages = {
  required: 'This field is required',
  selectCategory: 'Please select an option',
  enterInput: "This input can't be empty",
  dateFormat: 'Invalid date format. Please enter a date in the format dd-mm-yyyy.',
  minLength: (minLength) => `Must be at least ${minLength} characters long`,
};

export const Error = ({ children }) => <small className="d-block form-text text-danger mt-2">{children}</small>;

Error.propTypes = {
  children: PropTypes.node.isRequired,
};
