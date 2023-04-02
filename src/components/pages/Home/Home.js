import { Button, Container } from "react-bootstrap";
import Posts from "../../features/PostsRender/PostsRender";

const Home = () => {

  return (
    <div>
      <Container className="d-flex justify-content-between align-items-center mb-4">
        <h2 className="mb-4">All posts</h2>
        <Button href="/post/add" variant="outline-info">Add Post</Button>
      </Container>
      <Posts />
    </div>
  );
};

  export default Home;