import 'reflect-metadata'
import {
    ApolloServer
} from 'apollo-server-express'
import express from 'express'
import {
    buildSchema
} from 'type-graphql'
import {
    resolvers
} from './models/main';
import mongoose from 'mongoose';

const main = async () => {
    await mongoose.connect('mongodb+srv://user:user@cluster0.inexffa.mongodb.net/?retryWrites=true&w=majority');
    const schema = await buildSchema({
        resolvers,
        emitSchemaFile: true,
        validate: false,
    });

    const server = new ApolloServer({
        schema,
    })

    const app = express()
    await server.start()
    server.applyMiddleware({
        app
    })

    app.listen(1030, () =>
        console.log('Server is running on http://localhost:1030/graphql')
    )
}

main().catch((error) => {
    console.log(error);
});