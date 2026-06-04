async function getWeather() {

    let city = document.getElementById("city").value;

    let apiKey = "dc471fd7364fb2476b5c3fb3114de18b";

    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    let response = await fetch(url);

    let data = await response.json();

    if(data.cod == "404"){
        
        document.getElementById("result").innerHTML = "City not found";
    }

    else{

        document.getElementById("result").innerHTML = 

        `
        <h3>${data.name}</h3>

        <p>Temperature: ${data.main.temp}&deg;C</p>

        <p>Humidity: ${data.main.humidity}%</p>

        <p>Wind Speed: ${data.wind.speed}Km/h</p>
        `;




    }
    
}