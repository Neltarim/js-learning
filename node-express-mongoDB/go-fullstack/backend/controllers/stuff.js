const Thing = require('../models/Thing');

exports.createThing = (req, res, next) => { // create a new element
    delete req.body._id;
    const thing = new Thing({ ...req.body }); // '...' make a copy of all elements (spread)

    thing.save()
        .then(() => res.status(201).json({ message: 'Object registered.' }))
        .catch(error => res.status(400).json({ error }));
};

exports.getOneThing = (req, res, next) => { // Get one element
    Thing.findOne({ _id: req.params.id })
      .then(thing => res.status(200).json(thing))
      .catch(error => res.status(404).json({ error }));
};

exports.modifyThing = (req, res, next) => { // modify an element
    Thing.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id })
        .then( () => res.status(200).json({ message: 'Object modified !' }))
        .catch(error => res.status(400).json({ error }));
};

exports.deleteThing = (req, res, next) => {  // delete an element
    Thing.deleteOne({ _id:req.params.id })
        .then(() => res.status(200).json({ mesage: 'Object deleted !'}))
        .catch(error => res.status(400).json({ error }));
};

exports.getAllThings = (req, res, next) => { // get all elements
    Thing.find()
        .then(things => res.status(200).json(things))
        .catch(error => res.status(400).json({ error }));
};