const weatherIcons = {
    "Rain": "wi wi-day-rain",
    "Clouds": "wi wi-day-cloudy",
    "Clear": "wi wi-day-sunny",
    "Snow": "wi wi-day-snow",
    "mist": "wi wi-day-frog",
    "Drizzle": "wi wi-day-sleet",
}

function capitale(str) {
    return str[0].toUppercase() + str.slice(1);
}

/* 1. récuperer l'adresse IP du pc qui ouvre la page :
https://api.ipify.org?format=json

   2. recuperer la ville grace à l'adresse IP :
http://freegeoip.app/json/

  3. récuperer les infos météos grace à la ville :
http://api.openweathermap.org/data/2.5/weather?q=${ville}&appid=8e602b9ea28ed4f9f8fc97a5f6d1105c&lang=fr&units=metric

4. afficher les informations météo 

/* function main(){
//1

const ip = fetch("http://api.ipify.org/?format=json")
.then(resultat => resultat.json())
 .then(json=>{
 const ip= json.ip;  
//2
      fetch("https://freegeoip.app/json/")
  .then(resultat => resultat.json())
  .then(json => {
            const ville= json.city;
             console.log("dedans:" + ip + ville);
//3    
    /*  fetch("http://api.openweathermap.org/data/2.5/weather?q=${ville}&appid=b4f90222b35c05b92b96116bad8b3da4&lang=fr&units=metric")            
      .then(resultat => resultat.json())
      .then(json => {
     
         //afficher les informations
           console.log(json);       
     })
 })
})
    
}

main();*/

function capitale(str) {
    return str[0].toUppercase() + str.slice(1);
}
const url1 = "http://api.ipify.org/?format=json"
const url2 = "https://freegeoip.app/json/"


async function main() {
    try {

        let ip = await fetch(url1)
        ip = await ip.json()
        ip = await ip.ip
        console.log(ip)
        let ville = await fetch(url2)
        ville = await ville.json()
        ville = await ville.city
        console.log(ville)
        
        //3    
        let meteo = await fetch ("http://api.openweathermap.org/data/2.5/weather?q="+ville+"&appid=b4f90222b35c05b92b96116bad8b3da4&lang=fr&units=metric")            
        meteo= await meteo.json()
        meteo = await meteo
       console.log(meteo);  

             //afficher les informations
               afficherMeteoInfos(meteo)       
         }
    
    catch (e) {
console.log(e)
    }
  
}



function afficherMeteoInfos(data){
 const name = data.name;
 const temperature = data.main.temperature;
 const conditions = data.weather[0].main;
 const description = data.weather[0].description;

 document.querySelector("#ville").textContent = name;
}
main();