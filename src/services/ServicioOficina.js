import React, { Component } from 'react'
import axios from 'axios';
import Global from '../Global';
export default class ServicioOficina  {

    getOficios(){
        let request =" api/Empleados/oficios";
        let url = Global.urlApiEmpleados ;
        return Promise=new Promise(function(resolve){
            axios.get(url+request).then(res=>{
                resolve(res);
            });
            
        });
    }

}
