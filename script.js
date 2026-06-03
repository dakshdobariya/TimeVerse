function updateClocks(){

document.getElementById("india").innerHTML =
new Date().toLocaleTimeString("en-US",{
timeZone:"Asia/Kolkata",
hour12:true
});

document.getElementById("london").innerHTML =
new Date().toLocaleTimeString("en-US",{
timeZone:"Europe/London",
hour12:true
});

document.getElementById("newyork").innerHTML =
new Date().toLocaleTimeString("en-US",{
timeZone:"America/New_York",
hour12:true
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

setInterval(updateClocks,1000);
updateClocks();
}

setInterval(updateClocks,1000);
updateClocks();

console.log("Script Running");
