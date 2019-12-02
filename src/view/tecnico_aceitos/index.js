import React,{useState,useEffect} from 'react';
import './tecnico_aceitos.css';
import Navbar from '../../components/navbar'
import { useSelector } from 'react-redux';
import Barra_de_status_de_mensagem from '../../components/barra_de_status_de_mensagem'
import Mensagem_estrutura from '../../components/mensagem_estrutura'
import Barra_de_status_gerais from '../../components/barra_de_status_gerais'
import firebase from '../../config/firebase';

function Tecnico_aceitos(){


  const setTitulo ="Ajuda"
  const setNivel ="urgente"
  const setProtocolo ="000111"
  const setSetor ="Adm"
  const setData ="20/12/2019"
  const setEmail ="bruno@gmail.com"
  const setStatus ="resolvendo"
  const setId_tecnico="bruno@gmail.com"

//   var arquivado;

// if (setStatus==="arquivado"){
//   aceitos=[<><div className='table text-center'>
//         <Mensagem_estrutura titulo={setTitulo} nivel={setNivel} protocolo={setProtocolo} setor={setSetor} data={setData} email={setEmail} status={setStatus} id_tecnico={setId_tecnico}/>
//     </div></>]
// }status={setStatus}

const mensagem_estrutura=<Mensagem_estrutura titulo={setTitulo} nivel={setNivel} protocolo={setProtocolo} setor={setSetor} data={setData} email={setEmail} status={setStatus} id_tecnico={setId_tecnico}/>
    return(
      <>
      <Navbar/>
      <Barra_de_status_gerais/>
      <Barra_de_status_de_mensagem />
      
            <div>
                {setStatus === 'pendente' && mensagem_estrutura}
            </div>

            <div>      
                {setStatus === 'resolvendo' && mensagem_estrutura}
            </div>

            <div>
                {setStatus === 'resolvido' && mensagem_estrutura}
            </div>
      
      </>
        );

}

export default Tecnico_aceitos;