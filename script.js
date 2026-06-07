console.log("Script Loaded");

const cities = [
  { country:"🇮🇳", name:"India", id:"india", tz:"Asia/Kolkata" },
  { country:"🇬🇧", name:"London", id:"london", tz:"Europe/London" },
  { country:"🇺🇸", name:"New York", id:"newyork", tz:"America/New_York" },
  { country:"🇯🇵", name:"Tokyo", id:"tokyo", tz:"Asia/Tokyo" },
  { country:"🇦🇪", name:"Dubai", id:"dubai", tz:"Asia/Dubai" },
  { country:"🇸🇬", name:"Singapore", id:"singapore", tz:"Asia/Singapore" },
  { country:"🇫🇷", name:"Paris", id:"paris", tz:"Europe/Paris" },
  { country:"🇩🇪", name:"Berlin", id:"berlin", tz:"Europe/Berlin" },
  { country:"🇮🇹", name:"Rome", id:"rome", tz:"Europe/Rome" },
  { country:"🇪🇸", name:"Madrid", id:"madrid", tz:"Europe/Madrid" },
  { country:"🇷🇺", name:"Moscow", id:"moscow", tz:"Europe/Moscow" },
  { country:"🇨🇳", name:"Beijing", id:"beijing", tz:"Asia/Shanghai" },
  { country:"🇰🇷", name:"Seoul", id:"seoul", tz:"Asia/Seoul" },
  { country:"🇹🇭", name:"Bangkok", id:"bangkok", tz:"Asia/Bangkok" },
  { country:"🇹🇷", name:"Istanbul", id:"istanbul", tz:"Europe/Istanbul" },
  { country:"🇦🇺", name:"Sydney", id:"sydney", tz:"Australia/Sydney" },
  { country:"🇨🇦", name:"Toronto", id:"toronto", tz:"America/Toronto" },
  { country:"🇺🇸", name:"Chicago", id:"chicago", tz:"America/Chicago" },
  { country:"🇺🇸", name:"Los Angeles", id:"losangeles", tz:"America/Los_Angeles" },
  { country:"🇧🇷", name:"Rio de Janeiro", id:"rio", tz:"America/Sao_Paulo" }
];

const container = document.getElementById("clock-container");

if(container){

container.innerHTML = cities.map(city => `
<div class="clock-card">
<h2>${city.country} ${city.name}</h2>
<p id="${city.id}"></p>
<p class="date" id="${city.id}-date"></p>
</div>
`).join("");

}

function updateClocks(){

cities.forEach(city => {

document.getElementById(city.id).innerHTML =
new Date().toLocaleTimeString("en-US",{
timeZone:city.tz,
hour12:true
});

document.getElementById(`${city.id}-date`).innerHTML =
new Date().toLocaleDateString("en-GB",{
timeZone:city.tz,
day:"numeric",
month:"long",
year:"numeric"
});

});

}

if(document.getElementById("clock-container")){
setInterval(updateClocks,1000);
updateClocks();
}

console.log("Script Running");

const themeToggle = document.getElementById("theme-toggle");

if(themeToggle){

if(localStorage.getItem("theme") === "dark"){
document.body.classList.add("dark-mode");
themeToggle.innerHTML = "☀";
}

themeToggle.addEventListener("click", () => {

document.body.classList.toggle("dark-mode");

if(document.body.classList.contains("dark-mode")){
localStorage.setItem("theme","dark");
themeToggle.innerHTML = "☀";
}else{
localStorage.setItem("theme","light");
themeToggle.innerHTML = "🌙";
}

});

}
