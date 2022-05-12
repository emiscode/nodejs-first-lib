import fs from 'fs';
import chalk from 'chalk';

const handleError = (err) => {
    throw new Error(console.log(chalk.red(err)));
}

const getFile = async function(filePath) {
    try {
        const encoding = 'utf-8';
        return await fs.promises.readFile(filePath, encoding);
    } catch(err) {
        handleError(err);
    }
}

export default getFile;