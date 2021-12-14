import React from "react";
import ReactDom from "react-dom";

import "./index.css";
// use of SIMPLE LIST, like array of items
// books is now a list/array
const books = [
  {
    img: "https://images-na.ssl-images-amazon.com/images/I/41DQCk4JCtL._SX320_BO1,204,203,200_.jpg",
    title: "Me",
    author: "Vatsal Sojitra",
    price: 14.99,
  },
  {
    img: "https://images-na.ssl-images-amazon.com/images/I/41DQCk4JCtL._SX320_BO1,204,203,200_.jpg",
    title: "You",
    author: "Vatsal Sojitra",
    price: 16.99,
  },
];
// example of list and mapping
// const names = [ 'abc', 'def', 'ghi'];
// const newNames = names.map((name)=>{
//   console.log(name);
//   return <h1>{name}</h1>
// })
function BookList() {
  return (
    <section className="booklist">
      {
        //lisitng items through array
        books.map((book) => {
          // 1. destructuring each book into properties
          // const {img, title, author, price} = book;
          // return (<Book img={img} title={title} author={author} price={price}></Book>)

          // 2. using book property as it is and later destrucuting using props.book in BOOK component
          return <Book book={book}></Book>;
        })
      }
    </section>
  );
}
const Book = (props) => {
  //props destructuring for 1.
  // const { img, title, author, price } = props;
  // props destructuring for 2.
  const { img, title, author, price } = props.book;
  return (
    <article className="book">
      <img src={img} alt="" height="498.99" width="321.99"></img>
      <h2>{title}</h2>
      <h3
        style={{ color: "#617d98", fontSize: "0.95rem", marginTop: "0.25rem" }}
      >
        {author}
      </h3>
      <p>{"$" + price}</p>
    </article>
  );
};
ReactDom.render(<BookList />, document.getElementById("root"));
