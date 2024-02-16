import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function AddBooks() {
  //state variables to store values of the inputs
  const [bookId, setBookId] = useState("");
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [year, setYear] = useState("");
  const [genre, setGenre] = useState("");
  const [condition, setCondition] = useState("");
  const [price, setPrice] = useState(0);
  const [imageUrl, setImageUrl] = useState("");

  //handler functions for the inputs
  const handleBookId = (e) => setBookId(e.target.value);
  const handleTitle = (e) => setTitle(e.target.value);
  const handleAuthor = (e) => setAuthor(e.target.value);
  const handleYear = (e) => setYear(e.target.value);
  const handleGenre = (e) => setGenre(e.target.value);
  const handleCondition = (e) => setCondition(e.target.value);
  const handlePrice = (e) => setPrice(e.target.value);
  const handleImageUrl = (e) => setImageUrl(e.target.value);

  const navigate = useNavigate();
  const [booksToDisplay, setBooksToDisplay] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const newBook = {
    id,
    title,
    author,
    year,
    genre,
    condition,
    price: Number(price),
    image_url: imageUrl,
  };

  return <div>hello</div>;
}

export default AddBooks;
