import logo from "./logo.svg";
import React, { Children, useState } from "react";

const MyButton = ({ title = "defulat", setTitle: renamedSetTitle }) => {
  // you can pass function as props
  function updateTitle() {
    renamedSetTitle("hello world");
  }

  return <button onClick={updateTitle}>{title}</button>;
};

const Title = (props) => {
  const details = { name: "Liron", familyName: "Bregman" };
  // we can also destructured the props
  return (
    props.title && (
      <>
        <props.as>title!</props.as>
        <props.as>title!</props.as>
      </>
    )
  );
};

const Sentence = ({ children }) => {
  return Children.toArray(children).filter(
    (child) => child.props.as === "spin"
  );
};

function App() {
  const [title, setTitle] = useState("Hello");

  // React props can be spread in individually
  const buttonProps = {
    title,
    setTitle,
  };
  // props without value, it's like true // example for as component - see in Title
  return (
    <>
      <MyButton {...buttonProps} />
      <Sentence>
        <Title title as={"div"} />
        <Title title as={"spin"} />
      </Sentence>
    </>
  );
}

export default App;
