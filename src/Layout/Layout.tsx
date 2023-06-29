import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './navbar/Navbar';
import HomePage from './home-page/HomePage';
import Error404 from './utils/error404/Error404';
import './layout.css';

const Layout: React.FC = () => {

  return (
    <div className='main-screen'>
      <Navbar/>
      <Router>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='*' element={<Error404/>} />
        </Routes>
      </Router>
    </div>
  )
}

export default Layout;