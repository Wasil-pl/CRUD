import { Container, Row, Col } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getPostsByCategory } from '../../../redux/postsRedux';
import PostThumbnail from '../../PostThumbnail/PostThumbnail';

const SelectedCategory = () => {
  const { category } = useParams();
  const posts = useSelector((state) => getPostsByCategory(state, category));

  return (
    <div>
      <Container className="d-flex justify-content-between align-items-center mb-4">
        <h2>Category: {category} </h2>
      </Container>
      {posts.length ? (
        <Container>
          <Row xs={1} md={2} lg={3} className="g-4">
            {posts.map((post) => (
              <Col key={post.id}>
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
      ) : (
        <Container>
          <p>No posts in this category</p>
        </Container>
      )}
    </div>
  );
};

export default SelectedCategory;
