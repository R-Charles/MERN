const Author = require("../models/authors.model");

module.exports.findAllAuthors = (req,res) => {
    Author.find()
    .then(allAuthors => {
        res.json({results: allAuthors})
    })
    .catch(err=> {
        res.json(err)
    })
}

module.exports.createAuthor = (req, res) => {
    Author.create(req.body)
    .then(newAuthor => {
        res.json({results: newAuthor})
    })
    .catch(err => res.status(400).json({err: err}))
}

module.exports.findOneAuthor = (req, res) => {
    Author.findOne({_id: req.params.id})
    .then(Author => {
        res.json({results: Author})
    })
    .catch(err=> {
        res.json(err)
    })
}


module.exports.updateOneAuthor = (req, res) => {
    Author.findOneAndUpdate(
        {_id: req.params.id},
        req.body,
        { new: true, runValidators: true }
        
    )
        .then(updatedAuthor => {
            res.json({results: updatedAuthor})
        })
        .catch(err=> {
            res.json(err)
        })
}

module.exports.deleteAuthor = (req, res) => {
    Author.deleteOne({_id: req.params.id})
    .then(Author => {
        res.json({results: Author})
    })
    .catch(err=> {
        res.json(err)
    })
}