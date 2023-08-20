[Flight-App]
This project is a React-based application that demonstrates proficiency in working with several libraries and tools such as Axios, Yup, Formik, Semantic UI React, and React Toastify. The mock API for the application is powered by JSON Server.

Prerequisites
Node.js
npm (typically comes with Node.js)
Getting Started
Follow these instructions to get the project up and running on your local machine for development and testing purposes.

Installation
Clone the repository


git clone https://github.com/oguzck/Flight-App.git
cd Flight-App
Install npm packages

Install the necessary npm packages by running:


npm install


Start the JSON Server
The mock API is provided by JSON Server and will run on port 5000:

json-server --watch db.json --port 5000
Make sure that the db.json file is present in your project's root directory.

Available Scripts
In the project directory, you can run:

npm start

Runs the app in the development mode. Open http://localhost:3000 to view it in the browser. The page will reload if you make edits.


Technologies Used
React
Axios for API calls.
Yup for schema validation.
Formik for form management.
Semantic UI React for UI components.
React Toastify for toast notifications.
JSON Server for creating a mock API.

To test api you can try  
IST -> JFK  1-09-2023
JFK -> IST  5-09-2023
or you can check db.json file to access more flight information . 


