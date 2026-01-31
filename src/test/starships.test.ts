import { describe, expect, expectTypeOf, it } from "vitest";
import { getFilm, getPilot, getShipById, getShips } from "../features/StarShips/api/starships-service";
import type { StarShip } from "../features/StarShips/types/types";

describe("getShips", () => {
    it("should be declared", () => {
        expect(typeof getShips).toBe("function");
    });
    it("should return an object", async () => {
        expect(typeof await getShips(1)).toBe("object");
    });
    it("adds the id and src to each returned ship", async () => {
        const ships = await (getShips(1));
        expect(ships[0]).toHaveProperty("id");
        expect(ships[0]).toHaveProperty("src");
    });
    it("returns the correct type of data", async () => {
        const ships = await (getShips(1));
        expectTypeOf(ships).toExtend<StarShip[]>();
    });
})

describe("getShipsById", () => {
    it("should be declared", () => {
        expect(typeof getShipById).toBe("function");
    });
    it("should return an object", async () => {
        expect(typeof await getShipById(3)).toBe("object");
    });
    it("returns the correct type of data", async () => {
        const ship = await (getShipById(3));
        expectTypeOf(ship).toExtend<StarShip>();
    });
})

describe("getPilot", () => {
    it("should be declared", () => {
        expect(typeof getPilot).toBe("function");
    });
    it("should return a string with the pilot name", async () => {
        const result = await getPilot("13")
        expect(typeof result).toBe("string");
        expect(result.toLowerCase()).toBe("chewbacca");
    });
})

describe("getFilm", () => {
    it("should be declared", () => {
        expect(typeof getFilm).toBe("function");
    });
    it("should return an object", async () => {
        expect(typeof await getFilm("1")).toBe("object");
    });
    it("should include the episode number", async () => {
        const result = await getFilm("1");
        expect(result).toHaveProperty("episode");
        expect(result.episode).toBe(4);
    })
    it("should return the movie title", async () => {
        const result = await getFilm("1");
        expect(result).toHaveProperty("title");
        expect(result.title.trim().length).toBeGreaterThan(0);
    })
})