import { Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home/Home";
import NoMatch from "./components/pages/NoMatch/NoMatch";
import PostAdd from "./components/pages/PostAdd/PostAdd";
import PostEdit from "./components/pages/PostEdit/PostEdit";
import PostView from "./components/pages/PostView/PostView";

function App() {
  return (
    <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/post-add" element={<PostAdd />} />
          <Route path="/post-edit" element={<PostEdit />} />
          <Route path="/post-view" element={<PostView />} />
          <Route path="*" element={<NoMatch />} />
        </Routes>
    </div>
  );
}

export default App;
