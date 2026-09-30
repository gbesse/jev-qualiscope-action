// Objectif : effectuer un appel Jev synthétique uniquement sur demande explicite.
import { createJevClient } from "../src/jev.mjs";
import { planCareQualityAction } from "../src/index.mjs";
const client = createJevClient();
const résultat = await planCareQualityAction({
  "id": "exemple-1",
  "text": "Indicateur dégradé sur deux campagnes avec plan correctif annoncé mais résultat récent non publié.",
  "source": {
    "url": "https://example.test/donnee-source",
    "date": "2026-09-15"
  },
  "details": {
    "territoire": "Commune Exemple",
    "origine": "donnée synthétique"
  }
}, client);
console.log(JSON.stringify({ décision: résultat.decision, confiance: résultat.confidence, usage: résultat.usage }, null, 2));
