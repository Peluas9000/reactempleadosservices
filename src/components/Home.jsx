import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
import ServicioEmpleados from '../services/ServicioEmpleados';

export default class Home extends Component {
  servicio=new ServicioEmpleados();  
  state ={
      empleados:[]
    }
loadEmpleados=()=>{
    this.servicio.getEmpleados().then((res)=>{
      this.setState({
        empleados:res
      })
    })
  }
    
  componentDidMount=()=>{
    this.loadEmpleados();
  }

  render() {
    return (
      <div>
        <h1>Empleados</h1>
        <table className='table table-striped'>
            <thead>
                <tr>
                    <th>idEmpleado</th>
                    <th>Apellido</th>
                    
                </tr>

            </thead>
          <tbody className="table-group-divider">
            {
              this.state.empleados.map((empleado,index)=>{
                return(
                  <tr key={index}>
                    <td>{empleado.idEmpleado}</td>
                    <td>{empleado.apellido}</td>
                    <td><NavLink className="btn btn-primary" to={"/detalle/"+empleado.idEmpleado}>Detalle</NavLink></td>
                  </tr>
                )
              })
            }
          </tbody>
          </table>
      </div>
    )
  }
}
