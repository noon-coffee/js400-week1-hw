const request = require("supertest");

const server = require("../server");

describe("/string", () => {
  describe("GET /lowercase", () => {
    it("should return lowercase version of a string", async () => {
      const res = await request(server).get("/string/tEST/lowercase");
      expect(res.statusCode).toEqual(200);
      expect(res.body).toEqual({ lowercase: "test" });
    });
    it("should not change an already lowercased string", async () => {
      const res = await request(server).get("/string/other/lowercase");
      expect(res.statusCode).toEqual(200);
      expect(res.body).toEqual({ lowercase: "other" });
    });
  });
  describe("GET /uppercase", () => {
    //fix: change to call the appropriate endpoint for uppercase functionality
    it("should not change an already uppercase version of a string", async () => {
      const res = await request(server).get("/string/TEST/uppercase");
      expect(res.statusCode).toEqual(200);
      expect(res.body).toEqual({ uppercase: "TEST" });
    });
    it("should return an uppercase version of a string", async () => {
      const res = await request(server).get("/string/otHEr/uppercase");
      expect(res.statusCode).toEqual(200);
      expect(res.body).toEqual({ uppercase: "OTHER" });
    });
  });
});
