import { Container } from 'react-bootstrap';
import AddPostForm from '../../features/AddPostForm/AddPostForm';

const PostAdd = () => {
  return (
    <Container>
      <h2>Add Post</h2>
      <AddPostForm />
    </Container>
  );
};

export default PostAdd;
