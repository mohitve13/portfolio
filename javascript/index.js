var date = new Date().toLocaleDateString();
var x = document.getElementById("head2");
x.innerHTML = `${date}`;

function weather() {
	var parent = document.getElementById("column1");
	var city = document.getElementById("searchbox").value;
	var key = "ecfae499d3a6990d513e872644874cd4";
	const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${key}&units=metric%60`;
	document.querySelectorAll(".showbox").forEach(el => el.remove());

	fetch(url)
		.then((response) => response.json())
		.then((data) => {
			var div = document.createElement("div");
			div.classList.add("showbox");
			div.innerHTML = `
			<div class="left">
			  <p class="tempshow ">
			  ${Math.round(data.main.temp)} °C
			  </p>
			  <img src="https://openweathermap.org/img/wn/${data.weather[0].icon
				}.png" alt="weather icon"/>
			</div>
			<div class="right"> 
			  <p class="weathershow">
			  Weather : ${data.weather[0].main}
			  </p>  
			  <p class="humidityshow">
			  Humidity : ${Math.round(data.main.humidity)}
			  </p>
			  <p class="windshow">
			  Wind speed: ${data.wind.speed}
			  </p>
			</div>
			`;
			parent.appendChild(div);
		});
}