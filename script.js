function start(){
document.querySelector('#img').style.display='block';
  let ip = document.querySelector("input").value;
  // Fetching Api
  
  fetch(`http://ip-api.com/json/${ip}`)
  .then((response) => {
      return response.json();  
  })
  .then((data) => {
      const {query} = data;
      let {status} = data;
      const {message} = data;
      const {country} = data;
      const {regionName} = data;
      const {lat} = data;
      const {lon} = data;
      const {city} = data;
      const {isp} = data;
      const {org} = data;
      if(message != undefined){
      alert(message);
      }
       document.querySelector("#status").innerHTML=status;
document.querySelector("#country").innerHTML=country;       
document.querySelector("#state").innerHTML=regionName;  
document.querySelector("#latitude").innerHTML=lat;
document.querySelector("#longitude").innerHTML=lon;
let cit = document.querySelector("#city");
cit.innerHTML=city; 
document.querySelector("#isp").innerHTML=isp;   document.querySelector("#organization").innerHTML=org;  

if(cit.innerHTML != null){
    document.querySelector('#img').style.display="none";
 }  document.querySelector("#display").style.display="block";   
  });
}
