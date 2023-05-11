import './Colaborator.css';
import { AiFillCloseCircle, AiOutlineHeart, AiFillHeart } from 'react-icons/ai';

const Colaborator = (props) => {

    const {id,name,position,photo,team,fav} = props.datasColaborator;
    const {primaryColor, deleteColaborator, like} = props;

    return <div className='colaborator'>
        <AiFillCloseCircle onClick={ () => deleteColaborator(id)} style={{cursor: 'pointer'}} className='delete'/>
        <div className='headerColaborator' style={{backgroundColor: primaryColor}}>
            <img src={photo} alt={name}/>
        </div>
        <div className='info'>
            <h4>{name}</h4>
            <h5>{position}</h5>
            {fav ? <AiFillHeart color='#ff0000' onClick={ () => like(id)} style={{cursor: 'pointer'}}/> : <AiOutlineHeart  onClick={ () => like(id)} style={{cursor: 'pointer'}}/>}
        </div>
    </div>
}

export default Colaborator;