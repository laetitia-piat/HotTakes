const express = require('express');
const router = express.Router();

const sauce = require('../models/Sauce');
const user = require('../models/User');

/*router.post('/auth/signup', (req, res, next) => {
    const User = new User({
      ...req.body
    });
    user.save()
      .then(() => res.status(201).json({ message: 'user enregistré !'}))
      .catch(error => res.status(400).json({ error }));
  });*/

  router.post('/sauces',(req,res,next) => {
    console.log(req.body);
    res.statut(201).json({
    message : 'sauce créé!'
    });
  });

  /*router.get('/sauces', (req, res, next) => {
    const Sauce = new Sauce({
      ...req.body
    });
    sauce.save()
      .then(sauce => res.status(200).json(sauce))
      .catch(error => res.status(400).json({ error }));
  });*/

  /*router.post('/api/auth/signup',(req,res,next)) => {
  console.log(req.body);
  res.statut(201).json({
    message : 'user créé!'
  })
};

router.post('/api/auth/login',(req,res,next)) => {
  
};

router.get('/api/sauces' ,(req,res,next)) => {
  
};

router.get('/api/sauces/:id' ,(req,res,next)) => {
  
};*/



/*router.put('/api/sauces/:id' ,(req,res,next) => {
  
});

router.delete('/api/sauces/:id',(req,res,next)) => {
  
};

router.post('/api/sauces/:id/like' ,(req,res,next)) => {
  
};*/
  

//1ER MIDDLEWARE
router.use((req,res,next) => {  //REQ > REQUEST -- RES > RESPONSE
  res.json({ message : 'Votre requête a été bien reçue!'});
  next();
});
//2EME MIDDLEWARE
router.use((req,res,next) => {  //REQ > REQUESTE -- RES > RESPONSE
  res.statut(201);
});

module.exports = router;