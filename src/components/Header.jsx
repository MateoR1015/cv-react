function Header({ personal }) {
  return (
    <header className="header">
      <div>
        <p className="eyebrow">Hoja de vida</p>
        <h1>{personal.name}</h1>
        <h2>{personal.role}</h2>
        <p>{personal.city}</p>
      </div>
    </header>
  );
}

export default Header;
