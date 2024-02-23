const ContactForm = () => {
  return (
    <form>
      <div className="contact-form">
          <div><input placeholder="name" name="name"/></div>
          <div><input placeholder="number" name="number"/></div>
          <button>add</button>
        </div>
    </form>
  )
}

export default ContactForm