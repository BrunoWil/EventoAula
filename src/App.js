import React from 'react';
import{BrowserRouter as Router, Route } from 'react-router-dom';
import store from "../src/store";
import {Provider} from "react-redux";


/*PÁGINAS*/

import Login from './view/login/';
import NovoUsuario from './view/usuario-novo/';
import Home from './view/home/';
import Tecnico_aceitos from './view/tecnico_aceitos';
import Tecnico_disponiveis from './view/tecnico_disponiveis';
import mensagem_usuario from './view/mensagem_usuario';
import Tecnico_solicitados from './view/tecnico_solicitados';
import Tecnico_suspensos from './view/tecnico_suspensos';
import Tecnico_arquivados from './view/tecnico_arquivados';


function App() {
  return ( 
    <Provider store={store}>
    <Router>
      <Route exact path= '/home' component={Home}/>
      <Route path='/eventos/:parametro' component={Home} />
      <Route exact path= '/novousuario' component={NovoUsuario}/>
      <Route exact path= '/login' component={Login}/>
      <Route exact path= '/tecnico_aceitos' component={Tecnico_aceitos}/>
      <Route exact path= '/tecnico_disponiveis' component={Tecnico_disponiveis}/>
      <Route exact path= '/mensagem_usuarios' component={mensagem_usuario}/>
      <Route exact path= '/tecnico_solicitados' component={Tecnico_solicitados}/>
      <Route exact path= '/tecnico_arquivados' component={Tecnico_arquivados}/>
      <Route exact path= '/tecnico_suspensos' component={Tecnico_suspensos}/>
    </Router>
    </Provider>
  );
}

export default App;
