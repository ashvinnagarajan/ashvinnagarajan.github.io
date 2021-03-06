var projectArray = [
    {
        projectName: "Bruin SuperMileage EV", image: "img/BruinRacing.jpg", imageAlt: "SMV Image Not Available",
        projectText: "Super Mileage Vehicle at Bruin Racing is a student run organization that manufactures an automotive vehicle to attain the highest possible energy efficiency for the Shell Eco-Marathon competition. As Tech Director, I directly oversee five subsystems: Electrical, Powertrain, Structures, Steering, and R&D. I prioritize projects that our 40+ engineers should pursue and ensure that they are completed effectively. Currently managing 10+ projects including Data Acquisition System, Joulemeter, and BLDC Motor Controller. ",
        website: "https://www.bruinracing.com/smv/", organization: "Bruin Racing | SMV", date: "2018 - 2020"
    },

    {
        projectName: "CHIPS Research Lab", image: "img/CHIPS.jpg", imageAlt: "CHIPS Image Not Available",
        projectText: "In the CHIPS research lab, I worked with a postdoc to develop a prototype flexible gas sensor that can detect any changes in air quality for use as a personal environment monitor. The sensor is small enough to be embedded within a watch, construction mask, or other wearable technologies. I developed the software so that the sensor can communicate information to the user via Bluetooth Low Energy at a frequency of 2 kHz. I also created a JavaScript website to demo the Bluetooth information in real time. Our work was recently published at the 2020 IEEE ECTC conference.",
        website: "https://chips.ucla.edu", organization: "CHIPS Research Lab", date: "2019 - 2020"
    },

    {
        projectName: "Cisco Systems", image: "img/Cisco.jpg", imageAlt: "Cisco Image Not Available",
        projectText: "I worked remotely on the WebEx Teams platform, a product that is used by millions of users every day for video conferencing. I created a service to leverage AWS cloud and Kubernetes infrastructure to dynamically scale resources based on anticipated traffic. I wrote a API that returns predictive data based on an additive regression ML model. I communicated between teams in San Jose and London to ensure that application specific requirements were met. In addition, I also created an internal debug tool that displays the route of media from endpoints in Python.",
        website: "https://www.cisco.com/", organization: "Cisco Systems", date: "2020"
    },

    {
        projectName: "UberKuber", image: "img/BoozAllen.jpg", imageAlt: "Booz Allen Image Not Available",
        projectText: "My team developed a cluster visualization tool for containerized applications using Kubernetes. It serves as an enterprise level tool to monitor the real time status of nodes and containers of a system. We won 1st Place Overall out of 81 teams judged by leadership at McLean HQ for providing insight on the health and performance of an infrastructure with a customizable UI for the needs of clients using React, Redux, JavaScript, and Enterprise Architect.",
        website: "https://www.boozallen.com/", organization: "Booz Allen Hamilton", date: "2019"
    },
]

