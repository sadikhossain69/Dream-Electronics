import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Pages/Shared/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import Footer from './Pages/Shared/Footer/Footer';
import PageNotFound from './Pages/PageNotFound/PageNotFound';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import { Toaster } from 'react-hot-toast';
import ManageItems from './Pages/ManageItems/ManageItems';
import Blog from './Pages/Blog/Blog';

function App() {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/register' element={<Register/>} />
        <Route path='/manageitems' element={<ManageItems/>} />
        <Route path='/blog' element={<Blog/>} />
        <Route path='*' element={<PageNotFound/>} />
      </Routes>
      <Footer/>
      <Toaster />
    </div>
  );
}

export default App;
