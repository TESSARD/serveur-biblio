npm init -y  // création du package
npm i express  // express "--save" -> fonctionnalité inutile à partir de la version npm 5.0.0

node server.js // lancer server.js

# nodemon
npm install --save-dev nodemon // modif prise en charge sans relancer le server
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "nodemon server.js"

## si il y a un problème de restriction de lancemen du script au niveau du Windows il faut 
Démarrer Windows Powershell, en tant qu’Administrateur
Taper la commande :
# set-executionpolicy unrestricted
Valider par « O »

nodemon start //lancer serveur nodemon
npm start / lancer server node sans relancement automatique