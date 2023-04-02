import { useState } from "react";
import { Button, Container, Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useParams } from "react-router-dom";
import { deletePost, getPostById } from "../../../redux/postsRedux";

const SinglePost = () => {

  const dispatch = useDispatch();
  const { id } = useParams();
  const postData = useSelector(state => getPostById(state, id));

  // modal state
  const [showModal, setShowModal] = useState(false);

  const handleCloseModal = () => setShowModal(false);
  const handleShowModal = () => setShowModal(true);

  const handleDeletePost  = (e) => {
    e.preventDefault();
    dispatch(deletePost(id));
    handleCloseModal();
  };


  if(!postData) return <Navigate to="/" />
    return (
      <div>
        <Container className="d-flex justify-content-between align-items-center mb-4">
          <h2>{postData.title}</h2>
          <div>
            <Button href="/post/edit" variant="outline-info" className="me-2">Edit Post</Button>
            <Button onClick={handleShowModal} variant="outline-danger">Delete Post</Button>
          </div>
        </Container>
        <p>Author: {postData.author}</p>
        <p>{postData.content}</p>

        {/* Modal dialog */}
        <Modal show={showModal} onHide={handleCloseModal}>
          <Modal.Header closeButton>
            <Modal.Title>Are you sure?</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>This operation will completely remove this post from the app</p>
            <p>Are you sure you want to do that?</p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseModal}>
              Cancel
            </Button>
            <Button variant="danger" onClick={handleDeletePost}>
              Delete Post
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
};

  export default SinglePost;