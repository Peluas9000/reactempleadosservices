import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ServicioEmpleados from '../services/ServicioEmpleados';

export default function EmpleadoOficioComponent() {
    const { oficina } = useParams();
    const [empleados, setEmpleados] = useState([]);

    useEffect(() => {
        const servicio = new ServicioEmpleados();
        servicio.getEmpleadoByOficio(oficina)
            .then(data => {
                setEmpleados(data);
            })
            .catch(error => {
                console.error('No se pudieron cargar los empleados por oficio:', error);
            });
    }, [oficina]);

    return (
        <div>
            <h1>Empleados del oficio: {oficina}</h1>
            <ul>
                {empleados.map(empleado => (
                    <li key={empleado.idEmpleado}>
                        {empleado.apellido}
                    </li>
                ))}
            </ul>
        </div>
    );
}
