import { getUserById, users } from "../../src/js-foundation/arrow";
describe("callback", () => {
	test("getUserById should return an error if user does not exist", (done) => {
		const id = 10;

		getUserById(id, (err, user) => {
			expect(err).toBe(`User not found with id ${id}`);
			expect(user).toBeUndefined();
			done();
		});
	});

	test("getUserById should return a John Doe", (done) => {
		const johnDone = users[0];
		const id = 1;
		getUserById(id, (err, johnDone) => {
			expect(err).toBeNull();
			expect(johnDone).toEqual({
				id: 1,
				name: "John Doe",
			});
			done();
		});
	});
});
