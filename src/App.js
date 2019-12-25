import React from 'react'
import { render } from 'react-dom'
import Pet from './Pet';

const App = () => {
  return (
    <div id="attributes-live-here" >
      <h1>Adopt Me!</h1>
      <Pet name="Luna" animal="cat" breed="Persian" />
      <Pet name="Susu" animal="dog" breed="Pug" />
    </div>
  )

  // The JSX above get translated to this:

  // return React.createElement(
  //   "div", // tag
  //   { id: "attributes-live-here" }, // attribute of the child element
  //   [
  //     React.createElement("h1", {}, "Adopt Me!"),
  //     React.createElement(Pet, {
  //       name: "Luna",
  //       animal: "cat",
  //       breed: "Persian"
  //     }),
  //     React.createElement(Pet, { name: "Susu", animal: "dog", breed: "Pug" })
  //   ] //children
  // );
};

render(<App />, document.getElementById("root"));
