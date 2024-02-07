const express = require('express');
const router = express.Router();
const Blog = require('/Users/kima/Desktop/aitu/Web Back /ass3API/models/blogs.js');

router.post('/', async (req, res) => {
    try {
        const { title, body, author } = req.body;
        const blog = new Blog({ title, body, author });
        const savedBlog = await blog.save();
        res.status(201).json(savedBlog);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

router.get('/', async (req, res) => {
    try {
        const blogs = await Blog.find();
        res.json(blogs);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

router.get('/:id', async (req, res) => {
    try {
        const blog = await Blog.findById(req.params.id);
        if (blog) {
            res.json(blog);
        } else {
            res.status(404).json({ message: 'Blog not found' });
        }
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

router.put('/:id', async (req, res) => {
    try {
        const { title, body, author } = req.body;
        const updatedBlog = await Blog.findByIdAndUpdate(req.params.id, { title, body, author }, { new: true });
        res.json(updatedBlog);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

router.delete('/:id', async (req, res) => {
    try {
        await Blog.findByIdAndDelete(req.params.id);
        res.json({ message: 'Blog deleted' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;
