const User = require('../models/User');

exports.createUser = (req, res, next) => {
    const User = new User({
      ...req.body
    });
    user.save()
      .then(() => res.status(201).json({ message: 'user enregistré !'}))
      .catch(error => res.status(400).json({ error }));
  }
/*
exports.connectUser = (req, res, next) => {
   
    .then(() => res.status(201).json({ message: 'user enregistré !'}))
    .catch(error => res.status(400).json({ error }));
}
*/