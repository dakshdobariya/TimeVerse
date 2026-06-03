function updateClocks(){

document.getElementById("india").innerHTML =
new Date().toLocaleTimeString("en-IN",{timeZone:"Asia/Kolkata"});

document.getElementById("london").innerHTML =
new Date().toLocaleTimeString("en-GB",{timeZone:"Europe/London"});

document.getElementById("newyork").innerHTML =
new Date().toLocaleTimeString("en-US",{timeZone:"America/New_York"});

document.getElementById("tokyo").innerHTML =
new Date().toLocaleTimeString("ja-JP",{timeZone:"Asia/Tokyo"});

document.getElementById("dubai").innerHTML =
new Date().toLocaleTimeString("en-AE",{timeZone:"Asia/Dubai"});
  
document.getElementById("singapore").innerHTML =
new Date().toLocaleTimeString("en-SG",{timeZone:"Asia/Singapore"});

document.getElementById("paris").innerHTML =
new Date().toLocaleTimeString("fr-FR",{timeZone:"Europe/Paris"});

document.getElementById("utc").innerHTML =
new Date().toUTCString().split(" ")[4];

document.getElementById("local").innerHTML =
new Date().toLocaleTimeString();
  
}

setInterval(updateClocks,1000);
updateClocks();

console.log("Script Running");
