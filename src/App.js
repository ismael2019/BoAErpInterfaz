import React from 'react';

//llamamos los componentes que nos creamos
import Login from "./components/Login";
import Inicio from "./components/Inicio";

//Importamos la libreria de rutas para el proyecto
import {BrowserRouter, Route, Link} from "react-router-dom";



function App() {
  return (
    <div>
      <BrowserRouter>

                <switch>
                    <Route  exact path="/Index" component={Inicio}/>
                    <Route  path="/Login" component={Login}/>
                </switch>

            </BrowserRouter>
    </div>
  );
}

export default App;





// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
//
// export default App;
