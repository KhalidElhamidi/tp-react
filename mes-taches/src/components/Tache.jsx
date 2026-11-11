function Tache({ titre, terminee }) {
  return (
    <li className={terminee ? "tache terminee" : "tache"}>
      <span className="icone">{terminee ? '✅' : '⬜'}</span>
      <span className="titre">{titre}</span>
    </li>
  );
}

export default Tache;