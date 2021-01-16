import { gql } from 'apollo-server-express';
const typeDefs = gql `
  type Flashcard {
    _id: ID!
    question: String!
    answer: String!
    isAnswered: Boolean
  }
  type Query {
    getFlashcard(_id: ID!): Flashcard
    allFlashcards: [Flashcard]
  }
  input FlashcardCreateInput {
    question: String!
    answer: String!
  }
  input FlashcardUpdateInput {
    question: String
    answer: String
    isAnswered: Boolean
  }
  type Mutation {
    createFlashcard(input: FlashcardCreateInput) : Flashcard
    updateFlashcard(_id: ID!, input: FlashcardUpdateInput): Flashcard
    deleteFlashcard(_id: ID!) : Flashcard
  }
`;
export default typeDefs;