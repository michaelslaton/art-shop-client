import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from './Layout/Navbar/Navbar';
import Layout from './Layout/Layout';
import Error404 from './Layout/utils/error404/Error404';

const App: React.FC = () => {
  return (
    <div>
      <Navbar/>
      <Router>
        <Routes>
          <Route path="/" element={<Layout/>}/>
          <Route path="*" element={<Error404/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;