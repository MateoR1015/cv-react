function Contact({ contact }) {
  return (
    <section className="section">
      <h2>Contacto</h2>
      <div className="contact-grid">
        <p><strong>Correo:</strong> {contact.email}</p>
        <p><strong>Teléfono:</strong> {contact.phone}</p>
        <p><strong>Ciudad:</strong> {contact.city}</p>
      </div>
    </section>
  );
}

export default Contact;
