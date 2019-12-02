import React from 'react';
import './mensagem_estrutura.css';
import {Link, Redirect} from 'react-router-dom';
import firebase from '../../config/firebase';
import { useSelector, useDispatch} from 'react-redux';



function Mensagem_estrutura({titulo,nivel,protocolo,data,setor,email,status,id_tecnico}){

    var setNivel;

    if(nivel!==null){
        if (nivel === 'urgente'){setNivel= <p className="row mx-3"><strong>Nivel: </strong><button className=" btn btn-nivel-u btn-center font-weight-bold mb-auto ml-2 mt-1" type="button">{nivel}</button></p>
    }
    
        if (nivel === 'alto'){setNivel=<p className="row mx-3"><strong>Nivel: </strong><button className=" btn btn-nivel-a btn-center font-weight-bold mb-auto ml-2" type="button">{nivel}</button></p> 
        }
    
        if (nivel === 'medio'){setNivel=<p className="row mx-3"><strong>Nivel: </strong><button className=" btn btn-nivel-m btn-center font-weight-bold mb-auto ml-2" type="button">{nivel}</button></p>
        }
    
        if (nivel === 'baixo'){setNivel=<p className="row mx-3"><strong>Nivel: </strong><button className=" btn btn-nivel-b btn-center font-weight-bold mb-auto ml-2 " type="button">{nivel}</button></p> 
        }
                }

    var mensagem_p_tecnico;

    mensagem_p_tecnico=[
                <>
                <div className="row ml-3 mr-2 text-left">
                    <p> <strong>Protocolo: </strong>{protocolo} <br/> <strong>Titulo: </strong> {titulo} </p>
                    {setNiveis}
                </div>
                <div className="row mx-3 mr-2 text-left">
                    <p> <strong>Data: </strong>{data} <br/> <strong>Setor: </strong>{setor}</p>
                <div className="row mx-3 mr-2 text-left">
                    <p> <strong>Email: </strong>{email}</p>
                </div>  
                </div>
                </>
                ]

    var status;
    var setStatus_button1;
    var setStatus_button2;
    var setNiveis;
    var setFormarto;
    var id_tecnico_aceito;
    var setMensagem_p_tecnico;

    
// function id_tecnico_aceito(){
id_tecnico_aceito="bruno@gmail.com"
// }


    if(status!==null){

        if(status==="disponivel"){
            setStatus_button1=<button className="mt-3 mx-3 font-weight-bold btn btn-center btn-suspender" type="button">Suspender</button>
            setStatus_button2=<button onClick={id_tecnico_aceito} className="mt-3 mx-3 font-weight-bold btn btn-center btn-aceitar" type="button">Aceitar</button>
            setNiveis=setNivel
            setFormarto="btn-mensagem mx-5 mt-5 row"
            setMensagem_p_tecnico=mensagem_p_tecnico
            
        }

        if(status==="suspenso"){
            setStatus_button1=<button className="mt-3 mx-3 font-weight-bold btn btn-center btn-disponivel" type="button">Disponibilizar</button>
            setNiveis=setNivel
            setFormarto="btn-mensagem mx-5 mt-5 row"
            setMensagem_p_tecnico=mensagem_p_tecnico
        }

        if(id_tecnico_aceito===id_tecnico){

            if(status==="arquivado"){
                setStatus_button1=<button className="mt-3 mx-3 font-weight-bold btn btn-center btn-arquivado" type="button">Desarquivar</button>
                setNiveis=setNivel
                setFormarto="btn-mensagem mx-5 mt-5 row"
                setMensagem_p_tecnico=mensagem_p_tecnico
            }
            
            if(status==="solicitado"){
                setStatus_button1=<button className="mt-3 mx-3 font-weight-bold btn btn-center btn-solicitados" type="button">Excluir</button>
                setNiveis=setNivel
                setFormarto="btn-mensagem mx-5 mt-5 row"
                setMensagem_p_tecnico=mensagem_p_tecnico
            }

            if(status==="pendente"){
                setStatus_button1=<button className="mt-3 mx-3 font-weight-bold btn btn-center btn-arquivado" type="button">Pendente</button>
                setNiveis=setNivel
                setFormarto="btn btn-mensagem mx-5 mt-5 row"
                setMensagem_p_tecnico=mensagem_p_tecnico
            }

            if(status==="resolvendo"){
                setStatus_button1=<button className="mt-3 mx-3 font-weight-bold btn btn-center btn-arquivado" type="button">Resolvendo</button>
                setNiveis=setNivel
                setFormarto="btn btn-mensagem mx-5 mt-5 row btn-center"
                setMensagem_p_tecnico=mensagem_p_tecnico
            }

            if(status==="resolvido"){
                setStatus_button1=<button className="mt-3 mx-3 font-weight-bold btn btn-center btn-arquivado" type="button">Resolvido</button>
                setNiveis=setNivel
                setFormarto="btn btn-mensagem mx-5 mt-5 row"
                setMensagem_p_tecnico=mensagem_p_tecnico
            }
        }
        
     
    }   
            


    return(
        <>
        <div>
        <div className={setFormarto}>
            {setMensagem_p_tecnico}
            {setNiveis}
            {setStatus_button1}
            {setStatus_button2}

        </div>
        </div>
        </>
    )
}

export default Mensagem_estrutura;