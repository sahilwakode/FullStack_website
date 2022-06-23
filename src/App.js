import logo from './logo.svg';
import './App.css';
import React from 'react';
import Header from './Header';
import Home from './Home';
import {BrowserRouter as Routes,Route,Router} from 'react-router-dom';

function App() {
  return (
    <>
    
      <Header/>
   <Home/>
//       <Router>
//         <div className="app">
//           <Routes>
//             <Route path='/checkout'>
//               <Header>
//                 <h1>Checkout Page</h1>
//               </Header>
//             </Route>
//             </Routes>
            
//         </div>
//       </Router>
   {/* <Router>
    <div className="App">
      <Routes>
      <Route path='/'>  
      <Home/>
      <Header/>
      </Route>
     </Routes>
    </div>
    </Router>  */}
      </>
  );
}
export default App;
