import './Style.css';
import Home from './components/Home';
import Create from './components/Create';
import Event from './components/Event';

import {BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <Home /> }/>
          <Route path="/create" element={ <Create /> }/>
          <Route path="/event" element={ <Event /> } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
