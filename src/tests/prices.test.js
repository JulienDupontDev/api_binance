import request from "supertest";
import app from "../../server";

describe("Récupération prix", () => {
  it("devrait renvoyer une liste", (done) => {
    request(app)
      .get("/api/prices")
      .then((res) => {
        expect(res.statusCode).toEqual(200);
        expect(Array.isArray(res.body)).toBe(true);
        done();
      })
      .catch((err) => done(err));
  });
});
