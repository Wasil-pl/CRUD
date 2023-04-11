import { Col, Container, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { getAllPosts } from '../../../redux/postsRedux';
import PostThumbnail from '../../PostThumbnail/PostThumbnail';

const Posts = () => {
  const posts = useSelector(getAllPosts);

  return (
    <Container>
      <Row xs={1} md={2} lg={3} className="g-4">
        {posts.map((post) => (
          <Col key={post.id} to={'/post/' + post.id}>
            <PostThumbnail
              title={post.title}
              author={post.author}
              publishedDate={post.publishedDate}
              category={post.category}
              shortDescription={post.shortDescription}
              id={post.id}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Posts;
