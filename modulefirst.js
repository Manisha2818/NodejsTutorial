//Common js modules

// const simple = require("./modulesecond.mjs")
//we can not require a .mjs file(ecma file).


// import {simple2 as simple} from "./modulesecond.mjs"
// simple()

import * as a2 from "./modulesecond.mjs"

console.log(a2.simple2())