# API-s-curis-e-authentification-token

# INSTALLATION DE L'API

Télécharger le repo, lien :https://github.com/LAOM-X/API-s-curis-e-authentification-token.git

Installer les packages: npm install

Lancer le serveur: npm start

Logiciel de test : postman

# UTILISATION DE L'API
Modifiez les paramètres de connexion à la bdd dans le fichier .env

-Créer un utilisateur avec l'endpoint api/register
{"email":"foo@bar.com","password":"1234567"} 
-Récupérer un token avec l'endpoint api/login
{"email":"foo@bar.com","password":"1234567"} 
en retour vous aurez le token et le header "Authorization" qui est le Bearer+token
-Afficher tous les utilisateurs avec une requête Get et en paramétrant "Headers" dans postman
avec "Authorization" en Key et Bearer+token comme value