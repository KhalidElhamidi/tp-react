import React from "react";
import Tache from "./Tache.jsx";

function ListeTaches({ taches }) {
  return (
    <ul className="liste-taches">
      {taches.map((tache) => (
        <Tache key={tache.id} titre={tache.titre} terminee={tache.terminee} />
      ))}
    </ul>
  );
}

export default ListeTaches;
