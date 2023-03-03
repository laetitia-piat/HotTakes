//Installation des packages necessaires + création de leur constante
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const app = express();
//Création des liens pour les routes sauce et user
const saucesRoutes = require('./routes/sauce');
const userRoutes = require('./routes/user')

//Création du lien avec la BDD Mongo Db
mongoose.connect('mongodb+srv://laetitia:Vingt100@atlascluster.iuepoez.mongodb.net/?retryWrites=true&w=majority',
  {useNewUrlParser: true,
  useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));

//Création du 1er Middleware utilisé par l'application ->  Headers sur les réponses pour éviter les erreur CORS
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });

//Utilisation de Express
app.use(express.json());

//Création des url pour lier nos routes 
app.use('/api/sauces', saucesRoutes);
app.use('/api/auth', userRoutes);
app.use('/images', express.static(path.join(__dirname, 'images')));

//Export de l'application "app"
module.exports = app;