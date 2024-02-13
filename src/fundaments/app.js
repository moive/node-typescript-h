const fs = require("fs");

const data = fs.readFileSync("README.md", "utf8");

const dataAngular = data.replace(/React/gi, "Angular");
fs.writeFileSync("README-Angular.md", dataAngular);

const worlds = dataAngular.split(" ");
console.log("worlds: ", worlds.length);

const angularWorldCount = dataAngular.match(/angular/gi ?? []).length;
// const angularWorldCount = worlds.filter((w) =>
// 	w.toLocaleLowerCase().includes("angular")
// ).length;
// const angularWorldCount = worlds.filter(
// 	(w) => w.toLocaleLowerCase() === "angular"
// ).length;
console.log("angular worlds: ", angularWorldCount);