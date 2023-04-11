import { Container } from 'react-bootstrap';
import { Route, Routes } from 'react-router-dom';
import Home from './components/pages/Home/Home';
import NoMatch from './components/pages/NoMatch/NoMatch';
import PostAdd from './components/pages/PostAdd/PostAdd';
import PostEdit from './components/pages/PostEdit/PostEdit';
import SinglePost from './components/pages/SinglePost/SinglePost';
import Header from './components/views/Header/Header';
import Footer from './components/views/Footer/Footer';
import About from './components/pages/About/About';
import Categories from './components/pages/Categories/Categories';
import SelectedCategory from './components/pages/SelectedCategory/SelectedCategory';

function App() {
  return (
    <Container>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/post/add" element={<PostAdd />} />
        <Route path="/post/edit/:id" element={<PostEdit />} />
        <Route path="/post/:id" element={<SinglePost />} />
        <Route path="/about" element={<About />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/categories/:category" element={<SelectedCategory />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
      <Footer />
    </Container>
  );
}

export default App;
