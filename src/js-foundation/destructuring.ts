const { USERNAME, USERDOMAIN, SESSIONNAME } = process.env;

console.table({ USERNAME, USERDOMAIN, SESSIONNAME });

export const characters = ["Flash", "Superman", "Green Lantern", "Batman"];

const [, , , batman] = characters;