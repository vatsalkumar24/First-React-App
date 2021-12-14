// contains tutorial till  simple list.
import React from "react";
import ReactDom from "react-dom";

//CSS
import "./index.css";

//setup vars
// const title = "You";
// const img_link =
//   "https://images-na.ssl-images-amazon.com/images/I/41DQCk4JCtL._SX320_BO1,204,203,200_.jpg";
// creating objects for ease of use
const firstBook = {
  img: "https://images-na.ssl-images-amazon.com/images/I/41DQCk4JCtL._SX320_BO1,204,203,200_.jpg",
  title: "You",
  author: "Vatsal Sojitra",
  price: 16.99,
};
//use of single div to wrap multiple divs
// function Greeting() {
//   return (
//     <div>
//       <h4>Component Tutorial</h4>
//       <ul>
//         <li>Using 1 Parent div to wrap everthing.</li>
//       </ul>
//     </div>
//   );
// }
// use of React.fragment to wrap mutliple divs
// function Greeting() {
//   return (
//     <React.Fragment>
//       <div>
//         <h4>Component Tutorial</h4>
//       </div>
//       <div>
//         <ul>
//           <li>Using React Fragment to wrap everything and return as 1.</li>
//         </ul>
//       </div>
//     </React.Fragment>
//   );
// }
//nesting components
// function Greeting() {
//   return (
//     <div>
//       <Topic />
//       <Message />
//     </div>
//   );
// }
// //these are seperate components, later used by calling in main component.
// const Topic = () => {
//   return <h4>Component Tutorial</h4>;
// };
// function Message() {
//   return (
//     <ul>
//       <li>Using Nested Components inside Main Component.</li>
//     </ul>
//   );
// }
// ReactDom.render(<Greeting />, document.getElementById("root"));

// main rendering component
function BookList() {
  return (
    <section className="booklist">
      <Book
        // we can render using objects to props
        img={firstBook.img}
        title={firstBook.title}
        author={firstBook.author}
        price={firstBook.price}
      >
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto autem
          molestias eius facere cum labore illum quo consequatur? Minus,
          placeat.
        </p>
      </Book>
      <Book
        // we can render using direct values to props
        img={
          "https://images-eu.ssl-images-amazon.com/images/I/51WVMJ0CsVL._SY264_BO1,204,203,200_QL40_FMwebp_.jpg"
        }
        title={"The Wielder of the Trishul"}
        author={"Satyam Srivastava"}
        price={3.49}
      />
    </section>
  );
}
// use of components and sub components.
// const Book = (props) => {
//   console.log(props);
//   return (
//     <article className="book">
//       <Image />
//       <Title />
//       <Author />
//       {/* for book1 only job prop available so only that will be renedered */}
//       <p>{props.job}</p>
//       {/* similar for book2 */}
//       <p>{props.title}</p>
//       <p>{"$" + 16.99}</p>
//     </article>
//   );
// };

// use of props(properties to give different values to different components)
const Book = (props) => {
  //props destructuring
  const { img, title, author, price, children } = props;
  return (
    <article className="book">
      {/* <Image /> */}
      {/* <img src={props.img} alt="" height="498.99" width="321.99"></img> */}
      <img src={img} alt="" height="498.99" width="321.99"></img>
      {/* <Title /> */}
      {/* <h2>{props.title}</h2> */}
      <h2>{title}</h2>
      {/* <Author /> */}
      {/* <h3
        style={{ color: "#617d98", fontSize: "0.95rem", marginTop: "0.25rem" }}
      >
        {props.author}
      </h3> */}
      <h3
        style={{ color: "#617d98", fontSize: "0.95rem", marginTop: "0.25rem" }}
      >
        {author}
      </h3>
      {/* children prop is rendered this way */}
      {children}
      <p>{"$" + price}</p>
    </article>
  );
};
// const Image = () => {
//   return <img src={img_link} alt="" />;
// };
// // use of variables in JS, and include it as object using {}
// const Title = () => {
//   return <h2>{title}</h2>;
// };
// // inline JSX CSS shown below
// const Author = () => {
//   return (
//     <h3 style={{ color: "#617d98", fontSize: "0.95rem", marginTop: "0.25rem" }}>
//       Vatsal Sojitra
//     </h3>
//   );
// };
ReactDom.render(<BookList />, document.getElementById("root"));
