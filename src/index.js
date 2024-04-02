var React = require("react");
var ReactDom = require("react-dom");

import randomColor from "randomcolor";

const styleObj = {
  color: "blue",
};

const generateColor = () => {
  let randomColorString = "#";
  const arrayOfColorFunctions = "0123456789abcdef";
  for (let x = 0; x < 6; x++) {
    let index = Math.floor(Math.random() * 16);
    let value = arrayOfColorFunctions[index];

    randomColorString += value;
  }
  return randomColorString;
};

ReactDom.render(
  <div>
    <h1 style={{ color: generateColor() }}>Hello World!</h1>
    <h2 style={{ color: randomColor() }}>My name is Jordan</h2>
    <h3 style={{ color: randomColor() }}>I am handsome pretty human being</h3>
    <h3 style={{ color: generateColor() }}>I love to learn JavaScript</h3>
    <h3 style={{ color: randomColor() }}>I am a super high quality student</h3>
    <h3 style={{ color: generateColor() }}>I am going to be a super star</h3>
  </div>,
  document.getElementById("root")
);
