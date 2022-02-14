import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';
import './index.scss';
import Main from './pages/Main';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import About from './pages/About';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Main />} />
      <Route path='portfolio' element={<Portfolio />} />
      <Route path='contact' element={<Contact />} />
      <Route path='about' element={<About />} />
    </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
