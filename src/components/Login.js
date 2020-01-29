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
    				<h3>Iniciar Sesión</h3>
    				<div className="d-flex justify-content-end social_icon">
    					<img src={bolivia} className="img-fluid logoCabeza" alt="Responsive image" />
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
    						<input type="submit" value="Ingresar" className="btn float-right login_btn" />
    					</div>
    				</form>
    			</div>
    			<div className="card-footer">
              <img src={logo} className="img-fluid logoFooter" alt="Responsive image" />
    			</div>
    		</div>
    	</div>
    </div>
  );
}

export default Login;
