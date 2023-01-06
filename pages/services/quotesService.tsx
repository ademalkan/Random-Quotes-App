export const getQuotes = () => {
    return fetch('https://api.quotable.io/random').then(res => res.json());
};


export const getDataFromQuotesService = () => {
    return Promise.all([
        getQuotes(),
    ]).then(([quotesData]) => {
        return {
            quotesData,
        };
    });
};