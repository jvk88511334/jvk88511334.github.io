# Navigation « Stack » vers le dossier technique

## Objectif

Remplacer la destination du lien « Stack » de la navigation principale par le dossier technique fourni par Jérôme Villiseck, sans fermer le portfolio.

## Comportement attendu

- Le lien « Stack » ouvre `/stack-technique-jerome-villiseck.pdf`.
- Le document s’ouvre dans un nouvel onglet.
- Le lien utilise `target="_blank"` et `rel="noopener noreferrer"` pour isoler le nouvel onglet.
- La section Stack actuelle reste présente dans la page lorsqu’un visiteur fait défiler le portfolio.
- Le PDF est inclus dans les ressources publiques et dans l’export GitHub Pages.

## Ressource

Source locale :

`C:\Users\villiseck.LEVANT\Desktop\compétences\output\pdf\stack-technique-jerome-villiseck.pdf`

Destination publique :

`public/stack-technique-jerome-villiseck.pdf`

## Validation

- Un test de rendu vérifie la destination, l’ouverture dans un nouvel onglet et la relation de sécurité.
- Le test d’export GitHub Pages vérifie la présence du PDF dans `out/`.
- La suite de tests et la construction statique doivent réussir avant publication.
- Après déploiement, la page du portfolio et l’URL publique du PDF doivent répondre en HTTP 200.
