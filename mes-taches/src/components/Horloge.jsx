import { useEffect, useState } from "react";

function Horloge() {
  const [maintenant, setMaintenant] = useState(() => new Date());

  useEffect(() => {
    console.log("Horloge démarrée (setInterval activé)");

    const timer = setInterval(() => {
      setMaintenant(new Date());
    }, 1000);

    return () => {
      console.log("Nettoyage : Horloge arrêtée (clearInterval)");
      clearInterval(timer);
    };
  }, []);

  return <p className="horloge">{maintenant.toLocaleTimeString("fr-FR")}</p>;
}

export default Horloge;
