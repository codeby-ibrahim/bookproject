import mongoose from "mongoose";

const booksschema = new mongoose.Schema({

    title: String,
    name: String,
    category: String,
    price: Number,
    image: String
})
const Book = mongoose.model("Book", booksschema);

export default Book;