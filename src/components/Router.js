import React, { Component } from 'react'
import { BrowserRouter, useParams } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import MenuComponents from './MenuComponents';
import EmpleadoOficioComponent from './EmpleadoOficioComponent';
import ServicioEmpleados from '../services/ServicioEmpleados';

export default class Router extends Component {
  render() {    
    function EmpleadoOficioElement(){
       let{oficio}= useParams();
      return <EmpleadoOficioComponent oficio={oficio} />;

    }

    return (
     <BrowserRouter>
        <MenuComponents/>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/menu" element={<MenuComponents/>}/>
            <Route path="/oficio/:oficio" element={<EmpleadoOficioElement/>}/>
        </Routes>
     </BrowserRouter>
    )
  }
}
