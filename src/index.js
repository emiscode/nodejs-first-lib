import fs from 'fs';
import chalk from 'chalk';

const handleError = function(err) {
    throw new Error(chalk.red(err));
}

const getFile = function(filePath) {
    const encoding = 'utf-8';

    fs.readFile(filePath, encoding, function(err, data) {
        if (err) {
            handleError(err);
        }
        console.log(chalk.green(data));
    });
}

getFile('./files/file-01.m');