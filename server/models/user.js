const mongoose = require('mongoose')

// Person Schema
const userSchema = new mongoose.Schema({
  username: String,
  passwordHash: String
})

userSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
    // the password hash should also be deleted
    delete returnedObject.passwordHash
  }
})

module.exports = mongoose.model('User', userSchema)