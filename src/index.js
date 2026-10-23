import './styles.css';


//Weather Icons assets
import clearDay from './assets/weather-icons/sunny.png';
import clearNight from './assets/weather-icons/clear-night.png';
import cloudy from './assets/weather-icons/clouds-day.png';
import partlyCloudyDay from './assets/weather-icons/partly-cloudy-day.png';
import partlyCloudyNight from './assets/weather-icons/clear-night.png';
import rain from './assets/weather-icons/stormy-weather.png';
import showersDay from './assets/weather-icons/light-rain-day.png';
import showersNight from './assets/weather-icons/light-rain-night.png';
import thunderRain from './assets/weather-icons/stormy-weather.png';
import snow from './assets/weather-icons/snow.png';
import fog from './assets/weather-icons/fog.png';
import wind from './assets/weather-icons/windy-weather.png';

const icons  = {
    'clear-day': clearDay,
    'clear-night': clearNight,
    'cloudy': cloudy,
    'partly-cloudy-day': partlyCloudyDay,
    'partly-cloudy-night': partlyCloudyNight,
    'rain': rain,
    'showers-day': showersDay,
    'showers-night': showersNight,
    'thunder-rain': thunderRain,
    'thunder-showers-day': thunderRain,
    'thunder-showers-night': thunderRain,
    'snow': snow,
    'snow-showers-day': snow,
    'snow-showers-night': snow,
    'fog': fog,
    'wind': wind,
};


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
const dayDescription = document.querySelector('.day-description');
const weatherIcon = document.querySelector('.icon-src')

searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const location = input.value;
    getLocationData(location);
})

async function getLocationData(location) {
    loader.classList.remove('hidden');
    clearPage();
    try {
        const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=metric&key=UDQSX773LTDW79FCD25N7PAW7`);

        const locationData = await response.json();
        console.log(locationData);

        locationDiv.textContent = locationData.resolvedAddress;
        temperatureDiv.textContent = `${locationData.currentConditions.feelslike}°c`;
        descriptionDiv.textContent = locationData.currentConditions.conditions;
        windSpeed.textContent = `${locationData.currentConditions.windspeed} km/h`;
        humidity.textContent = `${locationData.currentConditions.humidity}%`;
        uvIndex.textContent = locationData.currentConditions.uvindex;
        timeZone.textContent = locationData.timezone;
        dayDescription.textContent = locationData.description;

        weatherIcon.src = icons[locationData.currentConditions.icon] ?? cloudy;

    } catch (error) {
        alert(error);
    } finally {
        loader.classList.add('hidden');
        searchForm.reset();
    }
}

function clearPage () {
    locationDiv.innerHTML = '';
    temperatureDiv.innerHTML = '';
    descriptionDiv.innerHTML = '';
    windSpeed.innerHTML = '';
    humidity.innerHTML = '';
    uvIndex.innerHTML = '';
    timeZone.innerHTML = '';
    dayDescription.innerHTML = '';
    weatherIcon.innerHTML = '';
}

