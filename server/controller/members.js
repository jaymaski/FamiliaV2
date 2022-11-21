var Memberdb = require('../model/members')

// Create new member
exports.create = (req, res) => {
    if(!req.body) {
        req.status(400).send({message: "Content cannot be empty!"})
        return;
    }
    
    // Req data from body
    const member = new Memberdb({
        name: req.body.firstName,
        email: req.body.lastName,
        gender: req.body.middleName,

        name: req.body.gender,
        email: req.body.bloodType,
        gender: req.body.birthday,
        name: req.body.address,
        name: req.body.workAddress,
        name: req.body.nickname,
        name: req.body.cellphone,
        name: req.body.telephone,
        name: req.body.primaryRole,
        name: req.body.secondaryRole,
        name: req.body.civilStatus,
        name: req.body.area,
        name: req.body.parish,
        name: req.body.photoPostFile,
        name: req.body.yearJoined,
        name: req.body.ministry,
        name: req.body.email,
        name: req.body.notes,
        name: req.body.userId,
        name: req.body.homecellHead

    })

    // Insert data to mongo
    member
        .save(member)
        .then(data => {
            res.send(data)
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "An error occured"
            });
        });
}



// Retrieve and return all members or a single member
exports.find = (req, res) => {
    if(req.query.id) {
        const id = req.query.id;

        Memberdb.findById(id)
        .then(data => {
            if(!data){
                res.status(404).send({
                    message: `Cannot get member with ${id}. Maybe it doesn't exists?`
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
        Memberdb.find()
        .then(member => {
            res.send(member)
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Error occured upon retrieving member information"
            })
        })
    }
}



// Update member by ID
exports.update = (req, res) => {
    if(!req.body){
    return res
        .status(500)
        .send({
            message: "Data cannot be empty"
        })
    }

    const id = req.params.id;
    Memberdb.findByIdAndUpdate(id, req.body, {useFindAndModify: false})
        .then(data => {
            if(!data){
                res.status(404).send({
                        message: `Cannot update member with ${id}. Maybe it doesn't exists?`
                })
            } else {
                res.send(data)
            }
        })
        .catch(err=>{
            res.status(500).send({
                message: "Error in updating the member information"
            })
        })
}



// Delete member by ID
exports.delete = (req, res) => {
    const id = req.params.id;

    Memberdb.findByIdAndDelete(id)
        .then(data => {
            if(!data){
                res.status(404).send({
                        message: `Cannot delete member with ${id}. Maybe it doesn't exists?`
                })
            } else {
                res.send({
                    message: "Member deleted successfully"
                })
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error in deleting the member information"
            })
        })
}