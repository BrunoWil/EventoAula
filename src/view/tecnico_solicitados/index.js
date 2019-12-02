import React,{useState} from 'react';
import './tecnico_solicitados.css';
import Navbar from '../../components/navbar';
import Barra_de_status_gerais from '../../components/barra_de_status_gerais';
import { useSelector } from 'react-redux';
import Mensagem_estrutura from '../../components/mensagem_estrutura';



function Tecnico_solicitados(){

const setTitulo ="Ajuda"
const setNivel ="urgente"
const setProtocolo ="000111"
const setSetor ="Adm"
const setData ="20/12/2019"
const setEmail ="bruno@gmail.com"
const setStatus ="solicitado"
const setId_tecnico="bruno@gmail.com"

var solicitado;

if (setStatus==="solicitado"){
  solicitado=[<div className='table text-center'>
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
      <th scope="col">Solicitações</th>
      <th scope="col"></th>
    </tr>
  </thead>
</table>
    {solicitado}
</div>
</>
)

}
export default Tecnico_solicitados;