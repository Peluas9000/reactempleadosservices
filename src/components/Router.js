import React, { Component } from 'react'
import { BrowserRouter } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import MenuComponents from './MenuComponents';
import EmpleadoOficioComponent from './EmpleadoOficioComponent';
export default class Router extends Component {
  render() {    
    return (
     <BrowserRouter>
        <MenuComponents/>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/menu" element={<MenuComponents/>}/>
            <Route path="/empleadooficina/:oficina" element={<EmpleadoOficioComponent/>}/>
        </Routes>
     </BrowserRouter>
    )
  }
}
