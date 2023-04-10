import PropTypes from 'prop-types';

export const Errors = ({ errors, minLength, title }) => {
  return (
    errors && (
      <>
        {errors.type === 'required' && (
          <small className="d-block form-text text-danger mt-2">This field is required</small>
        )}
        {errors.type === 'minLength' && (
          <small className="d-block form-text text-danger mt-2">
            {title} must be at least {minLength} characters long
          </small>
        )}
      </>
    )
  );
};

const invalidEmptyInput = "This input can't be empty";

export const InvalidDateFormatError = 'Invalid date format. Please enter a date in the format dd-mm-yyyy.';

export const DateError = () => {
  return (
    <>
      <small className="d-block form-text text-danger mt-2">{invalidEmptyInput}</small>
    </>
  );
};

export const MainContentError = () => {
  return (
    <>
      <small className="d-block form-text text-danger mt-2">{invalidEmptyInput}</small>
    </>
  );
};

Errors.propTypes = {
  errors: PropTypes.object,
  minLength: PropTypes.number,
  title: PropTypes.string,
};
