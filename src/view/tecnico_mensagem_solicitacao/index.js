import React,{useState,useEffect} from 'react';
import './tecnico_mensagem_solicitacao.css';
import {Link, Redirect} from 'react-router-dom';
import Navbar from '../../components/navbar'
import Barra_de_status_gerais from '../../components/barra_de_status_gerais'
import { useSelector } from 'react-redux';

function Tecnico_mensagem_solicitacao(){
  // const [eventos,]

    return(
      <>
      <Navbar/>
      <Barra_de_status_gerais/>
      
      
      </>
        );

}

export default Tecnico_mensagem_solicitacao;