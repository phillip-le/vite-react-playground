// @vitest-environment node
import nock from "nock";
import { getUser } from "./getUser";
import { userData } from "../data/userData";

describe("getUser", () => {
  it("should return the user if API returns 200", async () => {
    const scope = nock("https://jsonplaceholder.typicode.com")
      .get("/posts?userId=1")
      .reply(200, userData[0]);

    const result = await getUser(userData[0].id);

    expect(result).toEqual(userData[0]);

    scope.isDone();
  });
});
