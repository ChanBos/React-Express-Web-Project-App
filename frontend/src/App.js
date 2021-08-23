// Imported React libraries, useState and useEffect from React.
import React, { useState, useEffect } from "react";
// Imported stylesheet.
import "./App.css";
// Imported components.
import ProjectTable from "./components/ProjectTable";
import Header from "./components/Header";
import ProjectForm from "./components/ProjectForm";

/**
 * Setting the initial state of the content array.
 */

const App = (props) => {
  const [content, setContent] = useState([]);

  /**
   * Utilizing the fetch() method to get the content from the http://localhost:8080/api's ./web_projects.json.
   * If the request is successful the response will be return all the web projects.
   * If the request is unsuccessful the response will return an error.
   */

  useEffect(() => {
    fetch("/api", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((response) => {
        setContent(response);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  /**
   * Included a link to React Bootstrap and rendering elements.
   * The prop values are passed on the ProjectForm component to update the state of the list of web projects and return the messages.
   * The content state prop is passed on the ProjectTable component to return all content from /api's JSON file.
   * @returns Header and a grid container containing ProjectForm and ProjectTable.
   */

  return (
    <div>
      <link
        rel="stylesheet"
        href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
        integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
        crossOrigin="anonymous"
      ></link>
      <Header />
      <div className="container">
        <ProjectForm setContent={setContent} />
        <ProjectTable contents={content} />
      </div>
    </div>
  );
};

// Exported App.js to index.js.
export default App;
