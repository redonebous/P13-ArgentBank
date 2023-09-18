import './App.css';
import { Routes, Route } from 'react-router-dom';
import Index from './pages/Index';
import SignIn from './pages/SignIn';
import User from './pages/User';
import Navigation from './components/Navigation/Navigation';
import Footer from './components/Footer/Footer';
import { useDispatch, useSelector } from 'react-redux';
import { getUser, relogUser } from './actions/user.action';


function App() {

  const dispatch = useDispatch()
  const token = localStorage.getItem('tokenAccess')

  if (token) {
    dispatch(relogUser(token))
  }

  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path='/' element={<Index />} />
        <Route path='/signin' element={<SignIn />} />
        <Route path='/user' element={<User />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
