import { getPokemonByName } from "./apiPokemon";

getPokemonByName(1)
	.then((pokemon) => console.log({ pokemon }))
	.catch((err) => console.log({ err: err.message }))
	.finally(() => console.log("Finished processing"));
