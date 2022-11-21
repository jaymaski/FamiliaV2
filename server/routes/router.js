const express = require('express');
const route = express.Router();

const services = require('../services/render');
const user = require('../controller/user');
const member = require('../controller/members');


// Parts Route
route.get('/login', services.login)
route.get('/dashboard', services.dashboard)

// User Route
route.get('/users', services.displayUsers)
route.get('/addUser', services.addUser)

// User API
route.post('/api/users', user.create);
route.get('/api/users', user.find);
route.put('/api/users/:id', user.update);
route.delete('/api/users/:id', user.delete);

// Member Route
route.get('/users', services.displayMembers)
route.get('/addUser', services.add)

// Member API
route.post('/api/members', member.create);
route.get('/api/members', member.find);
route.put('/api/members/:id', member.update);
route.delete('/api/members/:id', member.delete);

module.exports = route;