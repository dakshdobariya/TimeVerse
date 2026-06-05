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
new Date().toLocaleDateString("en-IN",{
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
new Date().toLocaleDateString("en-US",{
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

document.getElementById("dubai").innerHTML =
new Date().toLocaleTimeString("en-US",{
timeZone:"Asia/Dubai",
hour12:true
});

document.getElementById("singapore").innerHTML =
new Date().toLocaleTimeString("en-US",{
timeZone:"Asia/Singapore",
hour12:true
});

document.getElementById("paris").innerHTML =
new Date().toLocaleTimeString("en-US",{
timeZone:"Europe/Paris",
hour12:true
});

document.getElementById("utc").innerHTML =
new Date().toLocaleTimeString("en-US",{
timeZone:"UTC",
hour12:true
});

document.getElementById("local").innerHTML =
new Date().toLocaleTimeString("en-US",{
hour12:true
});

}

if(document.getElementById("india")){
setInterval(updateClocks,1000);
updateClocks();
}

console.log("Script Running");

const themeToggle = document.getElementById("theme-toggle");

if(themeToggle){
themeToggle.addEventListener("click", () => {

console.log("Button Clicked");

document.body.classList.toggle("dark-mode");

if(document.body.classList.contains("dark-mode")){
themeToggle.innerHTML = "☀️";
}else{
themeToggle.innerHTML = "🌙";
}

});
}
