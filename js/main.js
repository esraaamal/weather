
       let today=new Date()
       let weekDay=today.toLocaleString('en-us', {  weekday: 'long' })
       let allDate= `${today}`.split(" ")[2]+' '+`${today}`.split(" ")[1]+' '+`${today}`.split(" ")[3];
       //the weekDay
       let dateDayname=document.querySelector('.date-dayname')
       dateDayname.innerText=weekDay
       //the Date
       let dateDay=document.querySelector('.date-day')
       dateDay.innerText=allDate

function apiFetch(cityName){
const api_url=`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=5a8120244aec4cdfaaa73b6d62b9c18b`
       async function getJason(){
            const respnse = await fetch(api_url)
            const data=await respnse.json();
         //location data
let location=document.querySelector('.location')
location.innerText=data.name+', '+data.sys.country
//the temp
let weatherTemp=document.querySelector('.weather-temp')
weatherTemp.innerText=convertToCelsius(data.main.temp)
//the cloud
let weatherDesc=document.querySelector('.weather-desc')
weatherDesc.innerText=data.weather[0].main;

//the desciption
let perc=document.getElementById('perc')
perc.innerText=data.main.humidity+'%'

//the humadity
let humadity=document.getElementById('humadity')
humadity.innerText=data.main.humidity+'%'
//the speed
let speed1=document.getElementById('speed1');
speed1.innerText=data.wind.speed+"km/h"

        }
        getJason()


}
function convertToCelsius(num){
    let c=num - 273.15
return `${c}`.substr(0,2)+"°C"
}

 country.addEventListener('change', function myFunction() {
     let cityName1=country.value;
     apiFetch(cityName1)

  })
