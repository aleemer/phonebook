import { useState, useEffect } from 'react'

const App = () => {
  const [contacts, setContacts] = useState([
    { id: 1, name: 'Valentinus Velo', number: '604-502-5123', favorite: true },
    { id: 2, name: 'Eric Jandciu', number: '604-213-5621', favorite: true },
    { id: 2, name: 'Greg Wolfgang', number: '778-203-4931', favorite: false },
  ])

  return (
    <div>
      <h1>Phonebook</h1>
      <h2>favourites</h2>
      <h2>contacts</h2>
      <h2>add a contact</h2>
    </div>
  )
}

export default App
