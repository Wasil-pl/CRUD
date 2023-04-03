import { Button, Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getAllPosts } from "../../../redux/postsRedux";
import SinglePost from "../../pages/SinglePost/SinglePost";

const Posts = () => {
  const posts = useSelector(getAllPosts);

  return (
    <Container>
      <Row xs={1} md={2} lg={3} className="g-4">
      {posts.map(post => (
        <Col key={post.id} to={'/post/' + post.id}>
          <div className="p-3 border rounded">
            <h3>{post.title}</h3>
            <p><span className="fw-bold">Author: </span>{post.author}</p>
            <p><span className="fw-bold">Published: </span>{post.publishedDate}</p>
            <p>{post.shortDescription}</p>
            <Link to={`/post/${post.id}`} element={<SinglePost />}>
              <Button variant="primary">Read more</Button>
            </Link>
          </div>
        </Col>
      ))}
      </Row>
  </Container>
  );
};

  export default Posts;