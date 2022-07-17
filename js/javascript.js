let userDate = new Date();
let days = ["Sunday ","Monday","Tuesday","Wednesday","Thursday","Friday","Saterday"];
let months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
let userCountryWeather = document.querySelector(".user-country-weather");
let userCountryTimeDate = document.querySelector(".user-country-time-date");

function userDateTime(){
    userCountryTimeDate.innerHTML = `it's ${userDate.getHours()}:${userDate.getMinutes()} in ${days[userDate.getDay()]} the ${userDate.getUTCDate()} <sup>th</sup> of ${months[userDate.getMonth()]}`
}
userDateTime();

function getLocationIp(){
    fetch("https://ipinfo.io?token=3cb6b03b1fa74c")
    .then(
        (locationIpRes)=>{
            let res = locationIpRes.json();
            return res;
        }
    )
    .then(
        (findingLocationUsingIp)=>{
            getWeather(findingLocationUsingIp.city)
            return findingLocationUsingIp;
        }
    )
}
getLocationIp()

function getWeather(cityName){
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=14ea0115b7324b504c9912e53a5b367d`)
    .then(
        (result)=>{
            let res = result.json();
            return res;
        }
    )
    .then(
        (bigRes)=>{
            let kelvin = 274;
            let userWeather = JSON.stringify(bigRes.main.temp - kelvin)
            userCountryWeather.innerHTML = "your weather today is " + parseInt(userWeather) + "&degc"
        }
    )
}

let coursesBtn = document.querySelector(".courses");
let coursesSection = document.querySelector(".courses-section");
let closeCourseSection = document.querySelector(".close-course-section");

coursesBtn.addEventListener("click",()=>{
    coursesSection.style.top = "0px"
})
closeCourseSection.addEventListener("click",()=>{
    coursesSection.style.top = "-150%"
})