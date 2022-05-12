import fs from 'fs';
import handleError from "./handleError.js";

const getFile = async function(filePath) {
    try {
        const encoding = 'utf-8';
        return fs.promises.readFile(filePath, encoding);
    } catch(err) {
        handleError(err);
    }
}

export default getFile;