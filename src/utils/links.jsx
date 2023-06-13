import {IoBarChartSharp} from 'react-icons/io5';
import {MdQueryStats} from 'react-icons/md';
import { FaWpforms } from 'react-icons/fa';
import {ImProfile} from 'react-icons/im';

const links = [
{
    id:1,
    text: 'Estadisticas',
    path:'/',
    icon: <IoBarChartSharp />,
},
{
    id:2,
    text: 'Todos los estudiantes',
    path:'all-jobs',
    icon: <MdQueryStats />,
},
{
    id:3,
    text: 'Añadir estudiante',
    path:'add-job',
    icon: <FaWpforms />,
},
{
    id:4,
    text: 'Perfil',
    path:'profile',
    icon: <ImProfile />,
},
];

export default links;