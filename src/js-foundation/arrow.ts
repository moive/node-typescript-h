export interface User {
	id: number;
	name: string;
}

export type Fn = (err?: string | null, user?: User) => void;

const users: User[] = [
	{ id: 1, name: "John Doe" },
	{ id: 2, name: "Jane Doe" },
];

export const getUserById = (id: number, callback: Fn) => {
	const user = users.find((user) => user.id === id);

	if (!user) {
		return callback(`User not found with id ${id}`);
	}

	return callback(null, user);
};
