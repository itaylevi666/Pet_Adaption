import React from 'react'
import { Placeholder, Card } from 'semantic-ui-react'
import PetItem from './PetItem'
import {Link} from 'react-router-dom'

import {
    Message,
      Button,
  
    } from 'semantic-ui-react'
  


const PetList = props  => {
    if (props.items.length === 0){
        return <div>
            no pets found in your list, go to all pets?
            <Link to="/pets">
     <Button 
      style={{
      
        marginBottom: '0.8em',
      }} >
        <p>add pet</p>
     </Button>
 </Link>

        </div>
    }
    return (
        <div className="center" style={{margin : '2em'}}> <Card.Group>
        {props.items.map(pet => <PetItem  key={pet.id} 
            id={pet._id} 
            image={pet.image} 
            title={pet.title} 
            description={pet.description}
            diet={pet.diet}
              breed={pet.breed}/>
              
              )
              
              }

             
        </Card.Group>
        </div>
    )
}

export default PetList
