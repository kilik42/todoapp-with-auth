const PORT = process.env.PORT || 3000;
const express = require('express');
const app = express();
const pool = require('./db');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');

app.use(bodyParser.json());

app.use(cors());

app.use(express.static(path.join(__dirname, 'client/build')));

app.get('/', (req, res) => {
    res.send('Hello World!');
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});

// get all todos

app.get('/todos',  async (req, res) => {
    res.send('Hello World!');
    const userEmail = req.query.user_email;
    try{
       const todos =   await pool.query('SELECT * FROM todo WHERE user_email = $1', [userEmail]);
       res.json(todos.rows);
    }
    catch(err){
        res.send('Error ' + err);
    }
});
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

