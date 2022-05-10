import fs from 'fs';
import chalk from 'chalk';

console.log(chalk.red('start'));

const handleError = function(err) {
    throw new Error(chalk.red(err));
}

const getFileSync = function(filePath) {
    try {
        const encoding = 'utf-8';
        const file = fs.readFileSync(filePath, encoding);
        console.log(file);
    } catch(err) {
        handleError(err);
    }
}

const getFileAsync = function(filePath) {
    const encoding = 'utf-8';

    fs.readFile(filePath, encoding, function(err, data) {
        if (err) {
            handleError(err);
        }
        console.log(chalk.green(data));
    });
}

const getFilePromise = function(filePath) {
    const encoding = 'utf-8';

    fs.promises.readFile(filePath, encoding)
    .then(data => {
        console.log(chalk.green(data));
    })
    .catch(err => {
        handleError(err)
    })
}

const getFileWithAsyncAwait = async function(filePath) {
    try {
        const encoding = 'utf-8';
        const file = await fs.promises.readFile(filePath, encoding);
        console.log(chalk.green(file));
    } catch(err) {
        handleError(err);
    }
}

const pathToFile = './files/file-01.md';
const pathToFileWrong = pathToFile + 'wrong';

//getFileSync(pathToFile);
//getFileAsync(pathToFile);
//getFilePromise(pathToFile);
getFileWithAsyncAwait(pathToFile);

console.log(chalk.red('end'));
