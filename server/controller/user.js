var Userdb = require('../model/user')

// Create new user
exports.create = (req, res) => {
    if(!req.body) {
        req.status(400).send({message: "Content cannot be empty!"})
        return;
    }
    
    // Req data from body
    const user = new Userdb({
        name: req.body.username,
        email: req.body.email,
        gender: req.body.password
    })

    // Insert data to mongo
    user
        .save(user)
        .then(data => {
            res.send(data)
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "An error occured"
            });
        });
}



// Retrieve and return all users or a single user
exports.find = (req, res) => {
    if(req.query.id) {
        const id = req.query.id;

        Userdb.findById(id)
        .then(data => {
            if(!data){
                res.status(404).send({
                    message: `Cannot get user with ${id}. Maybe it doesn't exists?`
                })
            } else {
                res.send(data)
            }
        })
        .catch(err => {
            res.status(500).send({
                message: `Error in retreiving ${id}.`
            })
        })    
    }

    else {
        Userdb.find()
        .then(user => {
            res.send(user)
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Error occured upon retrieving user information"
            })
        })
    }
}



// Update User by ID
exports.update = (req, res) => {
    if(!req.body){
    return res
        .status(500)
        .send({
            message: "Data cannot be empty"
        })
    }

    const id = req.params.id;
    Userdb.findByIdAndUpdate(id, req.body, {useFindAndModify: false})
        .then(data => {
            if(!data){
                res.status(404).send({
                        message: `Cannot update user with ${id}. Maybe it doesn't exists?`
                })
            } else {
                res.send(data)
            }
        })
        .catch(err=>{
            res.status(500).send({
                message: "Error in updating the user information"
            })
        })
}



// Delete User by ID
exports.delete = (req, res) => {
    const id = req.params.id;

    Userdb.findByIdAndDelete(id)
        .then(data => {
            if(!data){
                res.status(404).send({
                        message: `Cannot delete user with ${id}. Maybe it doesn't exists?`
                })
            } else {
                res.send({
                    message: "User deleted successfully"
                })
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error in deleting the user information"
            })
        })
}