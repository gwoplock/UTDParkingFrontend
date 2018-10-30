import React, { Component } from "react";
import ListItem from "./ListItem.jsx";

const parkingStatusUrl =
  "https://us-central1-utdapi-217616.cloudfunctions.net/function-1";

let myRequest = new Request("./test.json");
fetch(myRequest)
.then(function(response) {
  return response.blob();
})
.then(function(myBlob) {
  var objectURL = URL.createObjectURL(myBlob);
  myImage.src = objectURL;
});

/*let statusJSon = fetch("./test.json");
for (let i of statusJSon) {
  i.json().then(res => console.log(res));
}*/

class App extends Component {
  render(props) {
    return (
      <div>
        <h1>Prop: {this.props.name}</h1>
        {(function() {
          let rows = [];
          for (let i = 0; i < 4; i++) {
            rows.push(<ListItem text={i} key={i} />);
          }
          return rows;
        })()}
      </div>
    );
  }
}

export default App;
