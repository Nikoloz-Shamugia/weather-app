const button = document.getElementById('btn');
const infoWrapperDiv = document.querySelector('.info-wrapper');
const cardDiv = document.querySelector('.card');

button.addEventListener('click', () => {
    infoWrapperDiv.style.display = 'none';
    cardDiv.style.display = 'block';
});
const apiKey = 'c18e3390fa850e266649a33c456a631b';

async function checkWeather(city) {
    try{
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
    const result = await fetch(apiUrl);
    const data = await result.json();

    const cityElement = document.querySelector('.city');
    cityElement.innerHTML = data.name;
    const temp = document.querySelector('.temp');
    temp.innerHTML = data.main.temp.toFixed(1) + '°C';
    const humidity = document.querySelector('.humidity');
    humidity.innerHTML = data.main.humidity + '%';
    const speed = document.querySelector('.speed');
    speed.innerHTML = data.wind.speed + ' km/hr';

    const img = document.querySelector('.weather-icon')
    if(data.weather[0].main == 'Clouds'){
        img.src = 'images/logo.svg'
    }
    else if(data.weather[0].main == 'Clear'){
        img.src = 'images/clear.png'
    }
    else if(data.weather[0].main == 'Rain'){
        img.src = 'images/rain.png'
    }
    else if(data.weather[0].main == 'Drizzle'){
        img.src = 'images/drizzle.avif'
    }
    else if(data.weather[0].main == 'Mist'){
        img.src = 'images/mist.png'
    }
    }
    catch (error) {
        const miniWrapper = document.querySelector('.mini-wrapper')
        miniWrapper.remove()
        console.log(error);
        const p = document.querySelector('.vanish')
        p.style.display = 'block'
    }
}

const input = document.getElementById('input')
const btn = document.getElementById('loop')
btn.addEventListener('click' , () =>{
    checkWeather(input.value)
})





