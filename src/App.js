import React, { Component } from "react";
import Navbar from "./Components/Navbar/Navbar";
import CourseList from "./Components/CourseList/CourseList";

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <CourseList />
      </div>
    );
  }
}

export default App;
