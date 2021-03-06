import React from 'react';
import{BrowserRouter as Router, Route } from 'react-router-dom';
import store from "../src/store";
import {Provider} from "react-redux";


/*PÁGINAS*/

import Login from './view/login/';
import NovoUsuario from './view/usuario-novo/';
import Home from './view/home/';



function App() {
  return ( 
    <Provider store={store}>
    <Router>
      <Route exact path= '/' component={Home}/>
      <Route path='/eventos/:parametro' component={Home} />
      <Route exact path= '/novousuario' component={NovoUsuario}/>
      <Route exact path= '/login' component={Login}/>
    </Router>
    </Provider>
  );
}

export default App;
