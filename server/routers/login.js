const bcrypt = require('bcryptjs')
const express = require('express')
const loginRouter = express.Router()

/**
 * Import mongoose model
 */
const User = require('../models/user')

/**
 * @receives a POST request to the URL: http://localhost:3001/api/login
 * @returns the user one has logged in with
 */
loginRouter.post('/', async (request, response) => {
  // Get fields
  const { username, password } = request.body
  // Get user
  const user = await User.findOne({ username })
  // Check if password is correct
  const passwordCorrect = user === null
  ? false
  : await bcrypt.compare(password, user.passwordHash)

  if (!passwordCorrect) {
    return response.status(401).json({
      error: 'invalid username or password'
    })
  }
  // Return user information on success
  response.status(200).send(user)
})

module.exports = loginRouter