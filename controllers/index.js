// Requiring Express.
const express = require("express");
// Requiring the File System Module.
const fileHandler = require("fs");

/**
 * Created global variables.
 */

// Parsing the information so that an array of objects are returned.
const content = JSON.parse(fileHandler.readFileSync("./web_projects.json"));

// Created a saveWrite function to write/ output the information to the JSON file. If an error occurs, the try execution will be stopped and
// an error will be logged.
const saveWrite = (string_content) => {
  try {
    fileHandler.writeFileSync("./web_projects.json", string_content);
  } catch (error) {
    console.error(error);
  }
};

// Created a generateID function to generate random ids for the update and delete functions using Math.floor(), Math.random() and Date.now(). */
const generateID = () => {
  return Math.floor(Math.random() * Date.now());
};

/**
 * GET/ READ:
 * @required  Content.
 * @param {*} req Getting the array of posts.
 * @param {*} res Copy of the content (copyContent).
 * @returns An array listing the current posts that are already written to the JSON file.
 */

/* Requesting the information from the JSON file and retuning the response with the information. */
exports.getController = (req, res) => {
  return res.send(content);
};

/**
 * POST/ CREATE:
 * @required  Body properties: Title, Description, URL.
 * @param {*} req Creating a new post with the property.
 * @param {*} res Updated copy of the content (copyContent).
 * @returns Confirmation message is returned to confirm that the post has been created.
 */

// To ensure that all the information is provided an error will be called if title, description or URL is not completed and set for the content
// to be returned.
exports.createController = (req, res) => {
  if (
    req.body.title == "" ||
    req.body.description == "" ||
    req.body.URL == ""
  ) {
    return res.status(401).send({
      error: true,
      contentCopy,
    });
  }

  // Called the generateID() function to generate a unique id once a new web project is created. Assigned the id to post that is being created.
  const id = generateID();
  const newWebProject = Object.assign({ id }, req.body);

  // Constructed a copy of content to write to.
  // Utilized the push() method to add the the new newWebProject post to the end of the contentCopy's array, and to return the new array
  // displaying the new post.
  let contentCopy = [...content];
  contentCopy.push(newWebProject);

  // Calling the saveWrite function and stringifying the data to write/ output the information to the JSON file.
  saveWrite(JSON.stringify(contentCopy));
  return res.json({
    message: "New web project added!",
    contentCopy,
  });
};

/**
 * PUT/ UPDATE:
 * @required  Body properties: ID, Title, Description, URL.
 * @param {*} req Post with the matching id to be returned and updated with the new post.
 * @param {*} res Updated copy of the content (copyContent).
 * @returns Confirmation message is returned to confirm that the post has been updated.
 */

// To ensure that all the information is provided an error will be called if title, description or URL is not completed and set for the content
// to be returned.
exports.updateController = (req, res) => {
  if (
    req.body.title == "" ||
    req.body.description == "" ||
    req.body.URL == ""
  ) {
    return res.status(401).send({
      error: true,
      contentCopy,
    });
  }

  // Constructed the id request and passed Number to ensure that a number is inputted. Assigned the id to req.body so that the item with the
  // matching id is updated.
  const id = Number(req.params.id);
  const newWebProject = Object.assign({ id }, req.body);

  //Constructed a copy of content to write to.
  let contentCopy = [...content];

  // Using the for loop to loop through the array and return the relevant id and to update the web project.
  // Calling the saveWrite function and stringifying the data to write/ output the information to the JSON file.
  for (let i = 0; i < contentCopy.length; i++) {
    if (contentCopy[i].id === id) {
      contentCopy[i] = newWebProject;
    }
  }
  saveWrite(JSON.stringify(contentCopy));
  return res.json({
    message: "Web project updated!",
    contentCopy,
  });
};

/**
 * DELETE:
 * @required  Body properties: id.
 * @param {*} req Post with the matching id to be deleted.
 * @param {*} res Updated copy of the content (copyContent).
 * @returns Confirmation message is returned to confirm that the post has been deleted.
 */

// Constructed the id request and passed Number to ensure that a number is inputted. Assigned the id to req.body so that the item with the
// matching id is deleted.
exports.deleteController = (req, res) => {
  const id = Number(req.params.id);

  // Constructed a copy of content to write to.
  let contentCopy = [...content];

  // Using the for loop to loop through the array and return the relevant id and to delete the web project.
  // Calling the saveWrite function and stringifying the data to write/ output the information to the JSON file.
  for (let i = 0; i < contentCopy.length; i++) {
    if (contentCopy[i].id === id) {
      contentCopy.splice(i, 1);
    }
  }
  saveWrite(JSON.stringify(contentCopy));
  return res.json({
    message: "Web project deleted!",
    contentCopy,
  });
};
