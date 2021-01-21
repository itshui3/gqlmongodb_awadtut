import { gql } from 'apollo-server-express'

const typeDefs = gql`
    type Query {
        hello: String!
        cats: [Cat!]!
    }

    type Cat {
        id: ID!
        name: String!
    }

    type Mutation {
        addCat(name: String!): Cat!
    }
`

export {
    typeDefs
    
}