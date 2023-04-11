import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getPostById, editPost } from '../../../redux/postsRedux';
import PostForm from '../PostForm/PostForm';

const EditPostForm = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const post = useSelector((state) => getPostById(state, id));

  const handleSubmit = (post) => {
    dispatch(editPost({ ...post, id }));
    navigate('/');
  };

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <PostForm
      pageTitle="Edit Post"
      action={handleSubmit}
      actionText="Update Post"
      title={post.title}
      author={post.author}
      publishedDate={post.publishedDate}
      category={post.category}
      shortDescription={post.shortDescription}
      content={post.content}
    />
  );
};

export default EditPostForm;
