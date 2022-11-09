import React , {useContext} from 'react'
import { Input, Menu , Image, Icon, Container} from 'semantic-ui-react'
import logodog from '../../../static/logodog.png'
import {setUserTokenContext} from '../../../users/UserAuth'
import localforage from 'localforage'
import '../navigation/nav.css'


 const Navlinks = props => {

function  dropLocalForageCache () {
  localforage.clear()
  window.location.replace("http://localhost:3000/")
}
  
  const {user} = useContext(setUserTokenContext);

  return (
        <div style={{backgroundColor: "lightblue"}}>
        <Menu className="height"  secondary fluid style={{margin : '2em'}}> 
               <Container text>
             
              <Image avatar
           style={{marginTop: "5px"}} 
           src={logodog}
          
            />
        <Menu.Item
          name='home'
          onClick={event =>  window.location.href='/'}
        />
      
      <Menu.Item
    name='allpets'
    onClick={event =>  window.location.href='/pets'}
 
  />



  {user && (
    <>
        <Menu.Item
          name='my pets'
          onClick={event =>  window.location.href='/mypets'}
        />
 
        <Menu.Item
         
          name='add pet'
          onClick={event =>  window.location.href='/pets/new'}
         
        />
            <Menu.Item
          name='Admin Panel'
          onClick={event =>  window.location.href='/admin'}
       
        
          /> 
                    <Menu.Item
            name='search '
            onClick={event =>  window.location.href='/search'}
         
          
            /> 

            
<Menu.Item
    name='logOut'
    onClick={ dropLocalForageCache}
 
  />
        </>
  )}
  {!user && (
					<>
              <Menu.Item
            name='Auth'
            onClick={event =>  window.location.href='/auth'}
            
          
          />
                 <Menu.Item
            name='search '
            onClick={event =>  window.location.href='/search'}
         
          
            /> 
            </>
            )}
        {/* <Menu.Menu position='right'>
          <Menu.Item>
            <Input icon='search' placeholder='Search...' />
          </Menu.Item>
    
        </Menu.Menu> */}
          </Container>
      </Menu>
      </div>)
  
}

export default Navlinks
