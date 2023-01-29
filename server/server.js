const PORT = process.env.PORT || 3000;
const express = require('express');
const app = express();

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
    try{
        const todos = await Todo.find();
        res.json(todos);
    }
    catch(err){
        res.send('Error ' + err);
    }
});
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

