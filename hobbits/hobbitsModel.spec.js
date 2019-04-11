const db = require("../data/dbConfig.js");
const Hobbits = require("./hobbitsModel.js");
describe("hobbits model", () => {
  describe("insert()", () => {
    beforeEach(async () => {
      await db("hobbits").truncate();
    });

    it("should insert the provided hobbit", async () => {
      await Hobbits.insert({ name: "gaffer" });
      await Hobbits.insert({ name: "aragorn" });
      await Hobbits.insert({ name: "gandalf" });

      const hobbits = await db("hobbits");
      expect(hobbits).toHaveLength(3);
    });

    it("should insert the provided hobbit", async () => {
      let hobbit = await Hobbits.insert({ name: "gaffer" });

      expect(hobbit.name).toBe("gaffer");
      hobbit = await Hobbits.insert({ name: "sam" });
      expect(hobbit.name).toBe("sam");
    });
  });
});
