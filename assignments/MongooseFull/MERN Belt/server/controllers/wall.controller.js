const Wall = require("../models/walls.model");

module.exports.findAllWalls = (req,res) => {
    Wall.find()
    .then(allWalls => {
        res.json({results: allWalls})
    })
    .catch(err=> {
        res.json(err)
    })
}

module.exports.createWall = (req, res) => {
    Wall.create(req.body)
    .then(newWall => {
        res.json({results: newWall})
    })
    .catch(err => res.status(400).json({err: err}))
}

module.exports.findOneWall = (req, res) => {
    Wall.findOne({_id: req.params.id})
    .then(Wall => {
        res.json({results: Wall})
    })
    .catch(err=> {
        res.json(err)
    })
}


module.exports.updateOneWall = (req, res) => {
    Wall.findOneAndUpdate(
        {_id: req.params.id},
        req.body,
        { new: true, runValidators: true }
        
    )
        .then(updatedWall => {
            res.json({results: updatedWall})
        })
        .catch(err=> {
            res.json(err)
        })
}

module.exports.deleteWall = (req, res) => {
    Wall.deleteOne({_id: req.params.id})
    .then(Wall => {
        res.json({results: Wall})
    })
    .catch(err=> {
        res.json(err)
    })
}