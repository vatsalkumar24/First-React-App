import React from "react";

const Book = (props) => {
  //props destructuring for 1. and 3.
  const { img, title, author, price } = props;
  // props destructuring for 2.
  // const { img, title, author, price } = props.book;

  // Event Handling basics
  // ṛequired : attribute, eventHandler
  // for eg: onClick, onMouseOver
  const clickHandler = () => {
    alert("Hello World!");
  };
  const complexExample = (author) => {
    console.log(author);
  };
  return (
    <article
      className="book"
      onMouseOver={() => {
        console.log(title);
      }}
    >
      <img src={img} alt="" height="498.99" width="321.99"></img>
      {/* use of inline function with eventHandler */}
      <h2
        onClick={() => {
          console.log(title);
        }}
      >
        {title}
      </h2>
      <h3
        style={{ color: "#617d98", fontSize: "0.95rem", marginTop: "0.25rem" }}
      >
        {author}
      </h3>
      <p>{"$" + price}</p>
      {/* use of predefined function with eventHandler */}
      <button type="button" onClick={clickHandler}>
        onClick Event example
      </button>
      {/* Most Important: use inline function to call a function if it required arguements to be passes */}
      <button type="button" onClick={() => complexExample(author)}>
        Complex event example
      </button>
    </article>
  );
};
// only 1 default export per file is allowed
export default Book;
