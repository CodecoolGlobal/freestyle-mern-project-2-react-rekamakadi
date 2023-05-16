const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '8839b69215msh947f332360fc756p1858dejsn4132ed8ac040',
        'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
};

const fetchData = async (url, options) => {
    try {
        const response = await fetch(url, options);
        const result = await response.json();
        return(result)
    } catch (error) {
        console.error(error);
    }
}

export { options, fetchData };