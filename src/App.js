import { useState } from 'react';
import { v4 as uuid } from 'uuid';
import './App.css';
import Header from './components/Header/Header.js';
import Form from './components/Form/Form.js';
import MyOrg from './components/MyOrg/MyOrg.js';
import Team from './components/Team/Team.js';
import Footer from './components/Footer/Footer.js';

function App() {

  const [showForm, updateForm] = useState(true);
  const [showColaborators, updateColaborators] = useState([
    { 
      id: uuid(),
      team: "Front End", 
      photo: "https://github.com/harlandlohora.png", 
      name: "Harland Lohora", 
      position: "Instructor",
      fav: true
    }, 
    { 
      id: uuid(),
      team: "Programación", 
      photo: "https://github.com/genesysaluralatam.png", 
      name: "Genesys Rondon", 
      position: "Desarrolladora de software e instructora",
      fav: false
    }, 
    { 
      id: uuid(),
      team: "UX y Diseño", 
      photo: "https://github.com/JeanmarieAluraLatam.png", 
      name: "Jeanmarie Quijada",
      position: "Instructora en Alura Latam",
      fav: false
    }, 
    { 
      id: uuid(),
      team: "Programación", 
      photo: "https://github.com/christianpva.png", 
      name: "Christian Velasco", 
      position: "Head de Alura e Instructor",
      fav: false
    }, 
    { 
      id: uuid(),
      team: "Innovación y Gestión", 
      photo: "https://github.com/JoseDarioGonzalezCha.png", 
      name: "Jose Gonzalez", 
      position: "Dev FullStack",
      fav: false
  }]);

  const [teams, updateTeams] = useState([
    {
      id: uuid(),
      title: 'Programación',
      primaryColor: '#57C278',
      secondColor: '#D9F7E9'
    },
    {
      id: uuid(),
      title: 'Front End',
      primaryColor: '#82CFFA',
      secondColor: '#E8F8FF'
    },
    {
      id: uuid(),
      title: 'Data Science',
      primaryColor: '#A6D157',
      secondColor: '#F0F8E2'
    },
    {
      id: uuid(),
      title: 'Devops',
      primaryColor: '#E06B69',
      secondColor: '#FDE7E8'
    },
    {
      id: uuid(),
      title: 'UX y Diseño',
      primaryColor: '#DB6EBF',
      secondColor: '#FAE9F5'
    },
    {
      id: uuid(),
      title: 'Móvil',
      primaryColor: '#FFBA05',
      secondColor: '#FFF5D9'
    },
    {
      id: uuid(),
      title: 'Innovación y Gestión',
      primaryColor: '#FF8A29',
      secondColor: '#FFEEDF'
    }
  ]);

  const changeFormHook = () => {
    updateForm(!showForm);
  }

  //Registrar colaborador
  const registerCollaborator = (colaborator) => {
    updateColaborators([...showColaborators, colaborator]);
  }

  //Eliminar Colaborador
  const deleteColaborator = (id) =>{
    const newColaborators = showColaborators.filter( (colaborator)  => colaborator.id !== id)
    updateColaborators(newColaborators);
  }

  //Actualizar color de equipo
  const updateTeamColor = (newColor, id) => {
    const teamsUpdated = teams.map( (team) => {
      if(team.id === id){
        team.primaryColor = newColor;
      }
        return team;
    })
      updateTeams(teamsUpdated);
  }

  //Crear equipo
  const createTeam = (newTeam) => {
    updateTeams([...teams, {...newTeam, id: uuid()}]);
  }

  const like = (id) =>{
    const colaboratorsUpdates = showColaborators.map( (colaborator) => {
      if(colaborator.id === id){
        colaborator.fav = !colaborator.fav;
      }
        return colaborator;
    })
      updateColaborators(colaboratorsUpdates);
  }

  return (
    <div>
      <Header/>
      {/*showForm === true ? <Form/> : <></>*/}
      {showForm && <Form teams={teams.map( (team) => team.title)} registerCollaborator={registerCollaborator} createTeam={createTeam}/>}
      
      
      <MyOrg changeFormHook = {changeFormHook}/>
      
      {

      teams.map( (team) => <Team datas={team} key={team.title}
      colaborators={showColaborators.filter( colaborator => colaborator.team === team.title)}
      deleteColaborator={deleteColaborator} updateTeamColor={updateTeamColor}
      like={like}
      /> )

      }

      <Footer />

    </div>
  );

  

  
}

export default App;
