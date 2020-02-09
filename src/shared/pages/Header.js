import React from 'react';
import {Link} from 'react-router-dom';
import logo from '../../images/experian.svg'; 
import './styles/Header.css';

class Header extends React.Component{
    render(){
        return(
            <div className="Header">
                <nav className="navbar navbar-expand-lg navbar-light navbar__color">
                <div className="container-fluid">
                <Link to="/" className="Header__brand">
                    <img  className="Header__brand-logo" src={logo} alt="logo" />
                    <span className="font-weight-ligh">Experian</span>
                    <span className="font-weight-bold">Datacredito</span>
                </Link>
                </div>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                    <Link to="/parameters"  className="nav-item nav-link active" >
                        Consultar 
                        <span className="sr-only">(current)</span>
                    </Link>
                    <Link  to="/parameters/new" className="nav-item nav-link" >Crear</Link>
                    <Link to="/" className="nav-item nav-link" >Apliación</Link>
                   
                    </div>
                </div>
                </nav>


            </div>
        )
    }
}

export default Header;
