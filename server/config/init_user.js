/**
 * Necessary imports and setup for connecting to our database and populating it with data
 */
const { makeConnection, closeConnection } = require('./mongodb')
const Person = require('../models/person')
const User = require('../models/user')
let phonebook = 
[
  { name: 'Valentius', number: '604-234-2195', favourite: true },
  { name: 'Phocas', number: '604-220-6792', favourite: false },
  { name: 'Darius', number: '604-778-2012', favourite: false }
]
let users = 
[
  { username: 'aleem', password: 'special' }
]

/**
 * Make connection and add values internally, then close
 */
const phonebookInsert = async () => {
  await Person.insertMany(phonebook)
}

const userInsert = async () => {
  await User.insertMany(users)
}

const init = async () => {
  try {
    await makeConnection()
    await phonebookInsert()
    console.log('successful insertion into phonebook collection')
    await userInsert()
    console.log('successful insertion into user collection')
  } catch (e) {
    console.log('Error initializing: ', e)
  } finally {
    await closeConnection()
  }
}

init()