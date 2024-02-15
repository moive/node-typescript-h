import { characters } from "../../src/js-foundation/destructuring";
describe("destructuring", () => {
	test("Characters should contain Flash, Superman", () => {
		// console.log(characters);
		expect(characters).toContain("Flash");
		expect(characters).toContain("Superman");
	});

	test("first character should contain Flash", () => {
		const [flash, superman] = characters;
		expect(flash).toBe("Flash");
		expect(superman).toBe("Superman");
	});
});
