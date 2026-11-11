import React from "react";
import Entete from "./components/Entete.jsx";
import ListeTaches from "./components/ListeTaches.jsx";
import Pied from "./components/Pied.jsx";
import Carte from "./components/Carte.jsx";
import Tache from "./components/Tache.jsx";

const TACHES = [
  { id: 1, titre: "Installer Node.js et Vite", terminee: true },
  { id: 2, titre: "Comprendre les composants", terminee: true },
  { id: 3, titre: "Passer des données avec les props", terminee: false },
  { id: 4, titre: "Gérer l'état avec useState", terminee: false },
];
function App() {
  return (
    <div className="app">
      <Entete
        titre="Gestionnaire de Tâches"
        sousTitre="Mon premier projet React avec props"
      />
      <Carte titre="Ma liste">
        <h2>Ma liste</h2>
        <ListeTaches taches={TACHES} />
      </Carte>
      <Pied auteur="Kalid EL HAMIDI" />
    </div>
  );
}

export default App;
