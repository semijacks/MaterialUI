import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Course from "../Course/Course";
import * as contentful from "contentful";

const SPACE_ID = "e8drzbikyrej";
const ACCESS_TOKEN =
  "4e816bc09519ff8d67b0c20d95a0b2c6825d6b91d7e689c10254d0ed34423e9c";

const client = contentful.createClient({
  space: SPACE_ID,
  accessToken: ACCESS_TOKEN
});

class CourseList extends Component {
  state = {
    courses: [],
    searchString: ""
  };

  constructor() {
    super();
    this.getCourses();
  }

  getCourses = () => {
    client
      .getEntries({
        content_type: "course",
        query: this.state.searchString
      })
      .then(response => {
        this.setState({ courses: response.items });
      })
      .catch(error => {
        console.log("error fetching data");
        console.log(error);
      });
  };

  onSearchInputChange = event => {
    if (event.target.value) {
      this.setState({ searchString: event.target.value });
    } else {
      this.setState({ searchString: "" });
    }
    this.getCourses();
  };

  render() {
    return (
      <React.Fragment>
        <div>
          {this.state.courses ? (
            <div>
              <TextField
                style={{ padding: 24, display: "flex" }}
                id="searchInput"
                placeholder="search for courses"
                margin="normal"
                onChange={this.onSearchInputChange}
              />
              <Grid container spacing={24} style={{ padding: 24 }}>
                {this.state.courses.map(currentCourse => (
                  <Grid item xs={12} sm={6} lg={4} xl={3}>
                    <Course course={currentCourse} margin="normal" />
                  </Grid>
                ))}
              </Grid>
            </div>
          ) : (
            "no courses found"
          )}
        </div>
      </React.Fragment>
    );
  }
}

export default CourseList;
