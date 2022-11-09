import React from 'react'
import Useritem from './UserItem'
import { Button, Card, Image } from 'semantic-ui-react'


const Userlist = props => {
    if(props.items.length === 0) {
       return (
           <div className="center">
               <h2>no users found</h2>

           </div>
       )
    }


    return <div className="center" style={{margin : '2em'}}><Card.Group compact>
        {props.items.map(user =>{
           return <Useritem key={user._id} id={user._id} image={user.image} name={user.name} petCount={user.email}/>

        })}
    </Card.Group>
    </div>
}


export default Userlist
