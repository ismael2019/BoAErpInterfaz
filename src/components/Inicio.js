import React, {useContext, useState,Component,useEffect} from 'react';
//Importamos la variable Global para recuperar Informacion~
import {UserContext} from "./userContext";

//Importamos la Libreria para controlar que se inicie session
import {Redirect} from "react-router-dom";

import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText,
    Alert
} from 'reactstrap';



//Creamos el fetch para recuperar los datos obtenidos
import useFetch from "./useFetch";
import Login from "./Login";


const Inicio = () => {

    const {userContext} = useContext(UserContext)

    const [visible, setVisible] = useState(true);

    const onDismiss = () => {
        setVisible(false);
    }
    const {data, loading} = useFetch("seguridad/Usuario/listarUsuario");

    var dato = '';

    if (userContext != null) {
        dato = userContext.nombre_usuario;
    } else {
        dato = '';
    }

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);



  return (

    <div>
        {userContext === null && <Redirect to="/Login" />}

        <Navbar className="bg-primary" fixed dark expand="md">
            <NavbarBrand href="/">ERP BoA</NavbarBrand>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
                <Nav className="mr-auto" navbar>

                </Nav>
                <NavbarText><NavLink href="/components/">Cerrar Sesion</NavLink></NavbarText>
            </Collapse>
        </Navbar>
        <center>
        <Alert style={{width:40+'%'}} color='info' isOpen={visible} toggle={onDismiss}>
            Bienvenido {dato}
        </Alert>
            </center>
    </div>
  );
}

export default Inicio;
