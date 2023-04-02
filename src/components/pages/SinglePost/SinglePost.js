import { useSelector } from "react-redux";
import { Navigate, useParams } from "react-router-dom";
import { getPostById } from "../../../redux/postsRedux";

const SinglePost = () => {

  const { id } = useParams();
  const postData = useSelector(state => getPostById(state, id));

  if(!postData) return <Navigate to="/" />
    return (
      <div>
        <h2>{postData.title}</h2>
        <p>Author: {postData.author}</p>
        <p>{postData.content}</p>
      </div>
    );
};

  export default SinglePost;