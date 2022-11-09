const express = require('express');

const mongoose =require ('mongoose')
const cors  = require('cors')



const petroutes = require('./routes/pets-routes')
const userroutes = require('./routes/users-routes')
const app = express();

app.use(cors())
app.use(express.json())



app.use('/api/pets', petroutes);
app.use('/api/users', userroutes);


mongoose
.connect('mongodb+srv://etaylevi:Dd123456@petadaption.6yifh.mongodb.net/PetDatabase?retryWrites=true&w=majority')
.then( () => {
    app.listen(5500);
    console.log('connect db')

})
.catch(err => {console.log(err )})
