const Contact = ({ contact, onDelete, onUpdate }) => {
  return (
    <div className="contact">
      <div>{contact.name}</div>
      <div>{contact.number}</div>
    </div>
  )
}

const ContactList = ({ contacts, favouriteOnly, onDelete, onUpdate }) => {
  return (
    <div className="contact-list">
      {contacts
        .filter(contact => contact.favourite === favouriteOnly)
        .map(contact => <Contact key={contact.id} contact={contact} onDelete={onDelete} onUpdate={onUpdate} />)}
    </div>
  )
}

export default ContactList