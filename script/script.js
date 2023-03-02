
async function getWeather(locationInput) {
  response = await fetch(
    `http://api.weatherapi.com/v1/current.json?key=0c80b2b56f1943ada19100744230103&q=${locationInput}&aqi=no`
  ).then((data) => {
    console.log(data);

    return data.json();
  });
  console.log(response);
  if (response.error) {
    alert(response.error.message);
  } else {
    weatherInfo();
  }
}

let locName = document.querySelector(".city");
let currentTemp = document.querySelector(".temp");
let country = document.querySelector(".country");
let text = document.querySelector(".text");
let longitude = document.querySelector(".longitude");
let feel = document.querySelector(".feel-like");
let latitude = document.querySelector(".latitude");
let icon = document.querySelector(".icon img");
let iconPath;
let response;

function weatherInfo() {
  locName.value = ` ${response.location.name}`;
  country.innerHTML = `Country:  ${response.location.country}`;
  longitude.innerHTML = `Longitude: ${response.location.lon}`;
  latitude.innerHTML = `Latitude: ${response.location.lat}`;
  text.innerHTML = `Type: ${response.current.condition.text}`;
  feel.innerHTML = `Feels  ${response.current.feelslike_c}<sup>°</sup>`;
  currentTemp.innerHTML = `${response.current.temp_c} <sup>°</sup>`;
  iconPath = response.current.condition.icon.replace(
    "//cdn.weatherapi.com",
    "../assets"
  );
  iconPath = iconPath.replace(".png", ".svg");
  // icon.src = response.current.condition.icon;
  icon.src = iconPath;

  console.log(icon);
}

locName.addEventListener("keyup", (e) => {
  if (e.key == "Enter") {
    getWeather(e.target.value);
  }
});

window.onload = () => {
  getWeather("San Francisco");
};
