const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
// failed the fetch  has been blocked by cors
const cors = require('cors');
const categories = require('./data/categories.json');
// news data
const news = require('./data/news.json');
// call the cors
app.use(cors());

app.get('/', (req, res) =>{
    res.send('Dragon is runing')
});

app.get('/categories', (req, res) =>{
    res.send(categories);
})

// news data
app.get('/news', (req, res) => {
    res.send(news);
})

// specific news paower jonno
app.get('/news/:id', (req, res) =>{
    const id = req.params.id;
    // console.log(id);
    const selectedNews = news.find(n => n._id === id);
    res.send(selectedNews);
})
// category id 
app.get('/categories/:id', (req, res) => {
    const id = parseInt(req.params.id);
    console.log(id)
    if(id === 0){
        res.send(news)
    }
    else{
        const categoryNews = news.filter(n => parseInt(n.category_id) === id);
        res.send(categoryNews);
    }
})

app.listen(port, () => {
    console.log('Dragon api is running port: ${port}')
})