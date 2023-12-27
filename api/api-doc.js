const apiDoc = {
  openapi: "3.0.1",
  info: {
    title: "Migrated Webhook",
    version: "1.0"
  },
  servers: [
    {
      url: "https://sonda.1bevw5dik67h.us-south.codeengine.appdomain.cloud",
      description: "main_webhook"
    }
  ],
  components: {
    schemas: {
      Registry: {
        type: "object",
        properties: {
          account: {
            type: "number",
          },
          email: {
            type: "string",
          },
          phoneNumber: {
            type: "string"
          }
        },
        required: ["account", "email", "phoneNumber"],
      },
    },
  },
  paths: {},
};

module.exports = apiDoc;
