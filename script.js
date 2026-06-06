console.log("Script Loaded");
function updateClocks(){

if(!document.getElementById("india")){
return;
}
  
document.getElementById("india").innerHTML =
new Date().toLocaleTimeString("en-US",{
timeZone:"Asia/Kolkata",
hour12:true
});

document.getElementById("india-date").innerHTML =
new Date().toLocaleDateString("en-GB",{
timeZone:"Asia/Kolkata",
day:"numeric",
month:"long",
year:"numeric"
});

document.getElementById("london").innerHTML =
new Date().toLocaleTimeString("en-US",{
timeZone:"Europe/London",
hour12:true
});

document.getElementById("london-date").innerHTML =
new Date().toLocaleDateString("en-GB",{
timeZone:"Europe/London",
day:"numeric",
month:"long",
year:"numeric"
});
  
document.getElementById("newyork").innerHTML =
new Date().toLocaleTimeString("en-US",{
timeZone:"America/New_York",
hour12:true
});

document.getElementById("newyork-date").innerHTML =
new Date().toLocaleDateString("en-GB",{
timeZone:"America/New_York",
day:"numeric",
month:"long",
year:"numeric"
});
  
document.getElementById("tokyo").innerHTML =
new Date().toLocaleTimeString("en-US",{
timeZone:"Asia/Tokyo",
hour12:true
});

document.getElementById("tokyo-date").innerHTML =
new Date().toLocaleDateString("en-GB",{
timeZone:"Asia/Tokyo",
day:"numeric",
month:"long",
year:"numeric"
});
  
document.getElementById("dubai").innerHTML =
new Date().toLocaleTimeString("en-US",{
timeZone:"Asia/Dubai",
hour12:true
});

document.getElementById("dubai-date").innerHTML =
new Date().toLocaleDateString("en-GB",{
timeZone:"Asia/Dubai",
day:"numeric",
month:"long",
year:"numeric"
});
  
document.getElementById("singapore").innerHTML =
new Date().toLocaleTimeString("en-US",{
timeZone:"Asia/Singapore",
hour12:true
});

document.getElementById("singapore-date").innerHTML =
new Date().toLocaleDateString("en-GB",{
timeZone:"Asia/Singapore",
day:"numeric",
month:"long",
year:"numeric"
});
  
document.getElementById("paris").innerHTML =
new Date().toLocaleTimeString("en-US",{
timeZone:"Europe/Paris",
hour12:true
});

document.getElementById("paris-date").innerHTML =
new Date().toLocaleDateString("fr-GB",{
timeZone:"Europe/Paris",
day:"numeric",
month:"long",
year:"numeric"
});
  
document.getElementById("utc").innerHTML =
new Date().toLocaleTimeString("en-US",{
timeZone:"UTC",
hour12:true
});

document.getElementById("utc-date").innerHTML =
new Date().toLocaleDateString("en-GB",{
timeZone:"UTC",
day:"numeric",
month:"long",
year:"numeric"
});

document.getElementById("local").innerHTML =
new Date().toLocaleTimeString("en-US",{
hour12:true
});

document.getElementById("local-date").innerHTML =
new Date().toLocaleDateString("en-GB",{
day:"numeric",
month:"long",
year:"numeric"
});
  
}

if(document.getElementById("india")){
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
