import React from 'react'
import UserList from '../components/UserList'
import axios from 'axios'
import {useState, useEffect, useContext} from 'react'
import  AuthContext, { setUserTokenContext } from '../UserAuth'

import { Button, Checkbox, Form, Container, Header, Icon, Message} from 'semantic-ui-react'



const Users = (props) => {
	
	const {user} = useContext(setUserTokenContext)

    const [USERS, setUsers] = useState([]);


	useEffect(() => {
		loadUsers();
	}, []);

	const url = "http://localhost:5500/api/users";
	async function loadUsers() {
		const response = await axios.get(url);
		console.log(response);
		setUsers(response.data.users);
	}

	const [newUser, setNewUser] = useState({
		name: '',
		email: '',
	  });

	  const  updateUser = (id) => {
	  console.log(newUser)
	  axios
		  .put('http://localhost:5500/api/users/update', {
			  id: id,
			  name: name,
			  email: email
		  })
		  .then(response => {
			  console.log(response)
			  setNewUser({message:`Updated on server ,see yourself below  `})

		  })
		  .catch(error => {
			  console.log(error)
			  setNewUser({message:'invalid inputs'})
		  })
		  setNewUser({name:('') , email:('') })
  }
	
	  
	  const { name, email, message} = newUser
	  
		function changeHandler (event) {
			const { name, value, files } = event.target;
		
				
			setNewUser(prevState => ({ ...prevState, [name]: value }));
				console.log(newUser)
			
	  }
	  
	  
	  
	  
    return (
		<>
	
	
	{ user && <Container text>
	 <Header as="h3" block>
	  <Icon name="wheelchair

" color="orange"/>
	  Hey<span style={{color : "coral"}}> {user.name}</span> , you can change your details here </Header>
	<Form>
		<div> 


			<form onSubmit={() => updateUser(user._id)}>
				<div>
	  <Form.Field>
	  <label>
		<p> <span style={{color : "coral"}}>change name to :</span> </p>
					<input
						type="text"
						name="name"
						value={name}
						onChange={changeHandler}
					/>
		</label>
	  </Form.Field>


				</div>
  
				<div>
		  <Form.Field>
	  <label>
	  <p> <span style={{color : "coral"}}>change email to :</span> </p>					<input
						type="text"
						name="email"
						value={email}
						onChange={changeHandler}
					/>
	  </label>
	  </Form.Field>
				</div>
	  


				<Button color="green" type="submit">Update details</Button>
			</form>
 
		</div>
  </Form>
  {message &&<Message><div className="result">{ newUser.message}</div></Message>}
	 </Container>}
  <Message>
<h1>All the users who signup</h1>

	<UserList items={USERS}/></Message>
	</>
	)
   
}

export default Users
