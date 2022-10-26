import React from 'react'

import { Button, Container, Icon, Header,Message, Modal, Item, Label, Card } from 'semantic-ui-react'
import {useState, useEffect, useContext} from 'react'
import  AuthContext, { setUserTokenContext } from '../../users/UserAuth'



import axios from 'axios'



let urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get('_id');

const PetDetails = props => {
  const {user} = useContext(setUserTokenContext)
        async function onDelete(){
            const url = `http://localhost:5500/api/pets/${id}`;
		const response = await axios.delete(url);
		console.log(response);
            console.log('delitingg');
            setOpen(false)
            window.location.replace("http://localhost:3000/pets")
        }
        const [open, setOpen] = useState(false)
        const [adopt, setadopt] = useState(true)
        const [message, setmessage] = useState(true)


        function handleadopt(){
          console.log('adpopted')
          setadopt(!adopt)
        }


        const  savePet = (idp) => {
          console.log(idp)
          console.log(id)
	
         
          axios
            .put(`http://localhost:5500/api/pets/save/${id}`, {
              id: idp,
         
            })
            .then(response => {
              console.log(response)
              setmessage('pet saved! , check in "my pets!"')
              
      
            })
            .catch(error => {
              console.log(error)
              setmessage('somethings worng')
          
        
            })
         
          }



            const  unsavePet = (idp) => {
              console.log(idp)
              console.log(id)
      
             
              axios
                .put(`http://localhost:5500/api/pets/delete/${id}`, {
                  id: idp,
             
                })
                .then(response => {
                  console.log(response)
                  setmessage('pet is no longer on your pets! ')
          
                })
                .catch(error => {
                  console.log(error)
                  setmessage('somethings worng')
            
                })}



    return (
          <>
        <div style={{fontSize: ""}}>
              <Container >
              { user && 
	 <Header as="h4" block>

	  Hey<span style={{color : "coral"}}> {user.name}</span> , you can save a pet now </Header>}
          
         <Message color='yellow'>
         <Item.Group divided >
           <Item>
      <Item.Image src={props.pet.image} />

      <Item.Content>
        <Item.Header as='H1'>  {props.pet.title}
         </Item.Header>
       
        <Item.Description>{props.pet.description}</Item.Description>
        <Item.Extra>
           <Label color="yellow">breed:</Label> {props.pet.breed}
       
        </Item.Extra>
        <Item.Extra>
        <Label color="yellow">diet:</Label> 
            {props.pet.diet}
        
        </Item.Extra>

        <Item.Extra>
            adopted? :{props.pet.adopted}
       
        </Item.Extra>
        { user && 
        <span>
        <Button onClick={() => savePet(user._id)}>save pet</Button>
        <Button onClick={() => unsavePet(user._id)}>unsave pet</Button> </span>}


        {adopt ? <Button floated='center' color='green' onClick={handleadopt}>
          <Icon name='paw' /> adopt now!
        </Button> :  <Button floated='center' color='red' onClick={handleadopt}>
          <Icon name='paw' /> sorry, already adopted
        </Button> }
        { user && 
        <Modal
      closeIcon
      open={open}
      trigger={<Button   floated='right'  color='red' >delete</Button>}
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
    >
      <Header icon='archive'  content={`delete ${props.pet.title}`} />
      <Modal.Content>
        <p>
         are you sure you want to delete
        </p>
      </Modal.Content>
      <Modal.Actions>
          
        <Button floated='right' color='red' onClick={() => setOpen(false)}>
          <Icon name='remove' /> No
        </Button>
        <Button color='red' onClick={onDelete }>
          <Icon name='checkmark' /> Yes
        </Button>
      </Modal.Actions>
    </Modal>}
      </Item.Content>
    </Item>
        </Item.Group>
        </Message> 
        
        {message &&<Message primary ><div className="result">{ message}</div></Message>}
        </Container>
        </div>
        </>
    )
}

export default PetDetails
