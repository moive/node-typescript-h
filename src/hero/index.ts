import { findHeroById } from "../services/hero.service";

const hero = findHeroById(2);

export function initHero() {
	console.log(hero?.name ?? "Hero not found");
}
