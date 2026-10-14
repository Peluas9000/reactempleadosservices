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
}
