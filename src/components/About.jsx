function About({ personal }) {
  return (
    <section className="section">
      <h2>Perfil</h2>
      <p>{personal.summary}</p>
    </section>
  );
}

export default About;
