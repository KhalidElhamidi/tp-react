import React from 'react';

function ListeTaches() {
  return (
    <ul className="liste-taches">
      <li className="tache">
        <span className="titre">Comprendre les composants</span>
      </li>
      <li className="tache terminee">
        <span className="titre">Apprendre le JSX</span>
      </li>
      <li className="tache">
        <span className="titre">Gérer les states</span>
      </li>
    </ul>
  );
}

export default ListeTaches;
