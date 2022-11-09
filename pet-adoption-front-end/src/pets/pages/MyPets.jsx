import React, {useContext} from 'react'
import PetList from '../components/PetList'
import axios from 'axios'
import {useState, useEffect} from 'react'
import  AuthContext, { setUserTokenContext } from '../../users/UserAuth'




import {
  Message,
    Button,
    Container,
    Divider,
    Grid,
    Header,
    Icon,
    Image,
    List,
    Menu,
    Segment,
    Sidebar,
    Visibility,
    ItemGroup,
  } from 'semantic-ui-react'



const MyPets = () => {

const [pets, setPets] = useState([]);

const {user} = useContext(setUserTokenContext);


	useEffect(() => {
		 {user && loadPets();}
	}, [user]);

	async function loadPets() {
        
		const url = `http://localhost:5500/api/pets/mypets/${user._id}`;
		const response = await axios.get(url);
		console.log(response);
		setPets(response.data.myPets);
	}



    return (
       <>

       
   
                    {user && <Message color='green'> here are your pets {user.name } </Message>}
        <PetList items={pets}/>
    </>
    )}
  

  export default MyPets



