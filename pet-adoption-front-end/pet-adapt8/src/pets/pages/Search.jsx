

import SearchBar from '../components/Search/Searchbar'
import PetSearchbybreed from '../components/Search/PetSearchbybreed'
import { Button, Checkbox, Form, Container, Header, Icon, Message} from 'semantic-ui-react'

import React, { useState, useEffect } from 'react';
import PetSearch from '../components/Search/PetSearch'


const Search = (props) => {
  const [input, setInput] = useState('');
  const [petsDeafult, setpetsDeafult] = useState();
  const [petlistt, setpetListt] = useState();
  const [petlistb, setpetListb] = useState();
  const [changetype, setchangetype] = useState(true)
  
function handlechange(){
  setchangetype(!changetype)
}

  const fetchData = async () => {
    return await fetch('http://localhost:5500/api/pets')
      .then(response => response.json())
      .then(data => {
        setpetListt(data.pets) 
         setpetsDeafult(data.pets)
        console.log(data.pets)
       });}

  const updateInputT = async (input) => {
     const filtered = petsDeafult.filter(pet => {
      return pet.title.toLowerCase().includes(input.toLowerCase())
     })
     setInput(input);
     setpetListt(filtered);
  }


  const updateInputB = async (input) => {
    const filtered = petsDeafult.filter(pet => {
     return pet.breed.toLowerCase().includes(input.toLowerCase())
    })
    setInput(input);
    setpetListb(filtered);
 }


  useEffect( () => {fetchData()},[]);
	
  return (
    <>
       <span style={{marginLeft: "113px"}}> <Button  onClick={handlechange} content={changetype ? 'Search by Breed' : 'Search by Name'} primary /></span>
     { changetype ? <SearchBar 
       input={input} 
       onChange={updateInputT}
      />
:
<SearchBar 
       input={input} 
       onChange={updateInputB}
      />}
<br></br>
        <Container>
    {changetype ? <Message color="brown"><PetSearch petlist={petlistt}/></Message> :
      <Message color="blue"> <PetSearchbybreed  petlist={petlistb}/></Message>}</Container>
    </>
   );
}


export default Search