// Imported React libraries from React.
import React from "react";

/**
 * Created a table to display the web projects. Returning the elements.
 * Looping through the content array and assigning the props to the respective table data cells for displaying purposes.
 */

const ProjectTable = ({ contents }) => {
  return (
    <div>
      <h6>Web Projects:</h6>
      <table>
        <thead>
          <tr>
            <th id="th-cell-left">ID:</th>
            <th>Title:</th>
            <th>Description:</th>
            <th id="th-cell-right">URL:</th>
          </tr>
        </thead>
        <tbody>
          {contents.map((contents) => (
            <tr key={contents.id}>
              <td>{contents.id}</td>
              <td>{contents.title}</td>
              <td>{contents.description}</td>
              <td>{contents.URL}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

// Exported Projects to App.js.
export default ProjectTable;
