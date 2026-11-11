import { useEffect, useState } from "react";
import Entete from "./components/Entete.jsx";
import ListeTaches from "./components/ListeTaches.jsx";
import Pied from "./components/Pied.jsx";
import Carte from "./components/Carte.jsx";
import Tache from "./components/Tache.jsx";
import Compteur from "./components/Compteur.jsx";
import FormulaireAjout from "./components/FormulaireAjout.jsx";
import Filtres from "./components/Filtres.jsx";
import Statistiques from "./components/Statistiques.jsx";
import Horloge from "./components/Horloge.jsx";

function App() {
  const [taches, setTaches] = useState([]);
  const [chargement, setChargement] = useState(true);
  const [erreur, setErreur] = useState(null);
  const [filtre, setFiltre] = useState("toutes");

  //  Chargement des tâches depuis JSON
  useEffect(() => {
    let annule = false;

    fetch("/taches.json")
      .then((reponse) => {
        if (!reponse.ok) throw new Error(`Erreur HTTP ${reponse.status}`);
        return reponse.json();
      })
      .then((donnees) => {
        if (!annule) setTaches(donnees);
      })
      .catch((err) => {
        if (!annule) setErreur(err.message);
      })
      .finally(() => {
        if (!annule) setChargement(false);
      });

    return () => {
      annule = true;
    };
  }, []);

  // Calcul du nombre de tâches restantes
  const nombreRestantes = taches.filter((t) => !t.terminee).length;

  useEffect(() => {
    document.title = `(${nombreRestantes}) Mes tâches`;
  }, [nombreRestantes]);

  function ajouterTache(titre) {
    const nouvelleTache = {
      id: Date.now(),
      titre,
      terminee: false,
    };
    setTaches([...taches, nouvelleTache]);
  }

  function basculerTache(id) {
    setTaches(
      taches.map((tache) =>
        tache.id === id ? { ...tache, terminee: !tache.terminee } : tache,
      ),
    );
  }

  function supprimerTache(id) {
    setTaches(taches.filter((tache) => tache.id !== id));
  }

  const tachesVisibles = taches.filter((tache) => {
    if (filtre === "actives") return !tache.terminee;
    if (filtre === "terminees") return tache.terminee;
    return true;
  });

  return (
    <div className="app">
      <Entete
        titre="Gestionnaire de Tâches"
        sousTitre="Mon premier projet React avec props"
      />

      <main>
        <Carte titre="Heure actuelle">
          <Horloge />
        </Carte>

        <Carte titre="Compteur">
          <Compteur />
        </Carte>

        <Carte titre="Nouvelle tâche">
          <FormulaireAjout onAjouter={ajouterTache} />
        </Carte>

        <Carte titre="Statistiques">
          <Statistiques taches={taches} />
        </Carte>

        <Carte titre="Ma liste">
          {chargement && <p className="vide">Chargement des tâches…</p>}
          {erreur && <p className="erreur">{erreur}</p>}
          {!chargement && !erreur && (
            <>
              <h2>Ma liste</h2>
              <Filtres filtre={filtre} onChanger={setFiltre} />
              <ListeTaches
                taches={tachesVisibles}
                onBasculer={basculerTache}
                onSupprimer={supprimerTache}
              />
            </>
          )}
        </Carte>
      </main>
      <Pied auteur="Kalid EL HAMIDI" />
    </div>
  );
}

export default App;
