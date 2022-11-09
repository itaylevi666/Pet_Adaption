const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');


const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String,
         required: true,
          minlength: 6
         },
  
});

// userSchema.plugin(uniqueValidator);

// userSchema.pre('save', async function(next){
//     const salt = await  bcrypt.genSalt(10)
//     this.password = await bcrypt.hash(this.password, salt)
//     next()
// })

// userSchema.methods.MatchPassword = async function(enteredPassword){
//     return await bcrypt.compare(enteredPassword, this.password)
// }

userSchema.plugin(uniqueValidator);


const User = mongoose.model('User', userSchema)

module.exports = User


