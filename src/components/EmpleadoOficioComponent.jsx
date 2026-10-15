import React, { Component } from 'react'
import ServicioEmpleados from '../services/ServicioEmpleados';
import { NavLink } from 'react-router-dom';
export default class EmpleadoOficioComponent extends Component {
    servicio = new ServicioEmpleados();

    state={
        empleados:[]
    }

    loadEmpleadosByOficio=()=>{
        console.log("Oficio recibido en EmpleadoOficioComponent:", this.props.oficio);
        this.servicio.getEmpleadoByOficio(this.props.oficio).then((res)=>{
            this.setState({
                empleados:res
            })
        })
    }

    componentDidMount=()=>{
        this.loadEmpleadosByOficio();
    }

    componentDidUpdate=(prevProps)=>{
        if(prevProps.oficio !== this.props.oficio){
            this.loadEmpleadosByOficio();
        }
    }

  render() {
    return (
      <div>
        <h1>Empleados con oficio: {this.props.oficio}</h1>
        <p>Lista de empleados con el oficio especificado.</p>
        <table className='table table-striped'>
            <thead>
                <tr>
                    <th>idEmpleado</th>
                    <th>Apellido</th>
                    <th>Salario</th>
                </tr>
            </thead>
          <tbody className="table-group-divider">
            {
                this.state.empleados.map((empleado) => (
                    <tr key={empleado.idEmpleado}>
                        <td>{empleado.idEmpleado}</td>
                        <td>{empleado.apellido}</td>
                        <td>{empleado.salario}</td>
                    </tr>
                ))
            }
          </tbody>
        </table>
      </div>
    )
  }
}
