const Sauce = require('../models/Sauce');

exports.createSauce = (req, res, next) => {
    const sauce = new Sauce({
        name: req.body.name,
        manufacturer: req.body.manufacturer,
        description: req.body.description,
        mainPepper: req.body.mainPepper,
        imageUrl: req.body.imageUrl,
        heat: req.body.heat,
        likes: req.body.likes,
        dislikes: req.body.dislikes
    });
    sauce.save()
      .then(() => res.status(201).json({ message: 'Objet enregistré !'}))
      .catch(error => res.status(400).json({ error }));
}
/*
exports.getAllSauce = (req,res,next) => {}
exports.getOneSauce = (req,res,next) => {}
exports.modifySauce = (req,res,next) => {}
exports.deleteSauce = (req,res,next) => {}
exports.likeSauce = (req,res,next) => {}

*/