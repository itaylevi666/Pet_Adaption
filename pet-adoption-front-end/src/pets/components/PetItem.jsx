import React from 'react'
import { Card, Icon, Image ,Button, Modal, Header, Message} from 'semantic-ui-react'
import  { useState } from 'react';



const PetItem = props => {
  const styles = {
  
    well:{
  
      boxShadow: "1px 1px 5px #9E9E9E",
      margin : "1em"
  
    }
  
  };
    function handleClick(e){
         window.location.href=`/pet?_id=${props.id}`
    }
    const [open, setOpen] = useState(false)


    function onDelete(){
      console.log('delitingg');
      setOpen(false)
    }

    return (
      <Message color="olive" style={styles.well}>
        <Card>
      
        <Card.Content>
        <Image   size='medium' rounded src={props.image}  wrapped ui={true} />
          <Card.Header style={{marginTop: "3px"}}>{props.title}  </Card.Header>
          <Card.Meta>
           
            <span className='date'>  {props.description} </span>
         
          </Card.Meta>
      
        </Card.Content>
        <Card.Content extra>
          <a>
            <Icon name='paw' />
           {props.breed}
          </a>
        </Card.Content>
        <div>
 
    <Button color="green" style={{marginBottom : '10px'}} onClick={handleClick} animated >
      <Button.Content  visible>more info</Button.Content>
      <Button.Content hidden>
        <Icon name='arrow right' />
      </Button.Content>
    </Button>
  
  
  </div>
      </Card></Message>)
}

export default PetItem


