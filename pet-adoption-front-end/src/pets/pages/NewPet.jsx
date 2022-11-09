

import React, { Component } from 'react'
import {useState, useContext} from 'react'
import { Button, Checkbox, Form, Container, Header, Icon, Message} from 'semantic-ui-react'
import  AuthContext, { setUserTokenContext } from '../../users/UserAuth'

import axios from 'axios'

const NewPet = props => {
	const {user} = useContext(setUserTokenContext)

  const [newPet, setNewPet] = useState({
	title: '',
	description: '',
	breed: '',
	diet:'',
	image: '',
	message: '',

  });

  
  const { title, description, breed, diet, image, message} = newPet
  
	function changeHandler (event) {
		const { name, value, files } = event.target;
	
			
			setNewPet(prevState => ({ ...prevState, [name]: value }));
			console.log(newPet)
		
  }
  
  
  
  
  
  
	const  submitHandler = event => {
	
	  console.log(newPet)
	  axios
		  .post('http://localhost:5500/api/pets',{
			title: title,
			description: description,
			breed: breed,
			diet:diet,
			image: image,
			userId: user._id
		  })
		  .then(response => {
			  console.log(response)
			  setNewPet({message:'pet added check it out in all pets'})

		  })
		  .catch(error => {
			  console.log(error)
			  setNewPet({message:'invalid inputs'})
		  })
		  setNewPet({title:('') , description:('') , breed:(''),diet:('') ,image:('') })
  }
  
  return (
	  
<>
 {user ? <Container text>
	<Header as="h2" block>
	  <Icon name="add" color="orange"/>
	  Addpet</Header>
	<Form>
		<div> 


			<form onSubmit={() => submitHandler(user._id)}>
				<div>
	  <Form.Field>
	  <label>
		<p>title</p>
					<input
						type="text"
						name="title"
						value={title}
						onChange={changeHandler}
					/>
		</label>
	  </Form.Field>


				</div>
  
				<div>
		  <Form.Field>
	  <label>
		<p>description</p>
					<input
						type="text"
						name="description"
						value={description}
						onChange={changeHandler}
					/>
	  </label>
	  </Form.Field>
				</div>
	  
				<div>
	  <Form.Group widths='equal'>
	  <Form.Field>
	  <label>
		<p>breed</p>
					<input
						type="text"
						name="breed"
						value={breed}
						onChange={changeHandler}
					/>
	  </label>
	  </Form.Field>
	  <Form.Field>
	  <label>
		<p>diet</p>
					<input
						type="text"
						name="diet"
						value={diet}
						onChange={changeHandler}
					/>
	  </label>
	  </Form.Field>
	  <Form.Field>
	  <label>
		<p>select image</p>
					<input
						type="text"
						name="image"
						value={image}
						onChange={changeHandler}
					/>
	  </label>
	  </Form.Field>
	  </Form.Group>
	  
				</div>

				<Button color="green" type="submit">Submit</Button>
			</form>
 
		</div>
  </Form>
  {message &&<Message><div className="result">{ newPet.message}</div></Message>}
  </Container> :<Message><div className="result">youneed to signup</div></Message>}
  </>
  );
};

export default NewPet





// import React, { Component } from 'react'
// import { Button, Checkbox, Form, Container, Header, Icon} from 'semantic-ui-react'

// import axios from 'axios'

// class NewPet extends Component {
// 	constructor(props) {
// 		super(props)

// 		this.state = {
// 			title: '',
// 			description: '',
// 			breed: '',
//       diet:'',
//       media: '',
//       message: ''
// 		}
// 	}

// 	changeHandler = e => {
// 		this.setState({ [e.target.name]: e.target.value })
//     console.log(this.state)
// 	}

// 	submitHandler = e => {
// 		e.preventDefault()
// 		console.log(this.state)
// 		axios
// 			.post('http://localhost:5500/api/pets', this.state)
// 			.then(response => {
// 				console.log(response)
// 			})
// 			.catch(error => {
// 				console.log(error)
// 			})
//       this.setState({title:('') , description:('') , breed:(''),diet:('') ,message: ('pet added succesfully') })
// 	}

// 	render() {
// 		const { title, description, breed, diet, media, message} = this.state
// 		return (

//       <Container text>
//         <Header as="h2" block>
//           <Icon name="add" color="orange"/>
//           Addpet</Header>
//         <Form>
// 			<div> 
    
   
// 				<form onSubmit={this.submitHandler}>
// 					<div>
//           <Form.Field>
//           <label>
//             <p>title</p>
// 						<input
// 							type="text"
// 							name="title"
// 							value={title}
// 							onChange={this.changeHandler}
// 						/>
//             </label>
//           </Form.Field>


// 					</div>
      
// 					<div>
//               <Form.Field>
//           <label>
//             <p>description</p>
// 						<input
// 							type="text"
// 							name="description"
// 							value={description}
// 							onChange={this.changeHandler}
// 						/>
//           </label>
//           </Form.Field>
// 					</div>
          
// 					<div>
//           <Form.Group widths='equal'>
//           <Form.Field>
//           <label>
//             <p>breed</p>
// 						<input
// 							type="text"
// 							name="breed"
// 							value={breed}
// 							onChange={this.changeHandler}
// 						/>
//           </label>
//           </Form.Field>
//           <Form.Field>
//           <label>
//             <p>diet</p>
// 						<input
// 							type="text"
// 							name="diet"
// 							value={diet}
// 							onChange={this.changeHandler}
// 						/>
//           </label>
//           </Form.Field>
//           <Form.Field>
//           <label>
//             <p>select image</p>
// 						<input
// 							type="file"
// 							name="media"
// 							value={media}
//               label="media"
//               accept="image/*"
//               content="select image"
// 							onChange={this.changeHandler}
// 						/>
//           </label>
//           </Form.Field>
//           </Form.Group>
          
// 					</div>

// 					<Button type="submit">Submit</Button>
// 				</form>
     
// 			</div>
//       </Form>
//       <div className="result">{ this.state.message }</div>
//       </Container>
// 		)
// 	}
// }

// export default NewPet