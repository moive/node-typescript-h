import { getAge } from "../../src/plugins/get-age";
import { getAgePlugin } from "../../src/plugins/get-age.plugin";

describe("plugins/get-age.plugin.ts", () => {
	test("getAge() should return the age of a person", () => {
		const birthdate = "1985-10-21";
		const age = getAgePlugin(birthdate);

		expect(typeof age).toBe("number");
	});

	test("getAge should return current age", () => {
		const birthdate = "1985-10-21";
		const age = getAgePlugin(birthdate);
		const calculatedAge = getAge(birthdate);

		expect(age).toBe(calculatedAge);
	});

	/* test("getAge should return 0 years", () => {
		const spy = jest
			.spyOn(Date.prototype, "getFullYear")
			.mockReturnValue(1995);

		const birthdate = "1995-10-21";
		const age = getAgePlugin(birthdate);

		expect(age).toBe(0);
		expect(spy).toHaveBeenCalledWith();
  }); */
});
