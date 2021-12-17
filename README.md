# API-s-curis-e-authentification-token

# INSTALLATION DE L'API

Télécharger le repo, lien :__https://github.com/LAOM-X/API-s-curis-e-authentification-token.git__

Installer les packages: __npm install__

Lancer le serveur: __npm start__

Logiciel de test : __postman__
  
# UTILISATION DE L'API  
Modifiez les paramètres de connexion à la bdd dans le fichier .env  

*Créer un utilisateur avec l'endpoint __api/register__
{"email":"foo@bar.com","password":"1234567"}  
*Récupérer un token avec l'endpoint __api/login__
{"email":"foo@bar.com","password":"1234567"}
en retour vous aurez le token et le header "Authorization" qui est le __'Bearer '+token__  
*Afficher tous les utilisateurs avec une requête Get et en paramétrant "Headers" dans postman
avec "Authorization" en Key et Bearer+token comme value, utiliser l'endpoint __api/users__ 