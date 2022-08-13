
import './App.css';
import Login from './components/Login';
import { BrowserRouter, Route,Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <div className='app'>
   <BrowserRouter>
      <Routes>
    <Route path='/' element ={<Login/>} />
    <Route path='/todos' element ={<Dashboard/>} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
