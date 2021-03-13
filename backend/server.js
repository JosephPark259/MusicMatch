import express from 'express';
import mongoose from 'mongoose';
import cards from './schema/dbCards.js';
import cors from 'cors';

require('dotenv').config();
//App Config
const app = express();
const port =  process.env.PORT || 3001;
const connection_url = `mongodb+srv://admin:${process.env.MONGO_PASS}@cluster0.bvf8g.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
//Middlewares
app.use(cors());
app.use(express.json())
// DB congfig
mongoose.connect(connection_url,{
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology:true,
})
//API Endpoints
app.get('/', (req,res) => res.status(200).send("hello"));

// post single card
app.post('/musicmatch/card',(req,res) => {
    const dbCard = req.body;

    cards.create(dbCard,(err, data) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(201).send(data);
        }
    })
});

// get ALL cards
app.get('/musicmatch/card',(req,res) => {

    cards.find((err, data) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(200).send(data);
        }
    });
});
//Listener
app.listen(port, () => console.log(`listening on port: ${port}`));