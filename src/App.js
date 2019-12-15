import React from 'react';
import{BrowserRouter as Router, Route } from 'react-router-dom';
import store from "../src/store";
import {Provider} from "react-redux";


/*PÁGINAS*/
import TelaLogin from './view/login/index'

/*PÁGINAS TECNICO*/
import Home from './view/inicio_tecnicos/';
import Tecnico_aceitos from './view/tecnico_aceitos';
import Tecnico_disponiveis from './view/tecnico_disponiveis';
import Tecnico_suspensos from './view/tecnico_suspensos';
import Tecnico_arquivados from './view/tecnico_arquivados';
import Usuarios_cadastrados from './view/usuarios_cadastrados_tecnico';


/*PÁGINAS USUARIO*/
import Inicio from './view/inicio_usuario';
import Mensagem_usuario from './view/mensagem_usuario';
import Perfil from './view/perfil';
import Chamado from './view/novo_chamado_usuario';


function App() {
  return ( 
    <Provider store={store}>
    <Router>
      {/* //Abertos// */}
      <Route exact path= '/' component={TelaLogin}/>
      <Route exact path= '/perfil' component={Perfil}/>


      {/* //Cliente// */}
      <Route exact path= '/inicio' component={Inicio}/>
      <Route exact path= '/novochamando' component={Chamado}/>
      <Route exact path= '/mesnagem' component={Mensagem_usuario}/>

      {/* //Tecnico// */}
      <Route exact path= '/inicio_tecnico' component={Home}/>
      {/* <Route path='/eventos/:parametro' component={Home} /> */}
      <Route exact path= '/tecnico_aceitos' component={Tecnico_aceitos}/>
      <Route exact path= '/tecnico_disponiveis' component={Tecnico_disponiveis}/>
      <Route exact path= '/tecnico_arquivados' component={Tecnico_arquivados}/>
      <Route exact path= '/tecnico_suspensos' component={Tecnico_suspensos}/>
      <Route exact path= '/usuarios_cadastrados' component={Usuarios_cadastrados}/>

    </Router>
    
    </Provider>
  );
}

export default App;
