const express = require('express');
const router = express.Router();
const { v4: uuidv4 } = require('uuid');
const {check} = require ('express-validator')
const {validationResult} = require ('express-validator')
const mongoose =require ('mongoose')
// const {HttpError} = require ('../models/httperror')
const Pet = require('../models/petsc')








// router.put('/status/:pid',async (req, res, next) => {

    

// try{
//   Pet = await Pet.findById (req.params.id)
// } catch (err) {
//   throw new Error('failed to update');

//   console.log(Pet)

// // }

// // if (Pet.adopted == 'false')  {
// //   Pet.adopted = 'true'
// //   await Pet.save()
// // } else {
// //   Pet.adopted = 'false'
// //   await Pet.save()
// // }

// // if (Pet.adopted == 'true')  {
// //   Pet.adopted = 'false'
// //   await Pet.save()
// // } else {
// //   Pet.adopted = 'true'
// //   await Pet.save()
// // }



// //   res.status(200).json({Pet : Pet})
// // })


//getallpets
router.get('/',  async (req, res, next) => {
  let pets;
  try {
      pets = await Pet.find()
  } catch (err) {
    throw new Error('couldnotfind');
  }
  if (!pets){
   return  res.status(404).json({messae:'no pets'})
  }

  res.json({pets: pets}); 
});

//get pet by  id

router.get('/:pid', async (req, res, next) => {
  const petId = req.params.pid;
  let pets;
  try {
      pets = await Pet.findById(petId)
  } catch (err) {
    throw new Error('couldnotfind');
  }
  if (!pets){
   return  res.status(404).json({messae:'no pets'})
  }

  res.json({pets: pets}); 
});



//get pet by user id

router.get('/user/:uid', async (req, res, next) => {
  const userId = req.params.uid;
  
  let pets
  try{
  pets = await Pet.find({creator :userId})
} catch (err){
  throw new Error('couldnotfind');
}



if(!pets) {
  return res.status(404).json({messae:'no pets'})
}
res.json({pets}); 
});


router.post('/', check('title').not().isEmpty(), async (req, res, next) =>{
  const  errors = validationResult(req);
  if(!errors.isEmpty()){
    res.status(200).json({message :'invalid input'}) 
     new Error('invalid inputs');
  }
  const { title, description, image, breed, diet, userId} = req.body
  const createdPet = new Pet ({
    title,
    description,
    image ,
    breed,
    diet,
    userId
   
  })
try {
  await createdPet.save()
} catch (err){
  new  Error('create fail');
  
}


  res.status(201).json({createdPet: createdPet})
})
// )


router.put('/:pid', check('title').not().isEmpty(),async (req, res, next) => {

  const { title, description } = req.body;
  const  id = req.params.id

try{
  console.log(req.params.id)
  Pet = await Pet.findById (req.params.id)
} catch (err) {
  next(error)
  throw new Error('failed to update');

}

Pet.title = title
Pet.description= description

  try{
    await Pet.save()
  } catch(err){
    next(error)
    throw new Error('failed to update');
  }
  res.status(200).json({Pet : Pet})
})



router.delete('/:pid',  async  (req, res, next) => {


  const petId = req.params.pid;

  try{
     pet = await Pet.findByIdAndDelete(petId)
    res.status(200)
    res.send(pet)
  }catch(error){
    res.json(error)
    next(error)
  }


});



router.get("/mypets/:uid",  async (req, res, next) => {
	const userId = req.params.uid;
  // const userId = req.user.id;

  let myPets
	try {
		myPets = await Pet.find({ userId });
	} catch (err) {
		throw new Error("could not find");
	}
	if (!myPets) {
		return res.status(404).json({ message: "no users found" });
	}

	res.json({ myPets: myPets });
});





router.put('/save/:uid', 
  
 
async (req, res, next) => { 
//  const newName = req.body.name
//  const newEmail = req.body.email


const userId = req.body.id
const petId = req.params.uid;

console.log(userId)

 console.log(petId)


let user;
try {

  user = await Pet.findById(petId);
  console.log(user)
} catch (err) {
  const error = new Error (
    'Something went wrong, could not update user.',
    500
  );

}

user.userId  = userId;
console.log(user.userId )
await user.save();

try{
  await user.save();
  res.send('updated').json({User : userId})
} catch(err){
  new Error('failes')


}


})




router.put('/delete/:uid', 
  
 
async (req, res, next) => { 
//  const newName = req.body.name
//  const newEmail = req.body.email


const userId = req.body.id
const petId = req.params.uid;

console.log(userId)

 console.log(petId)


let user;
try {

  user = await Pet.findById(petId);
  console.log(user)
} catch (err) {
  const error = new Error (
    'Something went wrong, could not update user.',
    500
  );

}

user.userId  = '';
console.log(user.userId )
await user.save();

try{
  await user.save();
  res.send('updated').json({User : userId})
} catch(err){
  new Error('failes')


}


})
  
  






module.exports = router;