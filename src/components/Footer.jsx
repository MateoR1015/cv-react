function Footer({ name }) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <p>{name}</p>
      <p>Desarrollado con React y buenas prácticas.</p>
      <p>{currentYear}</p>
    </footer>
  );
}

export default Footer;
