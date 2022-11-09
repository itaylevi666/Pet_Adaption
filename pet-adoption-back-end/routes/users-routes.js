const express = require('express');
const router = express.Router();
const { v4: uuidv4 } = require('uuid');
const {check} = require ('express-validator')
const {body ,validationResult} = require ('express-validator')
const User = require('../models/usersc')
// const HttpError = require('../models/HttpError');
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken');
const { MongoNetworkError } = require('mongodb');





router.get('/',  async (req, res, next) => {
  let users;
  try {
      users = await User.find()
  } catch (err) {
    throw new Error('couldnotfind');
  }
  if (!users){
   return  res.status(404).json({messae:'no users'})
  }

  res.json({users: users}); 
});




router.post('/signup', check('email').not().isEmpty(),check('name').not().isEmpty(),
async (req, res, next) => {
  const {name, email, password} = req.body


console.log(password)
  let hashedPassword = await bcrypt.hash(password, 10)
  try{
  
 const user = await User.create({
   name, 
   password:hashedPassword,
    email
  })
console.log(user)
res.send(user)

}catch(error){
console.log(error)
}

})



//login

router.post('/login', async (req, res, next) =>{
  const { email, password } = req.body;

  
  try {
    const existingUser = await User.findOne({ email: email });
 
    if (!existingUser) {
     
      const error = new Error(
        'Invalid credentials, could not log you in.',
        401
        );
        return next(error);
      }
      console.log(existingUser.password)
      console.log(password)
       bcrypt.compare(password, existingUser.password,(err,result)=>{
        console.log(result)
       
        
        if (err) next(err)
      else{
        if (result){
          const token = jwt.sign({id:existingUser._id},'secret')
          res.status(201)
          res.send({token, user:existingUser })

        }
        else{
          const error = new Error(
            'worng password',
            401
            );
            return next(error);

        }
      }
      });
    }catch(err){
      next(err)
    }
  }
  )





//change details

  
router.put('/update', 
  
  body('email').isEmpty()
    .normalizeEmail(),
  


async (req, res, next) => { const errors = validationResult(req)
//  const newName = req.body.name
//  const newEmail = req.body.email


const id = req.body.id
const { name, email } = req.body;


 console.log(id)
 console.log(name)
 console.log(email)

let user;
try {
  user = await User.findById(id);
} catch (err) {
  const error = new Error (
    'Something went wrong, could not update user.',
    500 
  );
  return next(err);
}

user.name = name;
user.email = email;
await user.save();

try{
  await user.save();
  res.send('updated').json({User : user})
} catch(err){
  return next(err);



}


})
  



module.exports = router;