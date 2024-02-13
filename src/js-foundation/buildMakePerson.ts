interface BuildMakePerson {
	getAge: (birthdate: string) => number;
	getUUID: () => string;
}

interface PersonOptions {
	name: string;
	birthdate: string;
}

export const buildMakePerson = ({ getUUID, getAge }: BuildMakePerson) => {
	return ({ name, birthdate }: PersonOptions) => {
		return {
			id: getUUID(),
			name,
			birthdate,
			age: getAge(birthdate),
		};
	};
};
