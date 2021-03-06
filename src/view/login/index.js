import React,{useState} from 'react';
import './login.css';
import {Link, Redirect} from 'react-router-dom';

import firebase from '../../config/firebase';
import 'firebase/auth';
import { useSelector, useDispatch} from 'react-redux';



function Login(){
    const[email, setEmail]= useState();
    const[senha, setSenha]= useState();
    const[msgTipo, setMsgTipo]= useState();

    const dispatch = useDispatch();

    function logar(){
        firebase.auth().signInWithEmailAndPassword(email, senha).then(resultado => {
        setMsgTipo('sucesso')
        setTimeout(() =>{
            dispatch({type: 'LOG_IN', usuarioEmail: email})       
        },2000);            
        }).catch(erro => {
        setMsgTipo('erro')
             });
    }
    
    return(
        <div className = "login-content d-flex align-items-center">

            {
                useSelector(state => state.usuarioLogado) > 0 ? <Redirect to='/' /> : null
            }


            <form className="form-signin mx-auto">
            <div className="text-center mb-4">
            {/* <img className="mb-4" src="/docs/4.3/assets/brand/bootstrap-solid.svg" alt="" width="72" height="72"/> */}
            <h1 className="h3 mb-3 font-weight-normal text-white font-weight-bold">Login</h1>
            </div>


        
            <input onChange={(e)=> setEmail(e.target.value)} type="email" id="inputEmail" className="form-control my-2" placeholder="Email address"/>
            <input onChange={(e)=> setSenha(e.target.value)} type="password" id="inputPassword" className="form-control my-2" placeholder="Password"/>

        
            <button onClick={logar} className="btn btn-lg btn-block btn-login" type="button">Logar</button>

            <div className="msg-login text-white my-5 text-center">

                {msgTipo === 'sucesso' && <spam><strong>WoW!</strong> Você está conetado! &#128526;</spam>}
                {msgTipo === 'erro' && <spam><strong>Ops!</strong> Verifique se a senha ou o usuário estão correto! &#128546;</spam>}
                
            </div>


            <div className="opecoes-login mt-5">
                <Link href='/usuariorecuperarsenha' className='mx-2'>Recuperar senha</Link>
                <spam className='text-white'> &#9733;</spam>
                <Link to='novousuario' className='mx-2'>Quero Cadastrar</Link>
            </div>
        </form>
        </div>
);
}
export default Login;