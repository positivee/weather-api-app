const cityForm = document.querySelector('form');
const card = document.querySelector('.card');
const details = document.querySelector('.details');
const time = document.querySelector('img.time');
const icon = document.querySelector('.icon img');

const updateUI = (data) => {
    console.log(data);

    //destructure properties

    const { location, current } = data;

    if (card.classList.contains('d-none')) {
        card.classList.remove('d-none');
    }

    details.innerHTML = `    
        <h5 class="my-3">${location.name}</h5>
        <div class="my-3">${current.condition.text}</div>
        <div class="display-4 my-4">
            <span>${current.temp_c}</span>
            <span>&deg;C</span>
        </div>
    `
    let timeSrc = null;
    if (current.is_day === 1) {
        timeSrc = 'img/day.jpg';
    } else {
        timeSrc = 'img/night.jpg';
    }
    time.setAttribute('src', timeSrc);
    icon.src = current.condition.icon;
}

const updateCity = async (city) => {
    const cityDetails = await getCity(city);

    return cityDetails;
}


cityForm.addEventListener('submit', e => {

    e.preventDefault();
    //getting from form
    const cityName = cityForm.city.value.trim();
    cityForm.reset()
  
    //update the ui
    updateCity(cityName)
        .then(data => updateUI(data))
        .catch(error => console.log(error));

    localStorage.setItem('city', cityName);
})

if (localStorage.getItem('city')) {
    updateCity(localStorage.getItem('city'))
        .then(data => updateUI(data))
        .catch(error => console.log(error));
}