import { buildMakePerson } from "../../src/js-foundation/buildMakePerson";
describe("factory", () => {
	const getUUID = () => "123456";
	const getAge = () => 35;
	test("buildMakePerson should return a function", () => {
		const makePerson = buildMakePerson({ getUUID, getAge });

		expect(typeof makePerson).toBe("function");
	});

	test("makePerson should return a person", () => {
		const makePerson = buildMakePerson({ getUUID, getAge });
		const johnDoe = makePerson({
			name: "John Doe",
			birthdate: "1985-10-21",
		});

		expect(johnDoe).toEqual({
			id: "123456",
			name: "John Doe",
			birthdate: "1985-10-21",
			age: 35,
		});
	});
});
