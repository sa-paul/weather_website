

var inputvalue=document.querySelector('.inputvalue');
var temp=document.querySelector('.temp');
var description=document.querySelector('.desc');
var button=document.querySelector('.button');
var wind=document.querySelector('.wind');
var place=document.querySelector('.name');
var humidity=document.querySelector('.humidity');

button.addEventListener('click', function(){
    let fetchRes = fetch(
    "https://api.openweathermap.org/data/2.5/weather?q="+ inputvalue.value + "&appid=08b6c6e805389c609beb665a1a4bc933");
      
            fetchRes.then(res =>
                res.json()).then(data => {
               console.log(data);
               temp.innerHTML= (data['main']['temp']-273.15).toFixed(2) +"  °C";
               description.innerHTML= data['weather']['0']['description'];
                wind.innerHTML="Wind Speed : "+data['wind']['speed'] +"km/h"
                 place.innerHTML= 'Place : '+data['name'];
                 humidity.innerHTML='Humidity   :   '+data['main']['humidity']+"%";
            })
            

})

