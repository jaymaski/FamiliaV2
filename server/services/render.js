const axios = require('axios');

exports.login = (req, res) => {
    res.render('parts/login');
}

exports.dashboard = (req, res) => {
    res.render('parts/dashboard');
}

exports.displayUsers = (req, res) => {
    axios.get('http://localhost:3000/api/users')
        .then(function(response){
            res.render('user/view', {users: response.data});
        })
        .catch(err => {
            res.send(err);
        })
}

exports.addUser = (req, res) => {
    axios.post('http://localhost:3000/api/users')
        .then(function(response){
            res.render('user/addUser', {users: response.data});
        })
        .catch(err => {
            res.send(err);
        })
}