import { getPokemonByName } from "../../src/js-foundation/apiPokemon";
describe("apiPokemon.ts", () => {
	test("getPokemonById should return a pokemon", async () => {
		const pokemonId = 1;
		const pokemonName = await getPokemonByName(pokemonId);

		expect(pokemonName).toBe("bulbasaur");
	});

	test("Should return an error if pokemon does not exist", async () => {
		const pokemonId = 100000;

		try {
			await getPokemonByName(pokemonId);
			expect(true).toBeFalsy();
		} catch (error) {
			// console.log(error);
			expect(error).toBe(`Pokemon not found with id ${pokemonId}`);
		}
	});
});
