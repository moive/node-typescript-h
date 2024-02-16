export interface User {
	id: number;
	name: string;
}

export type Fn = (err?: string | null, user?: User) => void;

export const users: User[] = [
	{ id: 1, name: "John Doe" },
	{ id: 2, name: "Jane Doe" },
];

export const getUserById = (id: number, callback: Fn) => {
	const user = users.find((user) => user.id === id);

	if (!user) {
		setTimeout(() => {
			callback(`User not found with id ${id}`);
		}, 2500);

		return;
	}

	return callback(null, user);
};
