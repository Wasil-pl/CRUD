import { Container, Table } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { getAllCategories } from '../../../redux/postsRedux';
import { Link } from 'react-router-dom';

const Categories = () => {
  const categories = useSelector(getAllCategories);

  return (
    <Container>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Category</th>
          </tr>
        </thead>
        <tbody>
          {categories.map((category) => (
            <tr key={category}>
              <td>
                <Link key={category} to={`/categories/${category}`}>
                  {category}
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default Categories;
