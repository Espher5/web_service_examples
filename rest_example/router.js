const express = require('express');
const request = require('request');
const router = express.Router();
const path = require('path');

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/index.html'));
});

router.get('/users', (req, res) => {
    request('https://jsonplaceholder.typicode.com/users', {json: true}, (err, response) => {
        const users = response.body;
        console.log(users);
        res.send(users);
    });
});

// Retrive user with given username and zipcode
// Example query: http://localhost:3000/user?username=Bret&zipcode=92998-3874
router.get('/user', (req, res) => {
    console.log("Called POST /user endpoint");
    const username = req.query.username;
    const zipcode = req.query.zipcode;
    console.log(username);
    console.log(zipcode);
    request('https://jsonplaceholder.typicode.com/users', {json: true}, (err, response) => {
        const users = response.body;
            
        users.forEach(element => {
            if(element.username == username && element.address.zipcode == zipcode) {
                console.log(element);
                res.send(element);
            }
        });
    });
});


// Retrive user with given id
//Example query http://localhost:3000/user/7
router.get('/user/:id', (req, res) => {
    const id = req.params.id;
    let user;
    console.log('ID:', id); 

    request('https://jsonplaceholder.typicode.com/users', {json: true}, (err, response) => {
        const users = response.body;
        
        users.forEach(element => {
            if(element.id == id) {
                user = element;
            }
        });
        res.send(user);
    });
});


// Retrive user with given username and zipcode
// Example query: http://localhost:3000/user
// Remember params in body
router.post('/user', (req, res) => {
    console.log("Called POST /user endpoint");
    const username = req.body.username;
    const zipcode = req.body.zipcode;
    console.log(username);
    console.log(zipcode);
    request('https://jsonplaceholder.typicode.com/users', {json: true}, (err, response) => {
        const users = response.body;
            
        users.forEach(element => {
            if(element.username == username && element.address.zipcode == zipcode) {
                console.log(element);
                res.send(element);
            }
        });
    });
});


module.exports = router;