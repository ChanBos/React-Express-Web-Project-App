// Imported React libraries and Component from React.
import React, { useState } from "react";
// Imported Modal and Button from React Bootstrap.
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
// Imported icon from FontAwesome.
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";

/**
 * Set the initial state of the modal to not show.
 * Set the handlers to show the modal once the handleShow() function is called (boolean = true) and to not show
 * once the onHide() function is called (boolean = false).
 */

const UsageInstructions = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  /**
   * Returning the buttons and the modal that has been created.
   * Passed the "handleShow" handler to the onClick event of the icon/ button.
   * Passed the "handleClose" handler to the onHide event of the top close button and to the onClick event of the "OK" button. The modal will
   * also close if the user clicks "outside of the modal."
   * @returns Buttons that show/ hide modal.
   */

  return (
    <div id="headersection2">
      <h3>
        <FontAwesomeIcon
          icon={faInfoCircle}
          title="Usage Instructions"
          onClick={handleShow}
        />
        Usage Instructions
      </h3>

      <Modal
        show={show}
        onHide={handleClose}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Usage Instructions</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            To <b>CREATE</b> a new web project enter the title, the description
            and the URL into the input fields. An ID will be generated for you.
            Ensure that all the required information is filled in to prevent
            errors from errors occurring. Click on the "<b>Add</b>" button.
          </p>
          <p>
            To <b>UPDATE</b> an existing web project enter the ID and make the
            changes that you wish to make to the title, the description and the
            URL, by inputting the information into the input fields. Ensure that
            all the fields are completed to prevent errors from errors
            occurring. Click on the "<b>Update</b>" button.
          </p>
          <p>
            To <b>DELETE</b> To an existing web project enter the ID of the web
            project that you wish to remove. Click on the "<b>Delete</b>"
            button.
          </p>
          <p>
            The table on the right-hand side will show the list of web projects
            that you have added and will update accordingly if any changes are
            made.
          </p>
          <p>
            For any changes made an alert will appear confirming that the change
            was successful.
          </p>
        </Modal.Body>
        <Modal.Footer>
          <div id="modalfootercontainer1">
            <img src="./media/list.gif" alt="List" />
            <h4 id="modalfootertext">HAPPY LISTING!</h4>
          </div>
          <Button
            variant="primary"
            onClick={handleClose}
            title="OK"
            id="modalfooterbutton"
          >
            OK
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

// Exported UsageInstructions to the Header component.
export default UsageInstructions;
