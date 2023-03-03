//Installation du package MONGOOSE pour notre BDD
const mongoose = require('mongoose');

//Création du schéma mongoose
const sauceSchema = mongoose.Schema({
  userId: {type: String, required: true},
  name: { type: String, required: true },
  manufacturer: { type: String, required: true },
  description: { type: String, required: true },
  mainPepper: { type: String, required: true },
  imageUrl: { type: String, required: true },
  heat: { type: Number, default:0 },
  likes: { type: Number, default: 0 },
  dislikes: { type: Number, default: 0 },
  usersLiked: { type: ["String"]},
  usersDisliked: { type: ["String"]},
});

//Export pour l'utiliser dans les autres fichiers de notre Back End
module.exports = mongoose.model('Sauce', sauceSchema);