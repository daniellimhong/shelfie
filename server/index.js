require('dotenv').config();
const express = require('express');
const massive = require('massive');
const { getAllProducts, createProduct } = require('./controller/controller')

const app = express();

app.use(express.json());

const { CONNECTION_STRING, SERVER_PORT } = process.env;

massive(CONNECTION_STRING).then(database => {
    app.set('db', database);
    console.log('Database connection verified')
}).catch(err => console.log(err))

app.get('/api/inventory', getAllProducts)
app.post('/api/inventory', createProduct)

app.listen(SERVER_PORT, () => console.log(`Simulation server listening on port ${SERVER_PORT}`));