//Importamos las libreria UseContext y useState esto para
//llamar los estados y la funcion sin crear clases
import React,{useContext, useState} from 'react';
import '../styles/Login.css';
import logo from '../images/LogoBoa.png';
import bolivia from '../images/escudoBolivia.svg';
import 'bootstrap/dist/css/bootstrap.min.css';

//Importamos el servicio REST y la encriptacion md5 instalado explicado mas abajo
import {clientRestPxp} from "clientpxpjs/js/clientRestPxp";
import {md5} from "clientpxpjs/js/md5";

//Importamos componentes de bootstrap
import { Alert } from 'reactstrap';

const Login = (props) => {

  {/*Llamamos al componente de bootstrap para los mensajes*/}
  const [visible, setVisible] = useState(true);

  const onDismiss = () => {
    setVisible(false);
  }



  {/*Armamos las funciones con sus variables para enviar los datos para eso usamos los hooks*/}
  const [cuenta, setCuenta] = useState('');
  const [contraseña, setContraseña] = useState('');
  const [carga, setCarga] = useState('');

  {/*creamos hooks para cambiar el estado del mensaje*/}
  const [mensaje, setMensaje] = useState('danger');
  const [aviso, setAviso] = useState('Verifique los datos');


  {/*Llamamos a las funciones para recuperar los datos ingresados cuando se cambie el campo*/}
  const handleCuenta = e => {
        {/*Enviamos el datos en la funcion creada por los hooks*/}
        setCuenta(e.target.value);
        console.log("llega la cuenta",e.target.value);
    }
  const handleContraseña = e => {
    {/*Enviamos el datos en la funcion creada por los hooks*/}
      setContraseña(e.target.value);
      console.log("llega la cuenta",e.target.value);

  }

  {/*Llamamos a la funcion del boton para enviar los datos al hacer click*/}
  const handleEnviarDatos = e => {
    e.preventDefault();
    setCarga(true);
    setVisible(true);
    console.log(` cuenta ${cuenta} contraseña ${contraseña}`);

    {/*Aqui llamamos al servicio rest*/}
    {/*Priemeramente debemos agregar la siguiente linea de codigo
      en las dependencias "clientpxpjs": "^1.0.1" una vez agregada
      debemos ejecutar en la consulta npm install para poder intalar
      el servicio rest, para verificar que se instalo buscamos en la carpeta
      node_modules clientpxpjs*/}
      let client = new clientRestPxp('10.150.0.91/kerp_ismael', 'DOMINIO');
        client.setCredentialsPxp(cuenta, md5(contraseña));
        client.genHeaders();
        client.verifyUser(function (resp) {
             console.log('verifyUser', resp)
             if(resp.success) {
               setMensaje('info');
               setAviso('Datos Correctos');
               console.log("llega aqui los props para redireccionar IRVA",props.history);

                {/* setUserContext({...resp, client:client, user:user, password:md5(password)});
                 const { from } = props.location.state || { from: { pathname: "/Select" } };
                 props.history.push(from);*/}

             }
         });
      {/*****************************************************************************************/}

  }


  return (
    <div>
      {carga && <Alert color={mensaje} isOpen={visible} toggle={onDismiss}>
                  {aviso}
                </Alert>
      }
    <div className="container">
    	<div className="d-flex justify-content-center h-100">
    		<div className="card">
    			<div className="card-header">
    				<h3 className="titulo"><center><b>INICIAR SESIÓN</b></center></h3>
    				<div className="d-flex justify-content-end social_icon">
    					<img src={bolivia} className="img-fluid logoCabeza" alt="Escudo de Bolivia" />
    				</div>
    			</div>
    			<div className="card-body">
    				<form>
    					<div className="input-group form-group">
    						<div className="input-group-prepend">
    							<span className="input-group-text"><i className="fas fa-user"></i></span>
    						</div>
    						<input type="text" className="form-control" placeholder="Cuenta" value={cuenta} onChange={handleCuenta}/>

    					</div>
    					<div className="input-group form-group">
    						<div className="input-group-prepend">
    							<span className="input-group-text"><i className="fas fa-key"></i></span>
    						</div>
    						<input type="password" className="form-control" placeholder="Contraseña" value={contraseña} onChange={handleContraseña}/>
    					</div>
    					<div className="form-group">
    						<center><button type="submit" value="Entrar" className="btn login_btn" onClick={handleEnviarDatos}>Entrar</button></center>
              </div>
    				</form>
    			</div>
    			<div className="card-footer">
              <img src={logo} className="img-fluid logoFooter" alt="Logo BoA"/>
    			</div>
    		</div>
    	</div>
    </div>
  </div>
  );
}

export default Login;
