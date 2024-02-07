# CRUD API with Node.js and MongoDB

This project implements a fully functional CRUD API for a simple blogging platform using Node.js and MongoDB.

## Table of Contents
1. [Introduction](#introduction)
2. [Features](#features)
3. [Requirements](#requirements)
4. [Installation](#installation)
5. [Usage](#usage)
6. [Endpoints](#endpoints)
7. [License](#license)

## Introduction
This CRUD API allows users to perform Create, Read, Update, and Delete operations on blog posts. It provides endpoints to create new posts, retrieve all posts, retrieve a single post by ID, update a post, and delete a post.

## Features
- Create new blog posts
- Retrieve all blog posts
- Retrieve a single blog post by ID
- Update an existing blog post
- Delete a blog post

## Requirements
- Node.js
- MongoDB
- npm or yarn

## Installation
1. Clone the repository:
   ```bash
   git clone <repository-url>
Navigate to the project directory:

bash
Copy code
cd crud-api-node-mongodb
Install dependencies:

bash
Copy code
npm install
Create a .env file in the project root and add your MongoDB URI:

env
Copy code
MONGO_URI=<your-mongodb-uri>
Start the server:

bash
Copy code
npm start
Usage
Once the server is running, you can interact with the API using tools like Postman. Send requests to the provided endpoints to perform CRUD operations on blog posts.

Endpoints
POST /blogs: Create a new blog post
GET /blogs: Retrieve all blog posts
GET /blogs/:id: Retrieve a single blog post by ID
PUT /blogs/:id: Update a blog post by ID
DELETE /blogs/:id: Delete a blog post by ID
License
This project is licensed under the MIT License.
