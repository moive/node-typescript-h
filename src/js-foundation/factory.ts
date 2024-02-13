import { getUUID, getAge } from "../plugins";

const obj = { name: "John", birthdate: "1981-12-30" };

import { buildMakePerson } from "./buildMakePerson";

const makePerson = buildMakePerson({ getUUID, getAge });

const john = makePerson(obj);

console.log({ john });
