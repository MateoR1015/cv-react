function Skills({ skills }) {
  return (
    <section className="section">
      <h2>Habilidades</h2>

      <div className="skills-grid">
        {skills.map((skill) => (
          <article className="skill-card" key={skill}>
            <h3>{skill}</h3>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Skills;
