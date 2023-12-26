const apiDoc = {
  swagger: "2.0",
  basePath: "/",
  info: {
    title: "Sonda app API.",
    version: "1.0.0",
  },
  definitions: {
    Registry: {
      type: "object",
      properties: {
        account: {
          type: "number",
        },
        email: {
          type: "string",
        },
      },
      required: ["account", "email"],
    },
  },
  paths: {},
};

module.exports = apiDoc