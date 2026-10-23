import './styles.css';

const searchForm = document.querySelector('.form');
const input = document.querySelector('.form-input');
const loader = document.querySelector('#loader-dots');

// Update Figures

const locationDiv = document.querySelector('.location');
const temperatureDiv = document.querySelector('.temperature');
const descriptionDiv = document.querySelector('.description');
const windSpeed = document.querySelector('.wind-speed');
const humidity = document.querySelector('.humidity');
const uvIndex = document.querySelector('.uv-index');
const timeZone = document.querySelector('.time-zone');

searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const location = input.value;
    getLocationData(location);
    
})

async function getLocationData(location) {
    loader.classList.remove('hidden');
    try {
        const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=metric&key=UDQSX773LTDW79FCD25N7PAW7`);

        const locationData = await response.json();
        console.log(locationData);

        locationDiv.textContent = locationData.resolvedAddress;
        temperatureDiv.textContent = `${locationData.currentConditions.feelslike}°c`;
        descriptionDiv.textContent = locationData.currentConditions.conditions;
        windSpeed.textContent = `${locationData.currentConditions.windspeed} km/h`;
        humidity.textContent = `${locationData.currentConditions.humidity}%`
        // Where I left
    } catch (error) {
        alert(error);
    } finally {
        loader.classList.add('hidden');
        searchForm.reset();
    }
}

