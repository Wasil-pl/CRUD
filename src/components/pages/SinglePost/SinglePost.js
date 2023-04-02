import { Button, Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useParams } from "react-router-dom";
import { deletePost, getPostById } from "../../../redux/postsRedux";

const SinglePost = () => {

  const dispatch = useDispatch();

  const handleDelete  = () => {
    dispatch(deletePost(id));
  };

  const { id } = useParams();
  const postData = useSelector(state => getPostById(state, id));

  if(!postData) return <Navigate to="/" />
    return (
      <div>
        <Container className="d-flex justify-content-between align-items-center mb-4">
          <h2>{postData.title}</h2>
          <div>
            <Button href="/post/edit" variant="outline-info" className="me-2">Edit Post</Button>
            <Button onClick={handleDelete} variant="outline-danger">Delete Post</Button>
          </div>
        </Container>
        <p>Author: {postData.author}</p>
        <p>{postData.content}</p>
      </div>
    );
};

  export default SinglePost;