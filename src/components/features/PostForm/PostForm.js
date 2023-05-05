import { useState } from 'react';
import { Button, Col, Form } from 'react-bootstrap';
import { isValidDate } from '../../../utils/isValidDate';
import ReactQuill from 'react-quill';
import { useForm } from 'react-hook-form';
import 'react-quill/dist/quill.snow.css';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { getAllCategories } from '../../../redux/postsRedux';
import { Error, errorMessages } from '../ErrorMessages/ErrorMessages';

const PostForm = ({ pageTitle, action, actionText, ...props }) => {
  const [title, setTitle] = useState(props.title || '');
  const [author, setAuthor] = useState(props.author || '');
  const [publishedDate, setPublishedDate] = useState(props.publishedDate || '');
  const [publishedDateError, setPublishedDateError] = useState(null);
  const [category, setCategory] = useState(props.category || '');
  const [shortDescription, setShortDescription] = useState(props.shortDescription || '');
  const [content, setContent] = useState(props.content || '');
  const [contentError, setContentError] = useState(null);
  const {
    register,
    handleSubmit: validate,
    formState: { errors },
  } = useForm();
  const categories = useSelector(getAllCategories);

  const handleSubmit = () => {
    setContentError(!content);
    setPublishedDateError(!publishedDate);
    if (content && publishedDate) {
      action({ title, author, publishedDate, category, shortDescription, content });
    }
  };

  const handlePublishedDateChange = (e) => {
    setPublishedDate(e.target.value);
    const errorMessage = !e.target.value
      ? errorMessages.required
      : isValidDate(e.target.value)
      ? null
      : errorMessages.dateFormat;
    setPublishedDateError(errorMessage);
  };

  return (
    <Form onSubmit={validate(handleSubmit)}>
      <Form.Group controlId="title" as={Col} md="4" className="mb-3">
        <Form.Label>Title</Form.Label>
        <Form.Control
          {...register('title', {
            required: errorMessages.required,
            minLength: { value: 3, message: errorMessages.minLength(3) },
          })}
          type="text"
          placeholder="Enter title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        {errors.title && <Error>{errors.title.message}</Error>}
      </Form.Group>

      <Form.Group controlId="author" as={Col} md="4" className="mb-3">
        <Form.Label>Author</Form.Label>
        <Form.Control
          {...register('author', {
            required: errorMessages.required,
            minLength: { value: 3, message: errorMessages.minLength(3) },
          })}
          type="text"
          placeholder="Enter author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        {errors.author && <Error>{errors.author.message}</Error>}
      </Form.Group>

      <Form.Group controlId="published" as={Col} md="4" className="mb-3">
        <Form.Label>Published</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter date: dd-mm-rrrr"
          value={publishedDate}
          onChange={handlePublishedDateChange}
          isInvalid={publishedDateError !== null}
        />
        {publishedDateError && <Error>{publishedDateError}</Error>}
      </Form.Group>

      <Form.Group controlId="categories" as={Col} md="4" className="mb-3">
        <Form.Label>categories</Form.Label>
        <Form.Select
          {...register('category', {
            required: errorMessages.selectCategory,
            validate: (value) => value !== 'Choose Option' || errorMessages.selectCategory,
          })}
          onChange={(e) => setCategory(e.target.value)}
          value={category}
        >
          <option>Choose Option</option>
          {categories.map((category) => (
            <option key={category}>{category}</option>
          ))}
        </Form.Select>
        {errors.category && <Error>{errors.category.message}</Error>}
      </Form.Group>

      <Form.Group controlId="shortDescription" as={Col} md="10" className="mb-3">
        <Form.Label>Short Description</Form.Label>
        <Form.Control
          {...register('shortDescription', {
            required: errorMessages.required,
            minLength: { value: 20, message: errorMessages.minLength(20) },
          })}
          type="text"
          placeholder="Leave a short desciption here..."
          value={shortDescription}
          onChange={(e) => setShortDescription(e.target.value)}
        />
        {errors.shortDescription && <Error>{errors.shortDescription.message}</Error>}
      </Form.Group>

      <Form.Group controlId="mainContent" as={Col} md="10" className="mb-3">
        <Form.Label>Main Content</Form.Label>
        <ReactQuill
          placeholder="Write something here ..."
          theme="snow"
          value={content}
          onChange={(value) => setContent(value)}
        />
        {contentError && <Error>{errorMessages.enterInput}</Error>}
      </Form.Group>

      <Button variant="primary" type="submit">
        {actionText}
      </Button>
    </Form>
  );
};

PostForm.propTypes = {
  pageTitle: PropTypes.string.isRequired,
  action: PropTypes.func.isRequired,
  actionText: PropTypes.string.isRequired,
  title: PropTypes.string,
  author: PropTypes.string,
  publishedDate: PropTypes.string,
  shortDescription: PropTypes.string,
  content: PropTypes.string,
  category: PropTypes.string,
};

export default PostForm;
