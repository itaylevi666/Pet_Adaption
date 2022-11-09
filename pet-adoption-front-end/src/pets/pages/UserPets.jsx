import React from 'react'
import PetList from '../components/PetList'
import {useParams} from 'react-router-dom'
import {useState, useEffect} from 'react'


const PETS =[{
    id: 'u1',
    title: 'thats a dog1',
    description : 'nice dog1',
    image: 'https://picsum.photos/id/237/200/300',
    address: 'this is adress',
    creator :"u1"

},
{
    id: 'u2',
    title: 'thats a dog2',
    description : 'nice dog2',
    image: 'https://picsum.photos/id/237/200/300',
    address: 'this is adress',
    creator: 'u2'
    

}] 

const UserPets = () => {
   const userId = useParams().userId
   const loadedPets = PETS.filter(pet => pet.creator === userId)


    return (
        
        <PetList items={loadedPets}/>
        // <PetList items={PETS}/>
    )}
  

  export default UserPets



