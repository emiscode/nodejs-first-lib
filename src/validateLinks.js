import fetch from 'node-fetch';


function getURLs(linksArr) {
    return linksArr.map(link => Object.values(link).join());
}

async function validateLinks(linksArr) {
    const result = [];
    const urls = getURLs(linksArr);
    
    for (const url of urls) {
        await fetch(url)
        .then(response => {
            result.push(response.status);
        })
        .catch(_ => {
            result.push(500);
        })
    }

    return result;
}

export default validateLinks;