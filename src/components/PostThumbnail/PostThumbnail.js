import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import SinglePost from '../pages/SinglePost/SinglePost';
import { Button } from 'react-bootstrap';

const PostThumbnail = ({ title, author, publishedDate, category, shortDescription, id }) => {
  return (
    <div className="p-3 border rounded">
      <h3>{title}</h3>
      <p>
        <span className="fw-bold">Author: </span>
        {author}
      </p>
      <p>
        <span className="fw-bold">Published: </span>
        {publishedDate}
      </p>
      <p>
        <span className="fw-bold">Category: </span>
        {category}
      </p>
      <p>{shortDescription}</p>
      <Link to={`/post/${id}`} element={<SinglePost />}>
        <Button variant="primary">Read more</Button>
      </Link>
    </div>
  );
};

PostThumbnail.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  publishedDate: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  shortDescription: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default PostThumbnail;
