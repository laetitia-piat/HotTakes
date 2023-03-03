//Installation du package MONGOOSE pour notre BDD
const mongoose = require('mongoose');

//Installation du package MONGOOSE UNIQUE VALIDATOR pour vérifier qu'une adresse mail ne serve pas plusieurs fois
const uniqueValidator = require('mongoose-unique-validator')

//Création du schéma mongoose + ajout de la valeur "unique" 
const userSchema = mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
})

userSchema.plugin(uniqueValidator);

//Export pour l'utiliser dans les autres fichiers de notre Back End
module.exports = mongoose.model('User', userSchema);