const express = require('express');
const mongodb = require('mongodb');
const router = express.Router();

//Get Post
router.get('/', async(req, res) => {
    const posts = await loadPostsCollections();
    res.send(await posts.find({}).toArray());
})

// Add Post
router.post('/', async (req, res) => {
    const posts = await loadPostsCollections();
    await posts.insertOne({
        text: req.body.text,
        createdAt: new Date()
    })
    res.status(201).send();

})

// Delete
router.delete('/:id', async (req, res) => {
    const posts = await loadPostsCollections();
    posts.deleteOne({_id: new mongodb.ObjectID(req.params.id)});
    res.status(200).send()

})

async function loadPostsCollections(){
    const client = await mongodb.MongoClient.connect('mongodb://icehazard:<PASSWORD>@ds123372.mlab.com:23372/icehazard_vue_express', {
        useNewUrlParser: true
    });
    return client.db('icehazard_vue_express').collection('posts')
}

module.exports = router;