var moreProjArray = [
    {
        projectName: "Cush", image: "img/Cush.png", imageAlt: "Cush Image Not Available",
        projectText: "At Cush, we developed a smart home bean bag that communicate with other IOT devices like a Google home. Now you have the ability to control lighting, heating, and even a wireless charger inside the beanbag from a convenient mobile app.",
        website: "https://uclacreatives.github.io/", organization: "UCLA Creative Labs", date: "2019"
    },

    {
        projectName: "JCHS X Habitat for Humanity", image: "", imageAlt: "",
        projectText: "Habitat for Humanity was a large scale project designed to construct four walls of a home for a family who can't afford their own house. Along with three other students, I led efforts to fundraise over $4,000 and coordinate dozens of volunteers. It was first time ever held and it was the biggest service event of the year.",
        website: "https://www.habitat.org/", organization: "Habitat For Humanity", date: "2017 - 2018"
    },

    {
        projectName: "Eagle Scout Project", image: "", imageAlt: "",
        projectText: "As the culmination of my Boy Scouting career, I decided to work with the Historical Society of West Caldwell to create a digital collection of clothing articles. Some pieces, dating back to the 1700s, were carefully perserved in boxes but were unavailable for academic study. The digital archive allows for universal access. I earned my Eagle Scout award in June of 2016.",
        website: "https://www.scouting.org/", organization: "Boy Scouts of America", date: "2016"
    },

    {
        projectName: "BR3W", image: "img/BR3W.jpg", imageAlt: "BR3W Image Not Available",
        projectText: "I was a Co-Project Manager for BR3W, a team that developed a smart coffee machine that combines the customization of a cafe with the convenience of a Keurig. I managed a team of 10 hardware and software engineers as we constructed a working prototype of the device and programed a micro controller to control the machine from a mobile application. The team went through the full design process from ideation and feature prioritization to production and testing with key milestones and deliverables at each stage.",
        website: "https://uclacreatives.github.io/", organization: "UCLA Creative Labs", date: "2019"
    },

    {
        projectName: "Golden State Solar Car", image: "img/GoldenState.png", imageAlt: "Golden State Image Not Available",
        projectText: "My team designed a four-passenger solar-powered vehicle for entry in the 2019 Bridgestone World Solar Challenge. I served as the Composites and Aerodynamics Lead where I ran finite element analysis on the composite shell using MSC Apex and Ansys to ensure safety and design standards. I also ran CFD analysis using Star CCM to optimize aerodynamics",
        website: "https://goldenstatesolarteam.com/", organization: "Golden State Racing", date: "2018 - 2019"
    },

    {
        projectName: "IdeaHacks | 1st Place", image: "", imageAlt: "",
        projectText: "IdeaHacks is an annual hardware hackathon competition hosted at UCLA by Tao Beta Pi and IEEE. My team created a functioning smart lock that uses an RFID sensor to validate authorization. It used an industry standard ball bearing locking mechanism and we 3D printed a prototype housing that we designed ourselves. We earned first place overall against over 30 other teams.",
        website: "http://www.ideahacks.la/", organization: "IdeaHacks", date: "2018"
    },

    {
        projectName: "Bruin Space: Reach", image: "", imageAlt: "",
        projectText: "In Bruin Space: Project Reach, we are developing a CubeSat with a modular payload to fly on an amateur rocket to about 30,000 feet. It contains state of art radio communication hardware and is controlled via an onboard Rasp Pi. I 3D modelling to create the chassis structure design according to very specific mass and volume budgets.",
        website: "https://www.bruinspace.com/", organization: "Bruin Space", date: "2018 - 2019"
    },

    {
        projectName: "The Bruin Experiment", image: "", imageAlt: "",
        projectText: "The Bruin Experiment is a volunteering organization dedicated to the mission of spreading knowledge to the next generation of scientists and researchers. I volunteered weekly to demonstrate experiments for middle school students in LA. The program culminates in a science fair at UCLA where the students show off their own research projects.",
        website: "https://www.palmsmiddleschool.org/the-bruin-experiment", organization: "The Bruin Experiment", date: "2018 - 2019"
    },
]

var projectContainer = "#Projects";
var moreContainer = "#collapseProjects";

function appendProj(project, container) {
    var tag =
        "<div class=\"card main-project project mb-3\">" +
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

function appendMoreProj(project, container) {
    var tag =
        "<div class=\"card past-project project mb-3\">" +
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
    for (var i = 0; i < projectArray.length; i++) {
        appendProj(projectArray[i], projectContainer);
    }
}

var clickCount = 0;

function moreProjects() {
    if (clickCount % 2 === 0) {
        document.getElementById("moreProjects").textContent = "Show Fewer";

        for (var i = 0; i < moreProjArray.length; i++) {
            appendMoreProj(moreProjArray[i], moreContainer);
        }
    }
    else {
        document.getElementById("moreProjects").textContent = "More Projects";

        document.getElementById("moreProjects").empty();
    }

    clickCount += 1;
}

mainProjects();

