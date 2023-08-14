
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '07e9c261c5msh25889e62df54f48p175327jsna332e64ffd10',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

const getWeather = (city)=>{   

	cityName.innerText = city



  fetch('https:weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
  .then(Response => Response.json())
  .then(Response => {
	console.log(Response)

  //cloud_pct.innerText = Response.cloud_pct
  feels_like.innerText =  Response.feels_like
  humidity.innerText =  Response.humidity
  max_Temp.innerText =  Response.max_temp
  min_temp.innerText =  Response.min_temp
  sunrise.innerText =  Response.sunrise
  sunset.innerText =  Response.sunset
  temp.innerText =  Response.temp
  wind_degrees.innerText =  Response.wind_degrees
  wind_speed.innerText =  Response.wind_speed

  })

.catch(err => console.error(err)); 
}

kuch.addEventListener("click", (e)=>{
	e.preventDefault()
	getWeather(city.value)
})
   getWeather("Delhi")