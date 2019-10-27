var clickCount = 0;

function moreProjects(){
    if (clickCount % 2 === 0){
        document.getElementById("moreProjects").textContent = "Show Fewer";

        for(var i = 0; i < moreArray.length; i++) {
            appendMore(moreArray[i], moreContainer);
        }
    }
    else {
        document.getElementById("moreProjects").textContent = "More Projects";
        
        document.getElementById("moreProjects").empty();
    }

    clickCount += 1;    
}

var projectArray = [
    {projectName: "Super Mileage Vehicle", image: "img/BruinRacing.jpg", imageAlt: "SMV Image Not Available", 
    projectText: "SMV is building a racecar that consumes fuel as efficiently as possible in order to claim the title of World's Most Efficient Vehicle. As the Research and Development Lead, I am responsible for mission critical projects that improve the efficiency of our automotive vehicle. I develop a unique data acquisition system that aggregates data from sensors around the vehicle and create mathematical models of the car using simulation software.", 
    website: "https://www.bruinracing.com/smv/", organization: "Bruin Racing | SMV", date: "2018 - 2019"},

    {projectName: "BR3W", image: "img/BR3W.jfif", imageAlt: "BR3W Image Not Available", 
    projectText: "I am a Co-Project Manager for BR3W, a team that is developing a smart coffee machine that combines the customization of a cafe with the convenience of a Keurig. I manage a team of 10 hardware engineers as we construct a working prototype of the device and program a micro controller to control the machine from a mobile application (iOS + Android).", 
    website: "https://uclacreatives.github.io/", organization: "UCLA Creative Labs", date: "2019"},

    {projectName: "UberKuber", image: "img/BoozAllen.jpg", imageAlt: "Booz Allen Image Not Available", 
    projectText: "My team developed a cluster visualization tool for containerized applications using Kubernetes. It serves as an enterprise level tool to monitor the real time status of nodes and containers of a system. We won 1st Place Overall out of 81 teams judged by leadership at McLean HQ for providing insight on the health and performance of an infrastructure with a customizable UI for the needs of clients using React, Redux, JavaScript, and Enterprise Architect.", 
    website: "https://www.boozallen.com/", organization: "Booz Allen Hamilton", date: "2019"},
    
    {projectName: "CHIPS Research Lab", image: "img/CHIPS.jpg", imageAlt: "CHIPS Image Not Available", 
    projectText: "In the CHIPS research lab, I am helping develop a prototype flexible gas sensor that can detect any changes in air quality for use in developing nations or for people with sensitivities to particulates. The sensor is small enough to fit within a watch or other wearable technologies. I primarily work on software programming so that the sensor can instantly communicate information to the user.", 
    website: "https://chips.ucla.edu", organization: "CHIPS Research Lab", date: "2019"},
]

