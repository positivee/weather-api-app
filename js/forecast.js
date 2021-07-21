const key = '1245ec970ba2490793b141156212107';

const getCity = async (city) => {
    const base = 'http://api.weatherapi.com/v1/current.json';
    const query = `?key=${key}&q={${city}}`;

    const response = await fetch(base + query);
    const data = await response.json();

    return data;
}

// getCity('Warsaw')
//     .then(data => {

//     })
//     .catch(error => console.log('Rejected', error.message))


