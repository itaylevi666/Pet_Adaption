import React from 'react'
import { Card, Icon, Image , Button , } from 'semantic-ui-react'
import {Link} from 'react-router-dom'



const UserItem = props => {
    return (

        <Card >
        <Card.Content>
          <Image
            floated='right'
            size='mini'
            src={props.image} circular
          />
          <Card.Header>{props.name}</Card.Header>
        
        </Card.Content>
        <Card.Content extra>
      <a>
        <Icon name='paw' />
         {props.petCount} 
      </a>
    </Card.Content>
        <Card.Content extra>
        
 
        </Card.Content>
      </Card>



    //     <li>
    //         <div>
    //             <img src={props.image} alt={props.name}></img>
    //         </div>
    //         <div>
    //             <h2>{props.name}</h2>
    //             <h3>{props.petCount}</h3>

    //         </div>
    
    //     </li>
    // )
    )   
}


export default UserItem
