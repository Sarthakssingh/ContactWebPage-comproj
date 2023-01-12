import './App.css';
import Home from './Home';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import ContactInfo from './ContactInfo';
import Message from './Message';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
    <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
            <a className="navbar-brand">Project</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
                <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">Home</a>
                </li>
            </ul>
            </div>
        </div>
      </nav>
      <Routes>
          <Route path='/' element={<Home/>} ></Route>
          <Route path='/ContactInfo' element={<ContactInfo/>} ></Route>
          <Route path='/message' element={<Message/>} ></Route>
      </Routes>
  </div>
  </BrowserRouter>
  );
}

export default App;
