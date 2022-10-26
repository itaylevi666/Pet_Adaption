const mongoose =require ('mongoose')
const uniqueValidator   = require('mongoose-unique-validator')


const Schema = mongoose.Schema;

const petSchema = new Schema({

    title: { type: String, required : true},
    description: { type: String, required : true},
   image : { type: String, required : true},
   breed :{ type: String, required : true},
   diet :{ type: String, required : true},
   userId :{ type: String},




})

petSchema.plugin(uniqueValidator)

module.exports = mongoose.model('Pet',petSchema )