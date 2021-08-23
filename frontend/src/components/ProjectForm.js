// Imported react libraries.
import React, { useState } from "react";
// Imported Icons from Fontawesome.
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faPlus, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
// Imported Form and Button from React Bootstrap.
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
// Imported Swal from sweetalert2.
import Swal from "sweetalert2";

/**
 * Set the initial states of the prop values using the useSate() hook.
 * Utilized the bind() method to pass the data as arguments to the functions.
 */

const ProjectForm = ({ content, setContent }) => {
  const [id, setId] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [URL, setURL] = useState("");

  /**
   * Assigned an event.preventDefault() method to ensure that the page is not refreshed once the create function is executed.
   * Fetching the content from http://localhost:8080/api/create. Utilizing the Post method and added a header to set the content type to JSON.
   * Added the necessary props to alocate values to and stringified the content to be added to the JSON file.
   * If successful a modal (Sweetalert2 - Swal.fire) will appear to confirm success and the content will be added to the UI as objects.
   * If unsuccessful a modal (Sweetalert2 - Swal.fire) will appear displaying an error. An error will occur if all the information is not
   * entered as set in the backend/ server side and the content will be returned unchanged.
   * @param {*} e Posting content to JSON as a string and returning the content as objects to the UI.
   */

  const create = (e) => {
    e.preventDefault();

    fetch("/api/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        description,
        URL,
      }),
    })
      .then((response) => response.json())
      .then((response) => {
        Swal.fire({
          imageUrl: "./media/success.gif",
          imageWidth: 150,
          imageHeight: 150,
          imageAlt: "Error",
          confirmButtonColor: "#007aff",
          width: 400,
          title: "SUCCESS!",
          text: response.message,
        });
        setContent(response.contentCopy);
      })
      .catch((error) => {
        console.log(error);
        Swal.fire({
          imageUrl: "./media/exclamation.gif",
          imageWidth: 150,
          imageHeight: 150,
          imageAlt: "Error",
          confirmButtonColor: "#ff0000",
          width: 400,
          title: "ERROR!",
          text: "User data missing",
        });
      });
  };

  /**
   * Assigned an event.preventDefault() method to ensure that the page is not refreshed once the update function is executed.
   * Fetching the content from http://localhost:8080/api/update/ (an ID should be entered to update that specific web project). Utilizing the
   * Put method and added a header to set the content type to JSON.
   * Added the necessary props to alocate values to and stringified the content to be added to the JSON file.
   * If successful a modal (Sweetalert2 - Swal.fire) will appear to confirm success and the content will be added to the UI as objects.
   * If unsuccessful a modal (Sweetalert2 - Swal.fire) will appear displaying an error. An error will occur if all the information is not
   * entered as set in the backend/ server side and the content will be returned unchanged.
   * @param {*} e Updating content, that exists in the JSON file, as a string and returning the content as objects to the UI.
   */

  const update = (e) => {
    e.preventDefault();

    fetch(`/api/update/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: title,
        description: description,
        URL: URL,
      }),
    })
      .then((response) => response.json())
      .then((response) => {
        Swal.fire({
          imageUrl: "./media/success.gif",
          imageWidth: 150,
          imageHeight: 150,
          imageAlt: "Error",
          confirmButtonColor: "#007aff",
          width: 400,
          title: "SUCCESS!",
          text: response.message,
        });
        setContent(response.contentCopy);
      })
      .catch((error) => {
        console.log(error);
        Swal.fire({
          imageUrl: "./media/exclamation.gif",
          imageWidth: 150,
          imageHeight: 150,
          imageAlt: "Error",
          confirmButtonColor: "#ff0000",
          width: 400,
          title: "ERROR!",
          text: "User data missing",
        });
      });
  };

  /**
   * Assigned an event.preventDefault() method to ensure that the page is not refreshed once the delete function is executed.
   * Fetching the content from http://localhost:8080/api/delete/ (an ID should be entered to update that specific web project). Utilizing the
   * Delete method and added a header to set the content type to JSON.
   * If successful a modal (Sweetalert2 - Swal.fire) will appear to confirm success and the content will be removed from the JSON file and UI.
   * If unsuccessful a modal (Sweetalert2 - Swal.fire) will appear displaying an error.
   * @param {*} e Deleting content that exists in the JSON file.
   */

  const remove = (e) => {
    e.preventDefault();

    fetch(`/api/delete/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((response) => {
        Swal.fire({
          imageUrl: "./media/success.gif",
          imageWidth: 150,
          imageHeight: 150,
          imageAlt: "Error",
          confirmButtonColor: "#007aff",
          width: 400,
          title: "SUCCESS!",
          text: response.message,
        });
        setContent(response.contentCopy);
      })
      .catch((error) => {
        console.log(error);
        Swal.fire({
          imageUrl: "./media/exclamation.gif",
          imageWidth: 150,
          imageHeight: 150,
          imageAlt: "Error",
          confirmButtonColor: "#ff0000",
          width: 400,
          title: "ERROR!",
        });
      });
  };

  /**
   * Added the handleChange() function to the onChange() event to set the new values of the props when values are entered into the input
   * elements.
   * Created buttons for the Web Projects App. Passed onClick() events to create, update and delete web projects.
   * @returns Form with labels, input and button elements that can be used to add, update and delete web projects.
   */

  return (
    <div>
      <Form className="d-flex flex-column">
        <label htmlFor="id">
          Web Project ID:
          <input
            name="id"
            id="id"
            type="text"
            className="form-control"
            value={id}
            onChange={(e) => setId(e.target.value)}
            required
          />
        </label>
        <label htmlFor="title">
          Web Project Title:
          <input
            name="title"
            id="title"
            type="test"
            className="form-control"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </label>
        <label htmlFor="description">
          Web Project Description:
          <input
            name="description"
            id="description"
            type="text"
            className="form-control"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </label>
        <label htmlFor="URL">
          Web Project URL:
          <input
            name="URL"
            id="URL"
            type="text"
            className="form-control"
            value={URL}
            onChange={(e) => setURL(e.target.value)}
          />
        </label>
        <Button
          className="btn btn-primary"
          type="button"
          title="Add Web Project"
          onClick={(e) => create(e)}
        >
          <FontAwesomeIcon icon={faPlus} />
          Add
        </Button>
        <Button
          className="btn btn-info"
          type="button"
          title="Update Web Project"
          onClick={(e) => update(e)}
        >
          <FontAwesomeIcon icon={faEdit} />
          Update
        </Button>
        <Button
          className="btn btn-danger"
          type="button"
          title="Delete Web Project"
          onClick={(e) => remove(e)}
        >
          <FontAwesomeIcon icon={faTrashAlt} />
          Delete
        </Button>
      </Form>
    </div>
  );
};

// Exported Form to App.js.
export default ProjectForm;
