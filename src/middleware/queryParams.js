function getQueryParams(url) {
    const query = {};
    const queryString = url.split('?')[1];
    if (!queryString) return query; 
    queryString.split('&').forEach(param => {
        let [key, value] = param.split('=');
        key = decodeURIComponent(key);
        value = value ? decodeURIComponent(value) : true; 
        if (query[key]) {
            query[key] = Array.isArray(query[key]) ? [...query[key], value] : [query[key], value];
        } else {
            query[key] = value;
        }
    });

    return query;
}

module.exports = getQueryParams;