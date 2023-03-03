//Installation du package MULTER
//Creation du multer -> Gestion des fichiers entrants
const multer = require('multer');

//Format de fichier accepté
const MIME_TYPES = {
  'image/jpg': 'jpg',
  'image/jpeg': 'jpg',
  'image/png': 'png'
};

//Configuration du chemin + nom du fichier pour les fichiers entrants
const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, 'images');
  },
  filename: (req, file, callback) => {
    const name = file.originalname.split(' ').join('_');
    const extension = MIME_TYPES[file.mimetype];
    callback(null, name + Date.now() + '.' + extension);
  }
});

//Export pour l'utiliser dans les autres fichiers de notre Back End
module.exports = multer({storage: storage}).single('image');