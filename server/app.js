const express = require('express');
const graphqlHTTP = require('express-graphql');
const mongoose = require('mongoose');
const cors = require('cors');
const schema = require('./schema/schema');

const app = express();

// allow cross-origin requests
app.use(cors());

mongoose.connect('mongodb+srv://admin:admin@kanhai-cluster.fio7e.mongodb.net/graphql?authSource=admin&replicaSet=atlas-13lpv8-shard-0&w=majority&readPreference=primary&appname=MongoDB%20Compass&retryWrites=true&ssl=true', { useNewUrlParser: true });
mongoose.connection.once('open', () => {
    console.log(`connected to database`);
})

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}));

app.listen(4000, () => {
    console.log(`now listening for requests on port 4000`)   
});
