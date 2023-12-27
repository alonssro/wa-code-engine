// ./api/paths/todos/index.js
module.exports = function () {
  let operations = {
    POST,
  };

  function POST(req, res, next) {
    console.log(`About to create todo: ${JSON.stringify(req.body)}`);

    // Assuming req.body contains the registry information
    const createdRegistry = req.body;

    // Send the created registry in the response
    res.status(201).json(createdRegistry);
  }

  POST.apiDoc = {
    summary: "Create registry",
    operationId: "createRegistry",
    requestBody: {
      description: "Registry object that needs to be added",
      required: true,
      content: {
        "application/json": {
          schema: {
            $ref: "#/components/schemas/Registry",
          },
        },
      },
    },
    responses: {
      201: {
        description: "Created",
        content: {
          "application/json": {
            schema: {
              $ref: "#/components/schemas/Registry",
            },
          },
        },
      },
    },
  };

  return operations;
};
