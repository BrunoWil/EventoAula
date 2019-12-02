import React,{useState} from 'react';
import './tecnico_disponiveis.css';
import Navbar from '../../components/navbar';
import Barra_de_status_gerais from '../../components/barra_de_status_gerais';
import { useSelector } from 'react-redux';
import Mensagem_estrutura from '../../components/mensagem_estrutura';
// import {firebase} from '../../config/firebase';
import firebase from "firebase";



function Tecnico_disponiveis(){

const setTitulo ="Ajuda"
const setNivel ="urgente"
const setProtocolo ="000111"
const setSetor ="Adm"
const setData ="20/12/2019"
const setEmail ="bruno@gmail.com"
const setStatus ="disponivel"
const setId_tecnico="bruno@gmail.com"
// const mensagemList


// var ref = firebase.database().ref('/mensagem');
// ref.on('value', function(snapshot) {
//   console.log(snapshot.val());     });
//   mensagemList.innerHTML = '';
//   snapshot.forEach(function(item){
//     var li = document.createElement('li');
//     li.appendChild(document.createTextNode(
//       item.val().titulo,
//       item.val().nivel,
//       item.val().protocolo,
//       item.val().setor,
//       item.val().data,
//       item.val().email,
//       item.val().idtecnico,
//       item.val().status,

//       ));
//       mensagemList.appendChild(li);

//   });
// });

var disponivel;

if (setStatus==="disponivel"){

  disponivel=[<div className='table text-center'>
        <Mensagem_estrutura titulo={setTitulo} nivel={setNivel} protocolo={setProtocolo} setor={setSetor} data={setData} email={setEmail} status={setStatus} id_tecnico={setId_tecnico}/>
    </div>]
}

return(
    <>
<Navbar/>
<Barra_de_status_gerais/>
<div className="text-center">
<table class="table table-borderless btn-tabela table-white">
  <thead>
    <tr>
      <th scope="col"></th>
      <th scope="col">Disponivel</th>
      <th scope="col"></th>
    </tr>
  </thead>
</table>
   {disponivel}
</div>
</>
)

}
export default Tecnico_disponiveis;