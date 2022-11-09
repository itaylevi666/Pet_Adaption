import React, {useContext} from 'react'
import {Link} from 'react-router-dom'
import dog from '../shared/components/dog.jpg'
import '../shared/components/navigation/home.css'
import  AuthContext, { setUserTokenContext } from '../users/UserAuth'




import {
  Message,
    Button,
    Container,
    Divider,
    Grid,
    Header,
    Icon,
    Image,
    List,
    Menu,
    Segment,
    Sidebar,
    Visibility,
  } from 'semantic-ui-react'


  

const Homepage = (props) => {
  const {user} = useContext(setUserTokenContext);
  // if(!user){
  //   return <div></div>
  // }
    return (
      
      <>
      
    
        <div className="color">
        
              <Container text>
             {user && <Message color='green'> welcome back {user.name}</Message>}
                {/* <span>welcome {user.name}</span> */}
    <Header
      as='h1'
      content='Pet-Adaption'
      
      
      style={{
        fontSize : '3em',
        fontWeight: 'normal',
        marginBottom: 0,
        marginTop: '5px',
      }}
    />
     <Image src='' size='medium' circular />
    <Header
      as='h2'
      content='Do whatever you want when you want to .'
      
      style={{
        fontSize:  '1.7em',
        fontWeight: 'normal',
        marginTop: '0.5em',
      }}
    />
  <Link to="/pets">
     <Button 
      style={{
      
        marginBottom: '0.8em',
      }} >
        <p>Search pets</p>
     </Button>
 </Link>


  </Container>
  
        </div>
 <Image style={{marginTop : "20px"}}src={dog} size='x-large'  centered />
 </>
    )
}





export default Homepage
