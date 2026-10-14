import './styles.css';

async function getLocationData(location) {
    try {
        const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=UDQSX773LTDW79FCD25N7PAW7`);
        const locationData = await response.json();
        console.log(locationData);
    } catch (error) {
        alert(error);
    } finally {
        console.log('done')
    }
}

getLocationData('Nairobi');
