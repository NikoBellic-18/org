import './OptionsList.css';

const OptionsList = (props) => {

    const handleChanges = (e) => {
        props.updateTeam(e.target.value);
    }

    return <div className='option-list'>
        <label>{props.title}</label>
        <select value={props.value} onChange={handleChanges}>
            <option value='' disabled defaultValue='' hidden>Seleccionar equipo</option>
            {props.teams.map( (teams, index) => <option key={index}>{teams}</option>)};
        </select>
    </div>
}

export default OptionsList;