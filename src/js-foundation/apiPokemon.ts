import { http } from "../plugins";

export const getPokemonByName = async (
	id: string | number
): Promise<string> => {
	try {
		const url = `https://pokeapi.co/api/v2/pokemon/${id}`;

		const pokemon = await http.get(url);

		// const response = await fetch(url);
		// const pokemon = await response.json();
		return pokemon.name;
	} catch (err) {
		throw `Pokemon not found with id ${id}`;
	}
};
