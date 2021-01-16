import Flashcard from '../models/flashcard';
const resolvers = {
    Query: {
        async getFlashcard(root, { _id }) {
            return await Flashcard.findById(_id);
        },
        async allFlashcards() {
            return await Flashcard.find();
        },
    },
    Mutation: {
        async createFlashcard(root, { input }) {
            return await Flashcard.create(input);
        },
        async updateFlashcard(root, { _id, input }) {
            return await Flashcard.findOneAndUpdate({ _id }, input, { new: true });
        },
        async deleteFlashcard(root, { _id }) {
            return await Flashcard.findOneAndRemove({ _id });
        },
    },
};
export default resolvers;