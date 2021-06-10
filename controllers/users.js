// Dependencies
const bcrypt = require('bcrypt');// for futur use 
const express = require('express'); // we need to require in this express library so we can use the express module
const userRouter = express.Router(); // in server js we pull in the entie express as app...in our users js we just want to pull the routing modeule
const User = require('../models/user.js'); //put stuff and retrueve stuff from the database


// New (registration page AKA sign up page)



// Create (registration route) user thats rgistering or signing up
//note: when checking in postman you need to add users and not just the forward slash
userRouter.post('/', (req, res) => {
    //overwrite the user password with the hashed password with bcrypt.genSaltSynce(10), then pass that in to our database
    req.body.password = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10));
    //creating a user in the database
    User.create(req.body, (error, createdUser) => { //creates a new user--should recieve a mongodb id entry
        // res.send(createdUser);
        res.resdirect('/')
    }); 
});



// Export User Router
module.exports = userRouter;