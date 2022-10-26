import React from 'react'
import PetList from '../components/PetList'
import {useParams} from 'react-router-dom'
import axios from 'axios'
import {useState, useEffect} from 'react'




const AllPets = () => {
//    const userId = useParams().userId
//    const loadedPets = PETS.filter(pet => pet.creator === userId)

const [pets, setPets] = useState([]);

	useEffect(() => {
		loadPets();
	}, []);

	async function loadPets() {
		const url = "http://localhost:5500/api/pets";
		const response = await axios.get(url);
		console.log(response);
		setPets(response.data.pets);
	}



    return (
        
        <PetList items={pets}/>
    
    )}
  

  export default AllPets



