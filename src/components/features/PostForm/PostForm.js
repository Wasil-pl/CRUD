import { useState } from "react";
import { Button, Col, Form } from "react-bootstrap";
import { isValidDate } from "../../../utils/isValidDate";

const PostForm = ({ pageTitle, action, actionText, ...props }) => {

  const [title, setTitle] = useState(props.title || '');
  const [author, setAuthor] = useState(props.author || '');
  const [publishedDate, setpublishedDate] = useState(props.publishedDate || '');
  const [publishedDateError, setPublishedDateError] = useState(null);
  const [shortDescription, setShortDescription] = useState(props.shortDescription || '');
  const [content, setContent] = useState(props.content || '');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isValidDate(publishedDate)) {
      alert('Invalid date format. Please enter a date in the format dd-mm-yyyy.');
      return;
    }
    action({ title, author, publishedDate, shortDescription, content });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="title" as={Col} md="4" className="mb-3">
        <Form.Label>Title</Form.Label>
        <Form.Control type="text" placeholder="Enter title" value={title} onChange={e => setTitle(e.target.value)} />
      </Form.Group>

      <Form.Group controlId="author" as={Col} md="4" className="mb-3">
        <Form.Label>Author</Form.Label>
        <Form.Control type="text" placeholder="Enter author" value={author} onChange={e => setAuthor(e.target.value)} />
      </Form.Group>

      <Form.Group controlId="published" as={Col} md="4" className="mb-3">
        <Form.Label>Published</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter date: dd-mm-rrrr"
          value={publishedDate}
          onChange={(e) => {
            setpublishedDate(e.target.value);
            setPublishedDateError(isValidDate(e.target.value) ? null : 'Invalid date format. Please enter a date in the format dd-mm-yyyy.');
          }}
          isInvalid={publishedDateError !== null}
        />
        <Form.Control.Feedback type="invalid">
          {publishedDateError}
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group controlId="shortDescription" as={Col} md="10" className="mb-3">
        <Form.Label>Short Description</Form.Label>
        <Form.Control type="text" placeholder="Leave a short desciption here..." value={shortDescription} onChange={e => setShortDescription(e.target.value)} />
      </Form.Group>

      <Form.Group controlId="mainContent" as={Col} md="10" className="mb-3">
        <Form.Label>Main Content</Form.Label>
        <Form.Control as="textarea" rows={10} value={content} placeholder="Leave a article here..." onChange={e => setContent(e.target.value)} />
      </Form.Group>

      <Button variant="primary" type="submit">{actionText}</Button>
    </Form>
  )
};

export default PostForm