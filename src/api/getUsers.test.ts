// @vitest-environment node
import nock from "nock";
import { getUsers } from "./getUsers";
import { userData } from "../data/userData";

describe("getUsers", () => {
  it("should return the users if API returns 200", async () => {
    const scope = nock("https://jsonplaceholder.typicode.com")
      .get("/users")
      .reply(200, userData);

    const result = await getUsers();

    expect(result).toEqual(userData);

    scope.isDone();
  });
});
