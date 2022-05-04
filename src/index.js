import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import EventDate from './EventDate';
import Description from './Description';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <Router>
      <Routes>
  
      <Route exact path="/" element={<App />} />
      <Route path="/eventdate" element={<EventDate />} />
      <Route path="/description" element={<Description />} />

      </Routes>
      </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
