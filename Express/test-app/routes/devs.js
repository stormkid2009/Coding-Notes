const router = require('express').Router();
const fs = require('fs');
const path = require('../data.json');
const addHelper = require('../add');
const deleteHelper = require('../delete');




router.route('/')
.get((req,res)=>{
    res.status(200).json(path)
})

router.route('/add')
.post((req,res)=>{
    let data = req.body;
    //we use our helper function to read and write from data.json
    addHelper('./data.json',data);
    res.status(200).send(`file updated successfully`);
})

router.route('/delete')
.delete((req,res)=>{
    let user = req.body;
    console.log(user.name);
    deleteHelper('./data.json',user);
    res.status(200).send(`user has been removed successfully`)
    
})
module.exports = router;