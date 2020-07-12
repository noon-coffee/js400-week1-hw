const request = require("supertest");

const server = require("../server");

//fix: in looking at the other tests, it appears as though the endpoint
//needs to prefixed with the "base" route (don't know technical term)
describe("/parrot", () => {
  describe("GET /parrot", () => {
    it("should return GET and query parameters", async () => {
      const res = await request(server).get("/parrot/parrot?key1=true&key2=other");
      expect(res.statusCode).toEqual(200);
      expect(res.body).toEqual({
        body: {},
        method: "GET",
        query: {
          key1: "true",
          key2: "other",
        },
      });
    });
  });
  describe("POST /parrot", () => {
    it("should return POST and body", async () => {
      const requestBody = {
        key: true,
        key2: "other",
      };
      const res = await request(server).post("/parrot/parrot").send(requestBody);
      expect(res.statusCode).toEqual(200);
      expect(res.body).toEqual({
        body: requestBody,
        method: "POST",
        query: {},
      });
    });
  });
  describe("PUT /parrot", () => {
    it("should return PUT, body, and query params", async () => {
      const requestBody = {
        key: true,
        key2: "other",
      };
      const res = await request(server)
        .put("/parrot/parrot?field=value")
        .send(requestBody);
      expect(res.statusCode).toEqual(200);
      expect(res.body).toEqual({
        body: requestBody,
        method: "PUT",
        query: { field: "value" },
      });
    });
  });
});
