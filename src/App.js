import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/ Home';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFile } from '@fortawesome/free-solid-svg-icons';
import { Helmet } from 'react-helmet';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          {/* Puedes agregar más rutas según sea necesario */}
        </Routes>
        <Helmet>
        <title>Notepad App</title>
        <link rel="icon" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath d='M9 0v2H5v4H3v16h18V6h-2V2h-4V0H9zm7 4h-4v2h4V4zM7 2h4v2H7V2zm10 18H5V8h14v12z'/%3E%3C/svg%3E" />
      </Helmet>
      </div>
    </Router>
  );
}

export default App;
