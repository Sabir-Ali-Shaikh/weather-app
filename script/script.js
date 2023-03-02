let response;
async function getWeather() {
    response = await fetch('http://api.weatherapi.com/v1/current.json?key=0c80b2b56f1943ada19100744230103&q=san+francisco&aqi=no').then((data) => {
        console.log(data);

        return data.json()
    })
    console.log(response);
    weatherInfo()
}
getWeather()


let locName = document.querySelector('.city')
let currentTemp = document.querySelector('.temp')
let country = document.querySelector('.country')
let text = document.querySelector('.text')
let lon = document.querySelector('.longitude')
let feel = document.querySelector('.feel')
let latitude = document.querySelector('.latitude')
let icon = document.querySelector('.icon img')
let path;


function weatherInfo() {
    locName.innerHTML = ` ${response.location.name}`
    country.innerHTML = `Country:  ${response.location.country}`
    lon.innerHTML = `longitude: ${response.location.lon}`
    latitude.innerHTML = `longitude: ${response.location.lat}`
    text.innerHTML = `Type: ${response.current.condition.text}`
    feel.innerHTML = `Feels Like ${response.current.feelslike_c
        }`
    currentTemp.innerHTML = `${response.current
        .temp_c
        } <sup>o</sup>`
    // path = response.current.condition.icon.replace('//cdn.weatherapi.com', '../assets')
    icon.src = response.current.condition.icon

    console.log(icon);

}


