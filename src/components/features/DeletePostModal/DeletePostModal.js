import { Button, Modal } from "react-bootstrap";

const DeletePostModal = ({ showDeletePostModal, handleCloseModal, handleDeletePost }) => {
  return (
    <Modal show={showDeletePostModal} onHide={handleCloseModal}>
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
  );
};

export default DeletePostModal;