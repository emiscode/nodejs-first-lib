const extractLinks = (text) => {
    const regex = /\[([^\]]*)\]\((https?:\/\/[^$#\s].[^\s]*)\)/gm;

    const results = [];
    let temp;

    while((temp = regex.exec(text)) !== null) {
        let link = { [temp[1]]: temp[2] };
        results.push(link);
    }

    return results;
}
export { extractLinks };