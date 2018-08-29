import express from 'express';
import graphqlHTTP from 'express-graphql';
import { schema } from './data/schema';

/*
 Mongo DB Location:
 C:\Program Files\MongoDB\Server\4.0\data\
*/

const app = express();

app.get('/', (req, res) => {
    res.send('GraphQL Is Amazing!!');
});

app.use('/graphql', graphqlHTTP({
    schema: schema,
    graphiql: true,
}));

app.listen(8080, () => console.log('Running Server on port localhost:8080/graphql'));