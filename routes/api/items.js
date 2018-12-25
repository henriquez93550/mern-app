// This is the API 
const express = require('express');
const router = express.Router();

// Item Model
const Item = require('../../models/Item');

// route GET api/items
// gets all items
// router is used instead of app.get because we are using router
router.get('/', (req, res) => {
    Item.find()
        .sort({ date: -1 }) //.sort is from mongoose, -1 is decending
        .then(items => res.json(items)) // promise that finds items using json, items is form server
});

// route POST api/items
// post items
// router is used instead of app.get because we are using router
router.post('/', (req, res) => {
    const newItem = new Item({  // creates new item
        name: req.body.name
    });
    
    newItem.save().then(item => res.json(item)); //saves the new item
});
// route POST api/items
// delete items
// :id is used as a place holder for any id
router.delete('/:id', (req, res) => {
    Item.findById(req.params.id) // findById is method from mongoose
    .then(item => item.remove().then(() => res.json({ success: true }))) // returns object that says success true
    .catch(err => res.status(404).json({ success: false })); // if there is an error
});

module.exports = router;