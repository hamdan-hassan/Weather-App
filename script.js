let input = document.querySelector(".form-control");
let list_group = document.getElementsByClassName("list-group")[0];
let info_text = document.getElementById("info-text");
let output = "";

document.getElementsByClassName("btn")[0].addEventListener("click" , () =>{

let xhr = new XMLHttpRequest();

xhr.open("GET","https://api.openweathermap.org/data/2.5/weather?q=" + input.value + "&units=metric&APPID=6809fc8896b3c551023028a4e7cc9869");

xhr.onload = function () {
	
if (this.status === 200) {
let data = JSON.parse(this.responseText)
 output = 
 "<li class='list-group-item lead text-info'>Weather: " + data.weather[0].main + " <img src=http://openweathermap.org/img/wn/" + data.weather[0].icon + ".png></li>" +
 "<li class='list-group-item lead text-info'>Description: " + data.weather[0].description + "</li>" +
 "<li class='list-group-item lead text-info'>Temperature: " + data.main.temp + " &deg;C</li>" +
 "<li class='list-group-item lead text-info'>Minimum temperature: " + data.main.temp_min + "&deg;C</li>" +
 "<li class='list-group-item lead text-info'>Maximum temperature: " + data.main.temp_max + "&deg;C</li>" +
 "<li class='list-group-item lead text-info'>Wind speed: " + data.wind.speed + " meter/sec</li>" +
 "<li class='list-group-item lead text-info'>Wind direction: " + data.wind.deg + "&deg;</li>" +
 "<li class='list-group-item lead text-info'>Cloudiness: " + data.clouds.all+ "%</li>" +
 "<li class='list-group-item lead text-info'>Humidity : " + data.main.humidity + "%</li>" +
 "<li class='list-group-item lead text-info'>Atmospheric pressure: " + data.main.pressure + " hPa</li>"
 ;
 
 
 list_group.innerHTML = output;
 info_text.classList.add("text-info");
 info_text.classList.remove("text-danger");
 info_text.style.textTransform = "capitalize";	
 info_text.textContent = "Current Weather of " + input.value + ", " + data.sys.country;
 input.value = "";
}

else {
info_text.classList.add("text-danger");
info_text.classList.remove("text-info");	
info_text.textContent = "City Not Found :( Try Again";
input.value = "";
list_group.innerHTML = "";
}

}

xhr.send();

	
});
// let container = document.getElementById("data");
// document.getElementById("btn").addEventListener("click" , ()=> {

// 

// 



// });

