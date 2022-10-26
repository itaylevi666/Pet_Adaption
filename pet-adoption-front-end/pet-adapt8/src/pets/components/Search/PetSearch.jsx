import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Container, Message } from 'semantic-ui-react';

const PetSearch = ({petlist=[]}) => {
  return (
    <>
    <Container>
   
    { petlist.map((data,index) => {
        if (data) {
          return (
            <div key={data.title}>
          
          <Message list style={{margin : '10px'}} > <Link to={`/pet?_id=${data._id}`}><span >{data.title}</span></Link> </Message>

	    </div>	
             
             )	
            }
            return null
          }) }
          </Container>
    </>
  );
}

export default PetSearch