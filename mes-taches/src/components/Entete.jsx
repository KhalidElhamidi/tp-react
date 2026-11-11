function Entete(props) {
  return (
    <header className="entete">
      <h1>{props.titre}</h1>
      <p>{props.sousTitre}</p>
    </header>
  );
}

export default Entete;
