/**
 * Necessary imports and setup for connecting to our database and populating it with data
 */
const { makeConnection, closeConnection } = require('./mongodb')
const Person = require('../models/person')
const User = require('../models/user')
const bcrypt = require('bcryptjs')

let phonebook = 
[
  { name: 'Valentius', number: '604-234-2195', favourite: true },
  { name: 'Phocas', number: '604-220-6792', favourite: false },
  { name: 'Darius', number: '604-778-2012', favourite: false }
]


/**
 * Make connection and add values internally, then close
 */
const phonebookInsert = async () => {
  await Person.insertMany(phonebook)
}

const userInsert = async () => {
  const genPassword = await bcrypt.hash('special', 10)
  let users = [{ username: 'aleem', passwordHash: genPassword }]
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