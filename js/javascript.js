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

let htmlCourses = [
    "intro to html",
    "body tag",
    "head tag",
    "meta tag",
    "title tag",
    "link tag",
    "style tag",
    "script tag",
    "comment",
    "header tag",
    "heading tag",
    "paragraph tag",
    "div tag",
    "anchors tag",
    "semantic tag",
    "table tag",
    "lists tag",
    "multimedia tag",
    "form tag",
    "global attributes",
    "contenteditable"
];
let cssCourses = [
    "intro to css",
    "font-size",
    "font-weight",
    "font-style",
    "font-family",
    "text-transform",
    "letter-spacing",
    "color",
    "background-color",
    "background-image",
    "background-repeat",
    "background-position",
    "background-size",
    "background-attachment",
    "background-clip",
    "background-origin",
    "margin",
    "padding",
    "height",
    "width"
];
let htmlCoursesList = document.querySelector(".html-items");
for(let i = 0; i < htmlCourses.length; i++){
    let htmlCoursesItems = document.createElement("li");
    htmlCoursesItems.classList.add("html-course-items");
    htmlCoursesList.appendChild(htmlCoursesItems);
    let htmlCourseItems = document.querySelectorAll(".html-items li");
    htmlCourseItems.forEach((courseItem,index)=>{
        courseItem.innerHTML = htmlCourses[index].toUpperCase();
        courseItem.style.cssText = "font-weight:bold;position:relative;color:#EEE;font-family:Arial,sans-serif;letter-spacing:2px;cursor:pointer;margin-top:15px;text-align:center;transition:.2s all linear"
    })
}
let cssCoursesList = document.querySelector(".css-items");
for(let i = 0; i < cssCourses.length; i++){
    let cssCoursesItems = document.createElement("li");
    cssCoursesItems.classList.add("css-course-items");
    cssCoursesList.appendChild(cssCoursesItems);
    let cssCourseItems = document.querySelectorAll(".css-items li");
    cssCourseItems.forEach((courseItem,index)=>{
        courseItem.innerHTML = cssCourses[index].toUpperCase();
        courseItem.style.cssText = "font-weight:bold;font-size:14px;position:relative;color:#EEE;font-family:Arial,sans-serif;letter-spacing:2px;cursor:pointer;margin-top:18px;text-align:center;transition:.2s all linear"
    })
}
let signUpBtn = document.querySelector(".sign-up-btn")
let signUpForm = document.querySelector(".sign-up-form")
let signInBtn = document.querySelector(".sign-in-btn")
let signInForm = document.querySelector(".sign-in-form")

signUpBtn.onclick = function(){
    signUpForm.classList.remove("hide-forms")
    if(!signInForm.classList.contains("hide-forms")){
        signInForm.classList.add("hide-forms")
    }
}
signInBtn.onclick = function(){
    signInForm.classList.remove("hide-forms")
    if(!signUpForm.classList.contains("hide-forms")){
        signUpForm.classList.add("hide-forms")
    }
}
let navigatorBtns = document.querySelectorAll(".navBar-list li a");
let contactSection = document.querySelector(".contact-section");
window.addEventListener("scroll",()=>{
    if(document.documentElement.scrollTop >= parseInt((contactSection.offsetTop - document.documentElement.scrollTop))){
        console.log("reached");
    }else{
        console.log("not reached")
    }
})
console.log(window.scrollY)
console.log(contactSection.children[0].childNodes)
// var color = window.getComputedStyle(
// 	document.querySelector('.contact-section').children[0], ':after'
// ).getPropertyValue('transform');
// console.log(color)