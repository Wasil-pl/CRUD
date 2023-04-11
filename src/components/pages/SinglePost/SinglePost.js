import { useState } from 'react';
import { Button, Container } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { deletePost, getPostById } from '../../../redux/postsRedux';
import DeletePostModal from '../../features/DeletePostModal/DeletePostModal';

const SinglePost = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const postData = useSelector((state) => getPostById(state, id));

  const [showDeletePostModal, setShowDeletePostModal] = useState(false);

  const handleCloseModal = () => setShowDeletePostModal(false);
  const handleShowModal = () => setShowDeletePostModal(true);

  const onConfirmDeletePost = (e) => {
    e.preventDefault();
    dispatch(deletePost(id));
    handleCloseModal();
  };

  const handleEditPost = () => {
    navigate(`/post/edit/${postData.id}`);
  };

  if (!postData) return <Navigate to="/" />;
  return (
    <div>
      <Container className="d-flex justify-content-between align-items-center mb-4">
        <h2>{postData.title}</h2>
        <div>
          <Button onClick={handleEditPost} variant="outline-info" className="me-2">
            Edit Post
          </Button>
          <Button onClick={handleShowModal} variant="outline-danger">
            Delete Post
          </Button>
        </div>
      </Container>
      <p>
        <span className="fw-bold">Author: </span>
        {postData.author}
      </p>
      <p>
        <span className="fw-bold">Published Date: </span>
        {postData.publishedDate}
      </p>
      <p>
        <span className="fw-bold">Category: </span>
        {postData.category}
      </p>
      <p dangerouslySetInnerHTML={{ __html: postData.content }} />
      <DeletePostModal show={showDeletePostModal} onClose={handleCloseModal} handleDeletePost={onConfirmDeletePost} />
    </div>
  );
};

export default SinglePost;
