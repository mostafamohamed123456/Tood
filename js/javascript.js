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
    "html tags",
    "html attributes",
    "html vs html5"
];
let cssCourses = [
    "intro to css",
    "css refrences",
    "css responsive",
    "css3 refrences"
];
let javascriptCourses = [
    "intro to javascript",
    "javascript refrences",
    "javsacript dom refrences",
    "javsacript bom refrences"
];
let bootstrapCourses = [
    "intro to bootstrap",
    "bootstrap refrences",
    "bootstrap forms",
    "bootstrap grid"
];
let htmlCoursesList = document.querySelector(".html-items");
for(let i = 0; i < htmlCourses.length; i++){
    let htmlCoursesItems = document.createElement("li");
    htmlCoursesItems.classList.add("html-course-items");
    htmlCoursesList.appendChild(htmlCoursesItems);
    let htmlCourseItems = document.querySelectorAll(".html-items li");
    htmlCourseItems.forEach((courseItem,index)=>{
        courseItem.innerHTML = htmlCourses[index].toUpperCase();
        courseItem.style.cssText = "padding-bottom:10px;width:85%;font-weight:bold;position:relative;color:#EEE;font-family:Arial,sans-serif;letter-spacing:2px;cursor:pointer;margin-top:15px;text-align:center;transition:.2s all linear;"
        courseItem.addEventListener("click",()=>{
            if(courseItem.parentElement.parentElement.classList.contains("html")){
                let courseItemName = courseItem.textContent;
                localStorage.setItem("courseName",courseItemName);
                window.open("courses.html","_self");
            }
        })
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
        courseItem.style.cssText = "padding-bottom:10px;width:85%;font-weight:bold;font-size:14px;position:relative;color:#EEE;font-family:Arial,sans-serif;letter-spacing:2px;cursor:pointer;margin-top:18px;text-align:center;transition:.2s all linear"
        courseItem.addEventListener("click",()=>{
            if(courseItem.parentElement.parentElement.classList.contains("css")){
                let courseItemName = courseItem.textContent;
                localStorage.setItem("courseName",courseItemName);
                window.open("courses.html","_self");
            }
        })
    })
}
let javascriptCoursesList = document.querySelector(".js-items");
for(let i = 0; i < javascriptCourses.length; i++){
    let javascriptCoursesItems = document.createElement("li");
    javascriptCoursesItems.classList.add("js-course-items");
    javascriptCoursesList.appendChild(javascriptCoursesItems);
    let javascriptCourseItems = document.querySelectorAll(".js-items li");
    javascriptCourseItems.forEach((courseItem,index)=>{
        courseItem.innerHTML = javascriptCourses[index].toUpperCase();
        courseItem.style.cssText = "padding-bottom:10px;width:85%;font-weight:bold;font-size:14px;position:relative;color:#EEE;font-family:Arial,sans-serif;letter-spacing:2px;cursor:pointer;margin-top:18px;text-align:center;transition:.2s all linear"
        courseItem.addEventListener("click",()=>{
            if(courseItem.parentElement.parentElement.classList.contains("javascript")){
                let courseItemName = courseItem.textContent;
                localStorage.setItem("courseName",courseItemName);
                window.open("courses.html","_self");
            }
        })
    })
}
let bootstrapCoursesList = document.querySelector(".bootstrap-items");
for(let i = 0; i < bootstrapCourses.length; i++){
    let bootstrapCoursesItems = document.createElement("li");
    bootstrapCoursesItems.classList.add("bootstrap-course-items");
    bootstrapCoursesList.appendChild(bootstrapCoursesItems);
    let bootstrapCourseItems = document.querySelectorAll(".bootstrap-items li");
    bootstrapCourseItems.forEach((courseItem,index)=>{
        courseItem.innerHTML = bootstrapCourses[index].toUpperCase();
        courseItem.style.cssText = "padding-bottom:10px;width:85%;font-weight:bold;font-size:14px;position:relative;color:#EEE;font-family:Arial,sans-serif;letter-spacing:2px;cursor:pointer;margin-top:18px;text-align:center;transition:.2s all linear";
        courseItem.addEventListener("click",()=>{
            if(courseItem.parentElement.parentElement.classList.contains("bootstrap")){
                let courseItemName = courseItem.textContent;
                localStorage.setItem("courseName",courseItemName);
                window.open("courses.html","_self");
            }
        })
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
navigatorBtns[1].addEventListener("click",(e)=>{
    e.preventDefault();
});
navigatorBtns[3].addEventListener("click",(e)=>{
    e.preventDefault();
});
//searchSection
let searchSection = document.createElement("div");
let searchBar = document.createElement("input");
let searchBtn = document.createElement("button");
let searchSectionClose = document.createElement("span");
let showSearchResult = document.createElement("div");
let searchBoxResultList = document.createElement("ul");
let searchBoxResultListItem = document.createElement("li");

navigatorBtns[3].onclick = ()=>{
    searchBar.setAttribute("type","search");
    searchBar.setAttribute("placeholder","search in lessons");

    searchBtn.innerHTML = "search <i class='fas fa-search'></i>";
    searchSectionClose.innerHTML = "<i class='fas fa-window-close'></i>";

    searchSection.style.cssText = "overflow:auto;display:flex;flex-direction:column;align-items:center;text-align:center;position:fixed;z-index:3;background:#222222fc;left:0px;top:0px;height:98%;width:100%";
    searchBtn.style.cssText="background:rgb(10, 161, 226);color:#FFF;display:inline-block;margin:60px 10px;cursor:pointer;width:200px;border-radius:2px;border:0px;padding:7px;outline:none;font-size: 19px;text-transform:uppercase";
    searchSectionClose.style.cssText = "position:absolute;top:15px;right:30px;color:#EEE;font-size:30px;background:#222;cursor:pointer;";

    searchSection.classList.add("search-section")

    searchBtn.addEventListener("click",()=>{
        searchSection.remove();
    
        let newWord = new RegExp(searchBar.value, "i");
        if(searchBar.value !== ""){
            let arr = [];
            for(let r = 0; r < document.body.children.length; r++){
                arr.push(document.body.children[r])
            }
            let arr2 = [];
            let arr3 = [];
            arr.forEach((eachItem)=>{
                for(let y =0; y < eachItem.children.length; y++){
                    arr2.push(eachItem.children[y])
                }
            })
            arr2.forEach((item)=>{
                if(item.textContent.split(0).join(" ").search(newWord) !== -1){
                    item.style.background = "yellow"
                    item.style.color = "#FF0";
                    showSearchResult.style.cssText = "background:#EEE;color:#FF0"
                    showSearchResult.textContent = item.innerHTML;  
                    
                    arr3.push(item.textContent.substr(item.textContent.indexOf(searchBar.value),item.textContent.indexOf(searchBar.value)-1));
                }
                for(let y = 0; y < item.children.length; y++){
                    if(item.children[y].textContent.split(0).join(" ").search(newWord) !== -1){
                        item.children[y].style.background = "yellow"
                        item.children[y].style.color = "#0FF";
                        showSearchResult.style.cssText = "background:#EEE;color:#0FF;"
                        showSearchResult.textContent = item.children[y].innerHTML;
                        arr3.push(item.children[y].textContent.substr(item.children[y].textContent.indexOf(searchBar.value),item.children[y].textContent.indexOf(searchBar.value)-1));
                    }
                    for(let x = 0; x < item.children[y].children.length; x++){
                        if(item.children[y].children[x].textContent.search(newWord) !== -1){
                            item.children[y].children[x].style.background = "yellow"
                            item.children[y].children[x].style.color = "#F0F";
                            showSearchResult.style.cssText = "background:#EEE;color:#F0F;"
                            showSearchResult.textContent = item.children[y].children[x].innerHTML;
                            arr3.push(item.children[y].children[x].textContent.substr(item.children[y].children[x].textContent.indexOf(searchBar.value),item.children[y].children[x].textContent.indexOf(searchBar.value)-1));
                        }
                    }
                }
            });
            console.log(arr3.length);
            console.log(arr3)
        }else{
            return;
        }
        
    });
    searchSectionClose.addEventListener("click",()=>{
        searchSection.remove();
    });
    document.body.appendChild(searchSection);
    searchSection.appendChild(searchBar);
    searchSection.appendChild(searchBtn);
    searchSection.appendChild(searchSectionClose);
    showSearchResult.appendChild(searchBoxResultList);
    searchBoxResultList.appendChild(searchBoxResultListItem);
    searchSection.appendChild(showSearchResult);
    searchBar.focus();
}






let contactHeader = document.querySelector(".contact-section header");
let afterSelector = window.getComputedStyle(contactHeader, "::after");
let properValues = afterSelector.getPropertyValue("transform") 

window.onscroll = ()=>{
    if(document.documentElement.scrollTop >= (contactHeader.offsetTop - document.documentElement.scrollTop)){
        contactHeader.style.setProperty("--scaleSize","1")
    }else{
        contactHeader.style.setProperty("--scaleSize","0")
    }
}

let responsiveNavBar;
let responsiveBtn = document.querySelector(".responsive-btn");
responsiveBtn.addEventListener("click",function(){
    responsiveBtn.classList.toggle("show");
    
    if(responsiveBtn.classList.contains("show")){
        responsiveNavBar = document.createElement("div");
        let responsiveNavBarList = document.createElement("ul");
        responsiveNavBar.classList.add("responsiveNavBar");
        responsiveNavBarList.classList.add("responsiveNavBarList");
        responsiveNavBarList.style.cssText = "list-style-type:none;text-align:center;";
        document.body.appendChild(responsiveNavBar);
        responsiveNavBar.appendChild(responsiveNavBarList);
        setTimeout(()=>{
            responsiveNavBar.classList.add("showResponsiveNavBar")
        },80)
        for(let y = 0; y <= navigatorBtns.length; y++){
            let responsiveNavBarListItems = document.createElement('li');
            responsiveNavBarList.appendChild(responsiveNavBarListItems);
            responsiveNavBarListItems.classList.add("responsiveNavBarListItems");
            responsiveNavBarListItems.style.cssText = "text-transform:uppercase;font-size:20px;font-family:Arial, sans-serif;padding:5px;margin-top:8px;";
        }
        let responsiveNavBarListItemsBtns = document.querySelectorAll(".responsiveNavBarListItems");
        navigatorBtns.forEach((navBtn,navBtnIndex)=>{
            responsiveNavBarListItemsBtns[navBtnIndex].textContent =  navBtn.textContent;
            responsiveNavBarListItemsBtns[navBtnIndex].addEventListener("click",()=>{
                navBtn.click();
                responsiveNavBar.remove();
            }) 
        });
    }else{
        responsiveNavBar.remove()
    }
    
});

let childOne = document.querySelector(".child-no-1");
let childTwo = document.querySelector(".child-no-2");
let childThree = document.querySelector(".child-no-3");

let childOneListItems = childOne.children[1].children;
for(let i = 0; i < childOneListItems.length; i++){
    childOneListItems[i].addEventListener("click",()=>{
        let childOneCourses = childOneListItems[i].textContent;
        localStorage.setItem("childOneCourses",childOneCourses);
        window.open("courses.html","_self");
    })
}
/*
    applications Links:-
    weather:- https://mostafamohamed123456.github.io/Weather/
    date-time:-
    to-do-list:-
    memory-game:-https://mostafamohamed123456.github.io/Memory-Game/
*/
let childTwoListItems = childTwo.children[1].children;
console.log(childTwoListItems)
for(let i = 0; i < childTwoListItems.length; i++){
    childTwoListItems[i].addEventListener("click",()=>{
        if(childTwoListItems[i].classList.contains("weather")){
            window.open("https://mostafamohamed123456.github.io/Weather/","_blank")
        }else if(childTwoListItems[i].classList.contains("memory-game")){
            window.open("https://mostafamohamed123456.github.io/Memory-Game/","_blank")
        }else if(childTwoListItems[i].classList.contains("to-do-list")){
            window.open("https://mostafamohamed123456.github.io/Memory-Game/","_blank")
        }else if(childTwoListItems[i].classList.contains("date-time")){
            window.open("https://mostafamohamed123456.github.io/Memory-Game/","_blank")
        }
    })
}
// let childThreeListItems = childThree.children[1].children;
// for(let i = 0; i < childOneListItems.length; i++){
//     childOneListItems[i].addEventListener("click",()=>{
//         let childOneCourses = childOneListItems[i].textContent;
//         localStorage.setItem("childOneCourses",childOneCourses);
//         window.open("courses.html","_self");
//     })
// }

let contactSection = document.querySelector(".contact-section");
contactSection.children[1].addEventListener("click",()=>{
    if(contactSection.children[1].textContent.split(0).join("").search(/facebook/i) !== -1){
        window.open("https://www.facebook.com/mostafa.abosaba/");
    }
})
contactSection.children[2].addEventListener("click",()=>{
    if(contactSection.children[2].textContent.split(0).join("").search(/twitter/i) !== -1){
        window.open("https://twitter.com/mostafa74459923");
    }
})
contactSection.children[3].addEventListener("click",()=>{
    if(contactSection.children[3].textContent.split(0).join("").search(/github/i) !== -1){
        window.open("https://github.com/mostafamohamed123456");
    }
})
