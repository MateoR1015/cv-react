function Education({ education }) {
  return (
    <section className="section">
      <h2>Educación</h2>

      {education.map((item) => (
        <article className="item-card" key={item.id}>
          <h3>{item.degree}</h3>
          <p>{item.institution}</p>
          <span>{item.period}</span>
        </article>
      ))}
    </section>
  );
}

export default Education;
