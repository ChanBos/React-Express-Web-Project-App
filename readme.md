# Postman Testing

This is a simple application to show you how to use Postman to test APIs, making use of Get, Post, Put and Delete requests.

These operations are often referred to as CRUD (Create, Read, Update and Delete) operations. Please see below a brief description of these operations:

- Get/ Read:
  Used to get a specific resource from the server.
- Post/ Create:
  Used to submit some data about a specific entity to the server.
- Put/ Update:
  Used to update a piece ofdata about a specific object on the server.
- Delete:
  Used to delete a specific object.

The following files have been created and included in the folder, comprising of all the necessary functions and data that will be required to execute these operation tests in Postman:

- App.js
- Index.js
- web_projects.json

The end-goal of this is to teach you how to test the API with the Postman and to enable you to do so in future with the utmost confidence.

### Table of Contents:

=================

- [Installation](#installation)
- [Usage Instructions](#usage-instructions)
- [Credits](#credits)

### Installation

#### Postman:

1. To download Postman visit https://www.postman.com/downloads/ and click on the "Download the App" button and pick the option according to your operating system specifications. This is a free service, so there will be no charges for using this application. The download should start automatically.

2. Once downloaded, follow the prompts to install the application and create an account.

3. You will receive an email to activate your account. Click on the "Confirm My Email button to verify your email address.

#### The application:

To run this project, do the following:

1. Navigate to the directory, containing the application's folder from the command line interface.

```
cd "C:\Users\user..."
```

2. In the command line interface type the following to install all of the neccessary node modules:

```
npm install
```

3. In the command line interface type the following to run the application in development mode:

```
npm start
```

4. Open http://localhost:8080/api to view the application in the browser.

### Usage Instructions

Open the Postman application and click on the "Workspaces" dropdown and create a new workspace by clicking on "+ New Workspace". Next to the "Overview" tab there is a "+". Click on this to create a new tab.

This should display a new section with a dropdown menu that allows you to select the test request (get, post, put and delete). Next to this there is an input field "Enter request URL" where you insert the URL you wish to test. The "Send" button may be clicked on to execute the test. At the bottom there is an area where any responses will be returned.

Please see below a detailed explanation on how to test the create, read, update and delete functions in the Postman application below:

1. Get/ Read:

- Enter the following URL in the "Enter request URL" input area:
  http://localhost:8080/api

- Select "READ" on the dropdown menu and click on the "Send" button. The following data should be populating the "Response" area of the page:

```
[
    {"id": 1,
    "title":"React Game!",
    "description": "Tic tac toe game created using Create React app.",
    "URL": "http://heroku/myapp/game/"
    },

    {"id": 2,
    "title":"Online store",
    "description": "Online store created with HTML, CSS and JavaScript.",
    "URL": "https://git.com/myrepos/shop/index"
    }
]
```

2. Post/ Create:

- If you are wanting to create a new web project, enter the following URL in the "Enter request URL" input area:
  http://localhost:8080/api/create

- Select "POST" on the dropdown menu. Below the input area there are additional options. Click on "Body" and select "raw". From the "Text" dropdown select JSON. Notice that an area has been made available displaying "1". Input the following data, as an example, in this area and click on the "Send" button:

```
{
    "title":"Sudoku Game!",
    "description": "Sudoku game created using Create React app.",
    "URL": "http://heroku/myapp/sudoku/"
}
```

The data in the "Response" area should now show the web project that has been created/ added and the following message should be returned:
"message": "New web project created!",

##### Errors:

- An error will occur if all of the fields are not completed.

As an example, if you were to enter the following:

```
{
    "description": "Sudoku game created using Create React app.",
}
The following message should be returned in the "Response" area of the page:
{
    "error": true,
    "msg": "User data missing"
}
```

3. Put/ Update:

- If you are wanting to edit an existing web project, enter the following URL in the "Enter request URL" input area:
  http://localhost:8080/api/update/:id

Notice the ":id" part of the URL. This should be replaced with the id number of the web project that you would like to enter (eg. http://localhost:8080/api/update/2).

- As an example, if you were to enter the above example URL, the following web project will be updated:

```
{
    "id": 2,
    "title": "Online store",
    "description": "Online store created with HTML, CSS and JavaScript.",
    "URL": "https://git.com/myrepos/shop/index"
}
```

- If you were to enter the following information:  
  {
  "title": "Online store - Updated",
  "description": "Online store created with HTML, CSS, jQuery and JavaScript.",
  "URL": "https://git.com/myrepos/shop/index"
  }
- The following data should be populating the selected web projects data in the "Response" area of the page:

```
{
    "id": 2,
    "title": "Online store - Updated",
    "description": "Online store created with HTML, CSS, jQuery and JavaScript.",
    "URL": "https://git.com/myrepos/shop/index"
}
```

- The following message should also be returned in the "Response" area of the page:
  "message": "Web project updated!",

##### Errors:

- An error will occur if all of the fields are not completed.

As an example, if you were to enter the following:

```
{
    "description": "Online store created with HTML, CSS, jQuery and JavaScript."
}
The following message should be returned in the "Response" area of the page:
{
    "error": true,
    "msg": "User data missing"
}
```

4. Delete:

- If you are wanting to delete an existing web project, enter the following URL in the "Enter request URL" input area:
  http://localhost:8080/api/update/:id

As with the Put/ Update request, the delete URL also requires for the ":id" part of the URL to be replaced with the id number of the web project that you wish to delete (eg. http://localhost:8080/api/update/2).

- As an example, if you were to enter the above example URL, the following web project will be deleted:

```
{
    "id": 2,
    "title": "Online store",
    "description": "Online store created with HTML, CSS and JavaScript.",
    "URL": "https://git.com/myrepos/shop/index"
}
```

- The web project's data should be removed from the "Response" area of the page and the following message should be returned:
  "message": "Web project deleted!"

#### Notice:

Notice that, should any changes be made to the application's files, that the server refreshes in the console or terminal and updates the browser's output. This is because of the Nodemon utility that has been installed.

#### Additional errors:

- If you were to enter the following URL (or any other URL, other than the http://localhost:8080/api, that does not exist) in the "Enter request URL" input area:
  http://localhost:8080/about

- The following error message will display providing the end path of the faulty URL:
  Cannot GET /about

- If information is entered in an incorrect format or punctuation mistakes are made as with the following example (, at the end of the description) an error will occur:

```
{
"description": "Online store created with HTML, CSS and JavaScript.",
}
```

The following error message will display:
Something broke!

### Credits

- Ridhaa Cupido - https://github.com/ridhaaDev
- HyperionDev - https://www.hyperiondev.com/
- Stack Overflow - https://stackoverflow.com/
