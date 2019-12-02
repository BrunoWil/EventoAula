import React,{useState,useEffect} from 'react';
import './home.css';
import {Link, Redirect} from 'react-router-dom';
import Navbar from '../../components/navbar/'
import Barra_de_status_gerais from '../../components/barra_de_status_gerais/'
import { useSelector } from 'react-redux';
import firebase from "firebase"

function Home(){

  // var setTitulo
  // var setNivel
  // var setProtocolo
  // var setSetor
  // var setData
  // var setEmail
  // var setStatus
  // var setId_tecnico
  // var mensagemList
  
  // firebase.database().ref('mensagem').on('value',function (snapshot){
    
  //   mensagemList.innerHTML = '';
  //   snapshot.forEach(function(item){
  //     var li = document.createElement('li');
  //     li.appendChild(document.createTextNode(
  //       setTitulo=item.val().titulo,
  //       setNivel=item.val().nivel,
  //       setProtocolo=item.val().protocolo,
  //       setSetor=item.val().setor,
  //       setData=item.val().data,
  //       setEmail=item.val().email,
  //       setId_tecnico=item.val().idtecnico,
  //       setStatus =item.val().status,
 
  //       ));
  //       mensagemList.appendChild(li);

  //   })
  // })
 var categoria;
  categoria="tecnico";

  function Homes(){
    if(categoria==="tecnico"){return(<>
      <Link to='#' className="btn btn-lg btn-block btn-" >Solicitações ao Administrador</Link>
      <Link to='#'  className="btn btn-lg btn-block btn-">Registros Patrimoniais</Link> 
      <Link to='/novousuario' className="btn btn-lg btn-block btn-"> Cadrastros de Usuarios</Link>
      <Link to='/tecnico_disponiveis' className="btn btn-lg btn-block btn-"> Chamados de Usuarios</Link>
    </>
    )
    }
  }

    return(
      <>
      <Navbar/>
      {Homes()}
      </>
        );

}

export default Home;