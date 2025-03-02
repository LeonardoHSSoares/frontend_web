const key = '1f392856d4158518e3d6155908f4b688';

function showOutput (dataBase) {
    document.querySelector('.city').innerHTML = `Clima em ${dataBase.name}`;
    document.querySelector('.temperature').innerHTML = `${Math.round(dataBase.main.temp)}°C`;
    document.querySelector('.weather').innerHTML = dataBase.weather[0].description;
    document.querySelector('.humidity').innerHTML = `Umidade: ${dataBase.main.humidity}%`;
    document.querySelector('.iconWeather').src =  `https://openweathermap.org/img/wn/${dataBase.weather[0].icon}.png`
    console.log(dataBase);
}

async function searchCity (city) {
    const dataBase = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=pt_br&units=metric`).then(response => response.json());

    showOutput(dataBase);
    
}

function inputCity () {
    const city = document.querySelector('.inputCity').value;

    searchCity(city);
}