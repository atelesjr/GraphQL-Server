const express = require('express');
//BY convention use capitals like below.
const expressGraphQL = require('express-graphql');
const schema = require('./schema/schema');

const app = express();

app.use('/graphql', expressGraphQL({
    schema, // sama as schema: schema
    graphiql: true //use i here. It is a tool that alllow to make queries against dev server 
    //only intended to use in a dev enviroment.
}));

app.listen(4000, () => {
    console.log('Listening');
});