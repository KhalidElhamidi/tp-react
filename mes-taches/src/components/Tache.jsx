import { useState } from "react";

function Tache({ id, titre, terminee, onBasculer, onSupprimer, onModifier }) {
  const [estEnEdition, setEstEnEdition] = useState(false);
  const [nouveauTitre, setNouveauTitre] = useState(titre);

  function validerModification() {
    const titreNettoye = nouveauTitre.trim();
    if (titreNettoye !== '') {
      onModifier(id, titreNettoye);
    } else {
      setNouveauTitre(titre); // Réinitialise si le titre est vide
    }
    setEstEnEdition(false);
  }

  function gererTouche(e) {
    if (e.key === 'Enter') {
      validerModification();
    } else if (e.key === 'Escape') {
      setNouveauTitre(titre);
      setEstEnEdition(false);
    }
  }

  return (
    <li className={terminee ? "tache terminee" : "tache"}>
      <input
        type="checkbox"
        checked={terminee}
        onChange={() => onBasculer(id)}
      />
      
      {estEnEdition ? (
        <input
          type="text"
          className="input-edition"
          value={nouveauTitre}
          onChange={(e) => setNouveauTitre(e.target.value)}
          onBlur={validerModification}
          onKeyDown={gererTouche}
          autoFocus
        />
      ) : (
        <span 
          className="titre" 
          onDoubleClick={() => setEstEnEdition(true)}
          title="Double-cliquez pour modifier"
        >
          {titre}
        </span>
      )}

      <button className="danger" onClick={() => onSupprimer(id)}>
        Supprimer
      </button>
    </li>
  );
}

export default Tache;
