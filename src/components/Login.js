import React from 'react';
import '../styles/Login.css';
import logo from '../images/LogoBoa.png';
import bolivia from '../images/escudoBolivia.svg';
import 'bootstrap/dist/css/bootstrap.min.css';

const Login = (props) => {
  return (
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
    						<input type="text" className="form-control" placeholder="Cuenta" />

    					</div>
    					<div className="input-group form-group">
    						<div className="input-group-prepend">
    							<span className="input-group-text"><i className="fas fa-key"></i></span>
    						</div>
    						<input type="password" className="form-control" placeholder="Contraseña" />
    					</div>
    					<div className="form-group">
    						<center><input type="submit" value="Entrar" className="btn login_btn" /></center>
    					</div>
    				</form>
    			</div>
    			<div className="card-footer">
              <img src={logo} className="img-fluid logoFooter" alt="Logo BoA"/>
    			</div>
    		</div>
    	</div>
    </div>
  );
}

export default Login;
