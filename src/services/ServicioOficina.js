import axios from 'axios';
import Global from '../Global';
export default class ServicioOficina {
    getOficios = () => {
        const request = `${Global.urlApiEmpleados}/api/Empleados/oficios`;
        return axios.get(request).then(response => response.data);
    }

}
