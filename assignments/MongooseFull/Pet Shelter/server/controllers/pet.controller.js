const Pet = require("../models/pets.model");

module.exports.findAllPets = (req,res) => {
    Pet.find()
    .then(allPets => {
        res.json({results: allPets})
    })
    .catch(err=> {
        res.json(err)
    })
}

module.exports.createPet = (req, res) => {
    console.log(req.body);
    Pet.create(req.body)
    .then(newPet => {
        res.json({results: newPet})
    })
    .catch(err => res.status(400).json({err: err}))
}

module.exports.findOnePet = (req, res) => {
    Pet.findOne({_id: req.params.id})
    .then(Pet => {
        res.json({results: Pet})
    })
    .catch(err=> {
        res.json(err)
    })
}


module.exports.updateOnePet = (req, res) => {
    Pet.findOneAndUpdate(
        {_id: req.params.id},
        req.body,
        { new: true, runValidators: true }
        
    )
        .then(updatedPet => {
            res.json({results: updatedPet})
        })
        .catch(err=> {
            res.json(err)
        })
}

module.exports.deletePet = (req, res) => {
    Pet.deleteOne({_id: req.params.id})
    .then(Pet => {
        res.json({results: Pet})
    })
    .catch(err=> {
        res.json(err)
    })
}