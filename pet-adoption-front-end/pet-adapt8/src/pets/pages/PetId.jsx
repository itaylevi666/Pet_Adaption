import React from 'react'
import {useParams} from 'react-router-dom'
import {useState, useEffect} from 'react'
import axios from 'axios'
import  PetDetails from './PetDetails'
const PetId = () => {


    const [pet, setPet] = useState([]);
    
    let urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('_id'); // "edit"

	useEffect(() => {
		loadPets();
	}, []);

	async function loadPets() {
		const url = `http://localhost:5500/api/pets/${id}`;
		const response = await axios.get(url);
		console.log(response);
		setPet(response.data.pets);
	}
    
  
    return (

       

      


        <div>

          <PetDetails pet={pet}/>
        
        </div>
    )
}

export default PetId
