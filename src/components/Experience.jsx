import { useState } from "react";

function Experience({ experiences }) {
  const [openId, setOpenId] = useState(null);

  const handleToggle = (id) => {
    setOpenId((currentId) => (currentId === id ? null : id));
  };

  return (
    <section className="section">
      <h2>Experiencia y proyectos</h2>

      {experiences.map((experience) => {
        const isOpen = openId === experience.id;

        return (
          <article className="item-card" key={experience.id}>
            <div className="item-header">
              <div>
                <h3>{experience.role}</h3>
                <p>{experience.company}</p>
                <span>{experience.period}</span>
              </div>

              <button
                type="button"
                onClick={() => handleToggle(experience.id)}
                className="toggle-button"
                aria-expanded={isOpen}
              >
                {isOpen ? "Ocultar" : "Ver detalles"}
              </button>
            </div>

            {isOpen && <p className="details">{experience.description}</p>}
          </article>
        );
      })}
    </section>
  );
}

export default Experience;
