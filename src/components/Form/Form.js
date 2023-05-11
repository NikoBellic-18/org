import { useState } from 'react';
import './Form.css';
import Field from '../Field';
import OptionsList from '../OptionsList/OptionsList';
import Button from '../Button/Button';

const Form = (props) => {

    const [name, updateName] = useState("");
    const [position, updatePosition] = useState("");
    const [picture, updatePicture] = useState("");
    const [team, updateTeam] = useState("");

    const [title, updateTitle] = useState("");
    const[color, updateColor] = useState("");

    const handleShipping = (event) => {
        event.preventDefault();
        const dataToSent = {
            name,
            position,
            picture,
            team
        }
        props.registerCollaborator(dataToSent);
    }

    const manageNewTeam = (e) => {
        e.preventDefault();
        props.createTeam({ title, color });
    }

    return  <section className='form'>
        <form onSubmit={handleShipping}>
            <h2>Rellena el formulario para crear el colaborador.</h2>
            <Field title='Nombre' placeholder='Ingresar nombre' required value={name} updateValue={updateName}/>
            <Field title='Puesto' placeholder='Ingresar puesto' required value={position} updateValue={updatePosition}/>
            <Field title='Foto' placeholder='Ingresar enlace de foto' required value={picture} updateValue={updatePicture}/>
            <OptionsList title='Equipos' value={team} updateTeam={updateTeam} teams= {props.teams}/>
            <Button>Crear</Button>
        </form>

        <form onSubmit={manageNewTeam}>
            <h2>Rellena el formulario para crear el equipo.</h2>
            <Field title='Titulo' placeholder='Ingresar titulo' required value={title} updateValue={updateTitle}/>
            <Field title='Color' placeholder='Ingresar el color en Hex' required value={color} updateValue={updateColor} type='color'/>
            <Button>Registrar Equipo</Button>
        </form>    
    </section>
}

export default Form;