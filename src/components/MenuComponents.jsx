import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
import ServicioOficina from '../services/ServicioOficina';
export default class MenuComponents extends Component {
    servicio=new ServicioOficina();
    state={
        oficios:[]
    }
    loadOficios=()=>{
       this.servicio.getOficios().then((res)=>{
        this.setState({
            oficios:res
        })
       }).catch(error => {
       console.error('No se pudieron cargar los oficios:', error);
       })

    }

    componentDidMount=()=>{
        this.loadOficios();
    }
    
    render() {
        return (
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                
            <div className="container-fluid">
               
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <NavLink className="nav-link active" aria-current="page" 
                        to="/">Home</NavLink>
                    </li>
                    
                   
                    <li className="nav-item dropdown">
                         <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Oficios
                            </a>
                 
                        <ul className="dropdown-menu">
                            {
                                this.state.oficios.map((oficio, index) => {
                                    return (<li key={index} className="dropdown-item">
                                        {oficio}
                                    </li>)
                                })
                            }
                        </ul>
                    </li>
                </ul>
                </div>
            </div>
            </nav>
        )
    }
}
