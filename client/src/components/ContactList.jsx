const Contact = ({ contact }) => {
  return (
    <div className="contact">
      <div>{contact.name}</div>
      <div>{contact.number}</div>
    </div>
  )
}

const ContactList = ({ contacts, favouriteOnly }) => {
  return (
    <div className="contact-list">
      {contacts
        .filter(contact => contact.favourite === favouriteOnly)
        .map(contact => <Contact key={contact.id} contact={contact}/>)}
    </div>
  )
}

export default ContactList