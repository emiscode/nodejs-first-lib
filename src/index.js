import fs from 'fs';
import chalk from 'chalk';

console.log(chalk.red('start'));

const handleError = function(err) {
    throw new Error(chalk.red(err));
}

const extractLinks = function(text) {
    const regex = /\[([^\]]*)\]\((https?:\/\/[^$#\s].[^\s]*)\)/gm;
    return text.match(regex);
}

const getFile = async function(filePath) {
    try {
        const encoding = 'utf-8';
        return fs.promises.readFile(filePath, encoding);
    } catch(err) {
        handleError(err);
    }
}

const pathToFile = './files/file-01.md';
const file = await getFile(pathToFile);
const links = extractLinks(file);

console.log(links);

console.log(chalk.red('end'));


