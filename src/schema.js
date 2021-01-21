import { ApolloServer, gql } from 'apollo-server-express'

// hello query, will RETURN a string
// exclamation means it cannot be null
// we define a supported hello operation
const typeDefs = gql`
    type Query {
        hello: String!
    }
`

const resolvers = {
    Query: {
        hello: () => 'hello world'
    }
}

export {
    typeDefs,
    resolvers
}