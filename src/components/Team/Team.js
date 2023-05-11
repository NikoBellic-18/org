import './Team.css';
import Colaborator from '../Colaborator/Colaborator.js';
import hexToRgba from 'hex-to-rgba';

const Team = (props) => {
    //Destructuracion
    const {id, title, primaryColor, secondColor} = props.datas;
    const {colaborators, deleteColaborator, updateTeamColor, like} = props;
    

    return <>{
        colaborators.length > 0 &&
        <section className='team' style={{backgroundColor: hexToRgba(primaryColor, 0.6)}}>
            <input type='color' className='input-color' value={primaryColor} onChange={ (event) => updateTeamColor (event.target.value, id)}/>
            <h3 style={{borderColor: primaryColor}}>{title}</h3>
            <div className='colaborators'>
                {
                    colaborators.map( (colaborator, index) => <Colaborator datasColaborator={colaborator} key={index} primaryColor={primaryColor} deleteColaborator={deleteColaborator} like={like}/>) 
                }
            </div>
        </section>
    }
    </>
}

export default Team;