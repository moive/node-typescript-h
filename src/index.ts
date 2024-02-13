// const { emailTemlate } = require("./js-foundation/template");
// require("./js-foundation/destructuring");
// const { getUserById } = require("./js-foundation/callback");
// const { getUserById } = require("./js-foundation/arrow");
// require("./src/js-foundation/factory");
// require("./src/js-foundation/promises")

// import { initHero } from "./hero";
import { buildLogger } from "./plugins/logger.plugin";

const logger = buildLogger("index.ts");
logger.log("Hello world 😀");
logger.error("This is a fixed error");
// const id = 1;

// getUserById(id, (error, user)=> {
// 	if (error) throw new Error(error);
// 	console.log(user);
// });

// initHero();
