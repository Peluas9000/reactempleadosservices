import React, { Component } from 'react'
import Global from '../Global';
import axios from 'axios';

export default class ServicioEmpleados   {
    getEmpleados=()=>{
        return new Promise(function(resolve,reject){
            var request=Global.urlApiEmpleados+"/api/Empleados";
            axios.get(request).then(response=>{
                console.log(response.data);
                resolve(response.data);
            });

        }

        )
    }


     getOficios = () => {
        return new Promise (function(resolve,reject){
            let url= Global.urlApiEmpleados
            let request ="/api/Empleados/Oficios";
            axios.get(url+request).then(response=>{
                resolve(response.data);
            }).catch(error=>{
                reject(error);
            })
        })
    }

    getEmpleadoByOficio=(oficio)=>{
       return new Promise (function(resolve,reject){
            let url = Global.urlApiEmpleados;
            let request = "/api/Empleados/EmpleadosOficio/"+oficio;
            axios.get(url+request).then(response=>{
                resolve(response.data);
            }).catch(error=>{
                reject(error);
            })
       })
    }


}
