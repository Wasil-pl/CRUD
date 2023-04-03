import { Button, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Posts from "../../features/Posts/Posts";

const Home = () => {
  const navigate = useNavigate();

  const handleAddPost  = (e) => {
    e.preventDefault();
    navigate("/post/add")
  };

  return (
    <div>
      <Container className="d-flex justify-content-between align-items-center mb-4">
        <h2 className="mb-4">All posts</h2>
        <Button onClick={handleAddPost} variant="outline-info">Add Post</Button>
      </Container>
      <Posts />
    </div>
  );
};

  export default Home;