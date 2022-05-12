import chalk from 'chalk';
import getFile from "./getFile.js";
import { extractLinks } from "./extractLinks.js";
import validateLinks from './validateLinks.js';

const pathToFile = process.argv[2];
const file = await getFile(pathToFile);
const links = extractLinks(file);
const linksValidations = await validateLinks(links);

console.log(chalk.yellow(file));
console.log(chalk.blue(JSON.stringify(links)));
console.log(chalk.magenta(JSON.stringify(linksValidations)));

const result = links.map((obj, index) => ({
    ...obj,
    status: linksValidations[index]
}));

console.log(result);


