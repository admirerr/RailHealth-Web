// import './App.css';
// import HomePage from './Components/HomePage';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import TemporaryDrawer from './Components/Slider';
// import Consultancy from './Components/Consultancy';

// function App() {
//   return (
//     <div className="App">
      
//       <TemporaryDrawer/>
//       <HomePage />

//       < Consultancy />
//     </div>
//   );
// }

// export default App;
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './Components/HomePage';
import 'bootstrap/dist/css/bootstrap.min.css';
import TemporaryDrawer from './Components/Slider';
import Consultancy from './Components/Consultancy';
import SearchBar from './Components/SearchMedicine';
import SearchMedicine from './Components/SearchMedicine';

function App() {
  return (
    <Router>
      <div className="App">
      <TemporaryDrawer/>

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/consultancy" element={<Consultancy />} />
          <Route path="/medicine" element={<SearchMedicine/>}/>
        </Routes>
      </div>
    </Router>
    
  );
}

export default App;


