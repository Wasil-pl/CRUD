const Errors = ({ errors, minLength, title }) => {
  return (
    errors && (
      <>
        {errors.type === 'required' && (
          <small className="d-block form-text text-danger mt-2">This field is required</small>
        )}
        {errors.type === 'minLength' && (
          <small className="d-block form-text text-danger mt-2">{`${title} must be at least ${minLength} characters long`}</small>
        )}
      </>
    )
  );
};

export default Errors;
