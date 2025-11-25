                                                        Examen Pratique : Développement Full Stack
Description

Ce projet est un exemple d'application Full Stack pour un examen.
Il utilise Angular pour le front-end et Node.js + Express pour le back-end.
L'application permet d'afficher une liste de posts et d'avoir une page de login simple.

Partie I — Front-end (Angular)
Prérequis

Node.js + npm

Angular CLI (npm i -g @angular/cli)

1. Création du projet Angular
# Crée un nouveau projet Angular avec routing et CSS
ng new exam-nom --routing --style=css
cd exam-nom


Description :

--routing : crée automatiquement le module de routage pour gérer la navigation entre pages.

--style=css : utilise le CSS classique pour les styles.

2. Installation de Bootstrap
npm install bootstrap@5


Description :

Installe Bootstrap 5 pour le style et les composants UI (cards, boutons, accordions…).

Ajouter Bootstrap au projet dans angular.json :

"styles": [
  "node_modules/bootstrap/dist/css/bootstrap.min.css",
  "src/styles.css"
]


Permet d’utiliser les classes Bootstrap dans tous les composants Angular.

3. Création du service PostService
ng generate service services/post


Description :

PostService gère la liste des posts.

Fournit une méthode getPosts() qui retourne la liste des posts sous forme d’Observable.

Prépare le service pour plus tard utiliser des appels HTTP vers le backend.

4. Création des composants
ng generate component components/post-list
ng generate component components/post-item
ng generate component pages/login


Description :

post-list : affiche tous les posts avec un Accordion Bootstrap.

post-item : affiche le titre et le contenu d’un post.

login : page de connexion simple.

5. Navbar et structure principale

La barre de navigation permet de passer entre la liste des posts et la page de login.

Le router-outlet sert de conteneur dynamique où les composants seront affichés selon la route.

6. Routes Angular

Définition des routes :

/ : page d’accueil avec la liste des posts

/login : page login

** : redirection vers la page d’accueil si route inconnue

Partie II — Back-end (Node.js + Express)
1. Initialisation du backend
mkdir backend
cd backend
npm init -y
npm install express cors


Description :

Crée le dossier backend et initialise un projet Node.js.

Installe Express pour le serveur et CORS pour autoriser les requêtes cross-origin.

2. Création du serveur Express (server.js)

Serveur sur le port 3000.

API GET /postList retourne une liste de posts.

Sert le build Angular depuis /www.

Toutes les autres routes renvoient index.html (support SPA Angular).

3. Lancer le serveur
# depuis le dossier backend
node server.js
# ou via le script npm
npm start

Partie III — Lier Front-end & Back-end
1. Importer HttpClientModule

Permet aux services Angular de faire des requêtes HTTP vers le backend.

Ajout dans app.module.ts.

2. Modifier PostService pour appeler l’API

getPosts() récupère les posts depuis http://localhost:3000/postList.

Remplace la liste locale par un appel HTTP réel.

3. PostListComponent

Récupère les posts via le service et les affiche dans l’Accordion.

Mise à jour automatique de la vue grâce aux Observables.

4. Générer le build Angular pour le backend
ng build --prod --output-path=backend/www --base-href ./


Génère la version de production Angular dans /backend/www pour que Express puisse la servir.

Git
git init
git add .
git commit -m "Initial commit - frontend angular exam-nom"
git branch version2
git checkout version2

# Associer au repo GitHub
git remote add origin https://github.com/<ton-username>/exam-nom.git
git push -u origin version2
git checkout main
git push -u origin main


Description :

Initialisation du dépôt Git.

Création d’une branche version2.

Push sur GitHub.
