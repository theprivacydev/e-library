const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BookSchema = new Schema([{
    title: { type: String },
    image: {type: String},
    author: { type: Array },
    description: {type: String},
    link: {type: String}
}]);

const Book = mongoose.model('Book', BookSchema);


module.exports = Book;