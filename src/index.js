require('dotenv').config()
import express from 'express'

import { ApolloServer } from 'apollo-server-express'

import { typeDefs } from './typeDefs'
import { resolvers } from './resolvers'

import mongoose from 'mongoose'

const app = express();

const server = new ApolloServer({
    typeDefs,
    resolvers
})

server.applyMiddleware({ app })

import { cats } from './builder.js'

mongoose.connect(process.env.DB_URI, {useNewUrlParser: true, useUnifiedTopology: true})

mongoose.connection.once('open', () => {
    console.log('connected to mongodb')

    app.listen({ port: 4000 }, () => { 
        console.log(`Server ready at http://localhost:4000${server.graphqlPath}`) 


        // cats.forEach(cat => {
        //     cat.save()
        // })

    });
})

