const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
// failed the fetch  has been blocked by cors
const cors = require('cors');
const categories = require('./data/categories.json');
// call the cors
app.use(cors());

app.get('/', (req, res) =>{
    res.send('Dragon is runing')
});

app.get('/categories', (req, res) =>{
    res.send(categories);
})

app.listen(port, () => {
    console.log('Dragon api is running port: ${port}')
})