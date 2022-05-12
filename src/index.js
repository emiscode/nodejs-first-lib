import getFile from "./getFile.js";
import { extractLinks } from "./extractLinks.js";

const pathToFile = './files/file-01.md';
const file = await getFile(pathToFile);
const links = extractLinks(file);

console.log(links);