var moreArray = [
    {projectName: "Cush", image: "img/Cush.png", imageAlt: "Cush Image Not Available", 
    projectText: "At Cush, we developed a smart home bean bag that communicate with other IOT devices like a Google home. Now you have the ability to control lighting, heating, and even a wireless charger inside the beanbag from a convenient mobile app.", 
    website: "https://uclacreatives.github.io/", organization: "UCLA Creative Labs", date: "2019"},

    {projectName: "JCHS X Habitat for Humanity", image: "", imageAlt: "", 
    projectText: "Habitat for Humanity was a large scale project designed to construct four walls of a home for a family who can't afford their own house. Along with three other students, I led efforts to fundraise over $4,000 and coordinate dozens of volunteers. It was first time ever held and it was the biggest service event of the year.", 
    website: "https://www.habitat.org/", organization: "Habitat For Humanity", date: "2017 - 2018"},

    {projectName: "Eagle Scout Project", image: "", imageAlt: "", 
    projectText: "As the culmination of my Boy Scouting career, I decided to work with the Historical Society of West Caldwell to create a digital collection of clothing articles. Some pieces, dating back to the 1700s, were carefully perserved in boxes but were unavailable for academic study. The digital archive allows for universal access. I earned my Eagle Scout award in June of 2016.", 
    website: "https://www.scouting.org/", organization: "Boy Scouts of America", date: "2016"},

    {projectName: "Golden State Solar Car", image: "img/GoldenState.png", imageAlt: "Golden State Image Not Available", 
    projectText: "My team designed a four-passenger solar-powered vehicle for entry in the 2019 Bridgestone World Solar Challenge. I served as the Composites and Aerodynamics Lead where I ran finite element analysis on the composite shell using MSC Apex and Ansys to ensure safety and design standards. I also ran CFD analysis using Star CCM to optimize aerodynamics", 
    website: "https://goldenstatesolarteam.com/", organization: "Golden State Racing", date: "2018 - 2019"},

    {projectName: "Bruin Space: Reach", image: "", imageAlt: "", 
    projectText: "In Bruin Space: Project Reach, we are developing a CubeSat with a modular payload to fly on an amateur rocket to about 30,000 feet. It contains state of art radio communication hardware and is controlled via an onboard Rasp Pi. I 3D modelling to create the chassis structure design according to very specific mass and volume budgets.", 
    website: "https://www.bruinspace.com/", organization: "Bruin Space", date: "2018 - 2019"},

    {projectName: "IdeaHacks | 1st Place", image: "", imageAlt: "", 
    projectText: "IdeaHacks is an annual hardware hackathon competition hosted at UCLA by Tao Beta Pi and IEEE. My team created a functioning smart lock that uses an RFID sensor to validate authorization. It used an industry standard ball bearing locking mechanism and we 3D printed a prototype housing that we designed ourselves. We earned first place overall against over 30 other teams.", 
    website: "http://www.ideahacks.la/", organization: "IdeaHacks", date: "2018"},

    {projectName: "The Bruin Experiment", image: "", imageAlt: "", 
    projectText: "The Bruin Experiment is a volunteering organization dedicated to the mission of spreading knowledge to the next generation of scientists and researchers. I volunteered weekly to demonstrate experiments for middle school students in LA. The program culminates in a science fair at UCLA where the students show off their own research projects.", 
    website: "https://www.palmsmiddleschool.org/the-bruin-experiment", organization: "The Bruin Experiment", date: "2018 - 2019"},
]

var projectContainer = "#Projects";
var moreContainer = "#collapseProjects";

function appendMain(project, container)
{
    var tag = 
            "<div class=\"card main-project mb-3\">" + 
                "<h3 class=\"card-header\">" + project.projectName + "</h3>" + 
                "<a href=\"" + project.image + "\" \>" + 
                    "<img class=\"img-project\" alt=\"Sorry image not available\" src=\"" + project.image + "\"/>" + 
                "</a>" + 
                "<div class=\"card-body\">" + 
                    "<p class=\"card-text\">" + project.projectText + "</p>" + 
                "</div>" + 
                "<div class=\"card-footer\">" +                            
                    "<a href=\"" + project.website + "\" class=\"card-link\">" + project.organization + "</a>" + 
                    "<span class=\"card-text float-right\">" + project.date + "</span>" + 
                "</div>" +
            "</div>" 
    $(container).append(tag);
}

function appendMore(project, container) {
    var tag = 
        "<div class=\"card past-project mb-3\">" + 
            "<h3 class=\"card-header\">" + project.projectName + "</h3>" + 
            "<div class=\"card-body\">" + 
                "<p class=\"card-text\">" + 
                    project.projectText +     
                "</p>" + 
            "</div>" +   
            "<div class=\"card-body\">" + 
            "<a href=\"" + project.website + "\" class=\"card-link\">" + project.organization + "</a>" + 
            "<span class=\"card-text float-right\">" + project.date + "</span>" + 
            "</div>" + 
        "</div>"
    $(container).append(tag);
}

function mainProjects() {
    for(var i = 0; i < projectArray.length; i++)
    {
        appendMain(projectArray[i], projectContainer);
    }
}

mainProjects();

// When the user scrolls down 80px from the top of the document, resize the navbar's padding and the logo's font size
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  document.getElementById("Top").style.backgroundColor = "initial";
}