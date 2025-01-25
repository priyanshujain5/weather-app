const apikey="2245566993d21f69349ebdef7b8ebcd0";
const apiUrl= "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";


const cityname = document.getElementById("searchbox");


window.addEventListener('keydown',(k)=>{
    if(k.key == "Enter")
    findWeather(cityname.value);
})

const b=document.getElementById("search");
b.addEventListener("click",()=>{
    findWeather(cityname.value);
})
const findWeather = async (city="delhi")=>{
 const response= await fetch(apiUrl + city + `&appid=${apikey}`);
 var d = await response.json();
 console.log(d)


 document.querySelector(".city").innerHTML = d.name;

 let t = d.main.temp;
 let h= d.main.humidity;
 let w= d.wind.speed;
  if(t > 35)
    {
         let a =document.querySelector(".temp");
         a.innerHTML= Math.round(t)+"°C";
         a.style.color="red";

    }
    else 
    {
        let a =document.querySelector(".temp");
         a.innerHTML= Math.round(t)+"°C";
         a.style.color="black";
    }

    if(h < 50){
        let a =document.querySelector(".humidity");
         a.innerHTML= h+" %";
         a.style.color="black";
    }

    else{
        let a =document.querySelector(".humidity");
        a.innerHTML= h +" %";
        a.style.color="red";
    }

    if(w > 30){
        let a =document.querySelector(".wind");
        a.innerHTML= w+" kmph";
        a.style.color="red";
    }
    else{
        let a =document.querySelector(".wind");
        a.innerHTML= w+" kmph";
        a.style.color="black";
    }

    let ic = d.weather[0].main;
    let des = d.weather[0].description;
    let icon= document.querySelector(".icon");
    let desc= document.querySelector("#desc");

   switch(ic){
    case "Clouds": icon.src="image/images/clouds.png"; desc.innerHTML= des; document.querySelector(".content").style.backgroundColor=" grey"; break;
    case "Haze": icon.src="image/images/drizzle.png"; desc.innerHTML= des;  document.querySelector(".content").style.backgroundColor="light grey";break;
    case "Humidity": icon.src="image/images/humidity.png";desc.innerHTML= des; document.querySelector(".content").style.backgroundColor="grey"; break;
    case "Mist": icon.src="image/images/mist.png";desc.innerHTML= des; document.querySelector(".content").style.backgroundColor=" grey"; break;
    case "Snow": icon.src="image/images/snow.png";desc.innerHTML= des; document.querySelector(".content").style.backgroundColor="smokewhite"; break;
    case "Rain": icon.src="image/images/rain.png";desc.innerHTML= des; document.querySelector(".content").style.backgroundColor="blue"; break;
    case "Wind": icon.src="image/images/wind.png";desc.innerHTML= des; document.querySelector(".content").style.backgroundColor=" grey"; break;
    case "Clear": icon.src="image/images/clear.png";desc.innerHTML= des; document.querySelector(".content").style.backgroundColor="white"; break;

   }
       
}





