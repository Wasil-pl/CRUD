import { useState } from 'react';
import { Button, Col, Form } from 'react-bootstrap';
import { isValidDate } from '../../../utils/isValidDate';
import { DateError, Errors, InvalidDateFormatError, MainContentError } from '../Errors/Errors';
import ReactQuill from 'react-quill';
import { useForm } from 'react-hook-form';
import 'react-quill/dist/quill.snow.css';
import PropTypes from 'prop-types';

const PostForm = ({ pageTitle, action, actionText, ...props }) => {
  const [title, setTitle] = useState(props.title || '');
  const [author, setAuthor] = useState(props.author || '');
  const [publishedDate, setPublishedDate] = useState(props.publishedDate || '');
  const [publishedDateError, setPublishedDateError] = useState(null);
  const [shortDescription, setShortDescription] = useState(props.shortDescription || '');
  const [content, setContent] = useState(props.content || '');
  const [contentError, setContentError] = useState(false);
  const {
    register,
    handleSubmit: validate,
    formState: { errors },
  } = useForm();

  const handleSubmit = () => {
    setContentError(!content);
    setPublishedDateError(!publishedDate);
    if (content && publishedDate) {
      action({ title, author, publishedDate, shortDescription, content });
    }
  };

  const handlePublishedDateChange = (e) => {
    setPublishedDate(e.target.value);
    setPublishedDateError(isValidDate(e.target.value) ? null : InvalidDateFormatError);
  };

  return (
    <Form onSubmit={validate(handleSubmit)}>
      <Form.Group controlId="title" as={Col} md="4" className="mb-3">
        <Form.Label>Title</Form.Label>
        <Form.Control
          {...register('title', { required: true, minLength: 3 })}
          type="text"
          placeholder="Enter title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <Errors errors={errors.title} minLength={3} title={'Title'} />
      </Form.Group>

      <Form.Group controlId="author" as={Col} md="4" className="mb-3">
        <Form.Label>Author</Form.Label>
        <Form.Control
          {...register('author', { required: true, minLength: 3 })}
          type="text"
          placeholder="Enter author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        <Errors errors={errors.author} minLength={3} title={'Author'} />
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
        {publishedDateError && <DateError publishedDateError={publishedDateError} />}
        <Form.Control.Feedback type="invalid">{publishedDateError}</Form.Control.Feedback>
      </Form.Group>

      <Form.Group controlId="shortDescription" as={Col} md="10" className="mb-3">
        <Form.Label>Short Description</Form.Label>
        <Form.Control
          {...register('shortDescription', { required: true, minLength: 20 })}
          type="text"
          placeholder="Leave a short desciption here..."
          value={shortDescription}
          onChange={(e) => setShortDescription(e.target.value)}
        />
        <Errors errors={errors.shortDescription} minLength={20} title={'Short Description'} />
      </Form.Group>

      <Form.Group controlId="mainContent" as={Col} md="10" className="mb-3">
        <Form.Label>Main Content</Form.Label>
        <ReactQuill
          placeholder="Write something here ..."
          theme="snow"
          value={content}
          onChange={(value) => setContent(value)}
        />
        {contentError && <MainContentError contentError={contentError} />}
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
};

export default PostForm;
