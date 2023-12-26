var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var swaggerJsdoc = require("swagger-jsdoc");
var swaggerUi = require("swagger-ui-express");

var indexRouter = require('./routes/index');
const { initialize } = require('express-openapi');


var app = express();

app.use(logger('dev'));
app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/', indexRouter);

const options = {
  definition: {
    openapi: "3.1.0",
    info: {
      title: "Sonda Extension",
      version: "0.1.0",
      description:
        "This is a simple CRUD API application made with Express and documented with Swagger",
      license: {
        name: "MIT",
        url: "https://spdx.org/licenses/MIT.html",
      },
      contact: {
        name: "Alonso Rodríguez",
        url: "https://logrocket.com",
        email: "alonso.rodriguez@ibm.com",
      },
    },
    servers: [
      {
        url: "http://localhost:3000",
      },
      {
        url: "https://sonda.1bevw5dik67h.us-south.codeengine.appdomain.cloud"
      }
    ],
  },
  apis: ["./routes/*.js"],
};

initialize({
  app,
  apiDoc: require("./api/api-doc"),
  paths: "./api/paths",
});

const specs = swaggerJsdoc({ ...options });
app.use(
  "/api-documentation",
  swaggerUi.serve,
  swaggerUi.setup(specs, {
    swaggerOptions: {
      url: "http://localhost:3000/api-docs",
    }
  })
);
console.log("App running on port http://localhost:3000");
console.log(
  "OpenAPI documentation available in http://localhost:3000/api-documentation"
);

module.exports = app;
