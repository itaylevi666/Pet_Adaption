import React, { useContext } from 'react'
import { useState } from 'react';
import { Button, Checkbox, Form, Container, Header, Icon, Image, Message} from 'semantic-ui-react'
import axios from 'axios'
import { setUserTokenContext } from '../UserAuth';

  
const Auth = ({ setToken }) => {
const {setUserToken} = useContext(setUserTokenContext)

       
const [inside, setinside] = useState(false)
const [error, seterror] = useState()
const [name, setName] = useState();
const [pass, setPass] = useState(false);
const [match, setmatch] = useState(false);
const [email, setEmail] = useState();
const [password, setPassword] = useState();
const [islogin, setlogin] = useState()

const switchModeHandler =  () => {
  setlogin(prevMode => !prevMode)
  seterror(false)

}



  const handleSubmit = async event => {
    event.preventDefault()
    
    if (!name || name.length < 2){
      seterror('no valid name')
      return
    }
if ( !password || password.length < 6) {
  
  seterror('Password needs to be more than 6')
  return
}

if (!email || email.length < 6){
  seterror('email not good')
  return
}



    const newUser ={
      name,
      email,
      password
    }
	  console.log(newUser)
	  axios
		  .post('http://localhost:5500/api/users/signup', newUser)
		  .then(response => {
			  console.log(response)
        setinside(true)
        
		  })
      .catch(error => {
        Error(error, seterror('couldnt sign up'))
       
		  })
      switchModeHandler()
      
      
  
  }

  const handlelogin = async event => {
    event.preventDefault()
    
    if ( !password || password.length < 6) {
  
      seterror('password needs to be more than 6')
      return
    }
    
    if (!email || email.length < 6){
      seterror('email not valid')
      return
    }
    const loginUser ={
      email,
      password
    }
	
	  axios
		  .post('http://localhost:5500/api/users/login', loginUser)
  
		  .then(response => {
        setUserToken(response.data.token, response.data.user)
			  console.log(response)
        window.location.replace("http://localhost:3000/")
		  })
		  .catch(error => {
        Error(error, seterror('something went worng'))
		  })
  
  }

    return (
        
      <Container text>

        <Header as="h2" block>
          <Icon name="user circle" color="orange"/>
       Connect</Header>
        <Form></Form>
        <Form>

           {error && <Message negative content={error}>
  
            </Message>}
           {inside && <Message color="green">now you can log in</Message>} 
      
        <form error={Boolean(error)} onSubmit={islogin? handlelogin : handleSubmit}>
          {!islogin &&  <Form.Field>
          <label>
            <p>name</p>
            <input type="text" onChange={e => setName(e.target.value)}/>
          </label>
          </Form.Field>}
        <Form.Field>
          <label>
            <p>email</p>
            <input type="text" onChange={e => setEmail(e.target.value)}/>
          </label>
          </Form.Field>
          <label>
            <p>Password</p>
            <input type="password" onChange={e => setPassword(e.target.value)}/>
      
          </label>
          <div>
            <br></br>
            <Button type="submit">{islogin ? 'login ' : 'signup'}</Button>
          </div>
        </form>
        </Form>
        <br></br>
        <Button onClick={switchModeHandler} > switchto {islogin ?  ' signup' :' login'}</Button>
        <div>
        <Image style={{margintop: "5px"}} src='https://images.dog.ceo/breeds/appenzeller/n02107908_5767.jpg' size='medium' rounded bordered /></div>
      </Container>
      
    )
}

export default Auth
