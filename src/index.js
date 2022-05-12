import chalk from 'chalk';
import getFile from "./getFile.js";
import { extractLinks } from "./extractLinks.js";

const pathToFile = process.argv[2];
const file = await getFile(pathToFile);
const links = extractLinks(file);

console.log(chalk.yellow(file));
console.log(chalk.blue(JSON.stringify(links)));


