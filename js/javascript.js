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
    
    coursesSection.style.display = "block";
    setTimeout(()=>{
        coursesSection.style.top = "0px";
    },70)
})
closeCourseSection.addEventListener("click",()=>{
    coursesSection.style.top = "-160%";
    setTimeout(()=>{
        coursesSection.style.display = "none";
    },1000)
    
});

let htmlCourses = ["intro to html","body tag","head tag","meta tag","title tag","link tag","style tag","script tag","comment","header tag","heading tag","paragraph tag","div tag","anchors tag","semantic tag","table tag","lists tag","multimedia tag","form tag","global attributes","contenteditable"];
let htmlCoursesList = document.querySelector(".html-items");
for(let i = 0; i < htmlCourses.length; i++){
    let htmlCoursesItems = document.createElement("li");
    htmlCoursesItems.classList.add("html-course-items");
    htmlCoursesList.appendChild(htmlCoursesItems);
    let htmlCourseItems = document.querySelectorAll(".html-items li");
    htmlCourseItems.forEach((courseItem,index)=>{
        courseItem.innerHTML = htmlCourses[index].toUpperCase();
        courseItem.style.cssText = "position:relative;color:#EEE;font-family:Arial,sans-serif;letter-spacing:2px;cursor:pointer;margin-top:15px;text-align:center;transition:.2s all linear"
    })
}