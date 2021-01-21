import { Cat } from './schema'

const resolvers = {
    Query: {
        hello: () => 'hello world',
        cats: () => Cat.find()
    },
    Mutation: {
        addCat: (_, { name }) => {
            const newCat = new Cat({ name: { name } })
            newCat.save()
            // between persist/return there should be some sort of error handle
            return newCat
        }
    }
}

export {
    resolvers
}