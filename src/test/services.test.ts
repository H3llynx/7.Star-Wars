import { describe, expect, it, vi } from "vitest";
import { getData } from "../services/api-services";


describe("getData", () => {
    it("should be declared", () => {
        expect(typeof getData).toBe("function");
    });
    it("should return an object", () => {
        global.fetch = vi.fn(() =>
            Promise.resolve({
                ok: true,
                json: () => Promise.resolve({ "test": "success" })
            } as Response)
        );
        expect(typeof getData("http://test.dev/api")).toBe("object");
    });
    it("should throw an error when fetch fails", async () => {
        global.fetch = vi.fn(() =>
            Promise.resolve({
                ok: false,
                status: 909,
                statusText: "Darth Vader killed you",
                json: () => Promise.resolve({ "test": "failed" })
            } as Response)
        );
        await expect(getData("http://test.dev/api")).rejects.toThrow(Error);
        await expect(getData("http://test.dev/api")).rejects.toThrow("Darth Vader killed you");
    });
});
