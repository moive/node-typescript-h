import { Fn, User } from "./arrow";

const users: User[] = [
	{ id: 1, name: "John Doe" },
	{ id: 2, name: "Jane Doe" },
];

export function getUserById(id: number, callback: Fn) {
	const user = users.find(function (user) {
		return user.id === id;
	});

	if (!user) {
		return callback(`User not found with id ${id}`);
	}

	return callback(null, user);
}
