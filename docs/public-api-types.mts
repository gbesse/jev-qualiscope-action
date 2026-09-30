// Objectif : vérifier que les types publics sont importables.
import { qualityCase, planCareQualityAction } from "../src/index.mjs";
const dossier = qualityCase({
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
});
void planCareQualityAction(dossier, { decide: async () => ({}) });
