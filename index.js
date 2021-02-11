const { ApolloServer, gql } = require('apollo-server')

// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed 
// against  our data. 

const typeDefs = gql`
   
    # This "Book" type defines the queryable field for every data in our data source. 

    type Book {
        title: String 
        author: String 
    }
    type Query {
        books: [Book]
    }

    # The "Query" type is special: it lists all the available queries that 
    # clients can execute, along with the return for each. In this case,
    # the "books" query returns an array of zero or more (defined above);
`


const books = [ 
    {
        title:  "Dom Casmurro",
        author: "Machados de Assís",
    },
    {
        title: "A árvore da vida",
        author: 'Paul Auster',
    },
]



const resolvers = {
     Query: {
         books: () => books,
     },
};  


const server  = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
});