import React from "react";
import ReactDom from "react-dom";

import "./index.css";
// importing books list from books_list file
// importing named export 
import {books} from "./books_list";
// importing Book component from books_component file
// importing default export
import Book from "./books_component";

function BookList() {
  return (
    <section className="booklist">
      {
        //lisitng items through array
        books.map((book) => {
          // 1. destructuring each book into properties
          // const {img, title, author, price} = book;
          // return (<Book img={img} title={title} author={author} price={price}></Book>)

          // 2. using book property as an object later destrucuting using props.book in BOOK component(this gives warning in console log, as key is missing for prop)
          //return <Book book={book}></Book>;

          //3. using key prop to identify each item uniquley using unique element in list, and use of spread operator {...book} to pass book as seperate properties and not as an object
          return <Book key={book.id} {...book}></Book>;
        })
      }
    </section>
  );
}

ReactDom.render(<BookList />, document.getElementById("root"));
