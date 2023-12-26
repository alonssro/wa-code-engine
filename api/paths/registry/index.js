// ./api/paths/todos/index.js
module.exports = function () {
  let operations = {
    POST,
  };


  function POST(req, res, next) {
    console.log(`About to create todo: ${JSON.stringify(req.body)}`);
    res.status(201).send();
  }


  POST.apiDoc = {
    summary: "Create registry",
    operationId: "createRegistry",
    consumes: ["application/json"],
    parameters: [
      {
        in: "body",
        name: "todo",
        schema: {
          $ref: "#/definitions/Registry",
        },
      },
    ],
    responses: {
      201: {
        description: "Created",
      },
    },
  };

  return operations;
};