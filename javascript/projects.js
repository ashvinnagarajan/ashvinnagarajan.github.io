var projectArray = [
    {
        projectName: "Stealth Startup", image: "img/stealth.png", imageAlt: "Stealth Startup",
        projectText: "Currently building something new. More details coming soon.",
        website: "#", organization: "Stealth", date: "2025 - Present"
    },
    {
        projectName: "Applied Intuition", image: "img/AppliedIntuition.jpg", imageAlt: "Applied Intuition",
        projectText: "As an Infrastructure Software Engineer, I built cloud security tooling, optimized multi-cloud Kubernetes clusters with 5k+ nodes for vehicle simulations, and developed authentication services supporting SSO and multi-tenancy. I also onboarded air-gapped government and commercial customers.",
        website: "https://www.appliedintuition.com/", organization: "Applied Intuition", date: "2024 - 2025"
    },
    {
        projectName: "Microsoft", image: "img/Microsoft.jpg", imageAlt: "Microsoft Image Not Available",
        projectText: "As a Software Engineer on Outlook, I created performant CRUD APIs for Hybrid Working Hours, built scope dashboards tracking global usage across 300M+ users, and led privacy, compliance, and security reviews to launch features and expand to government cloud. I also implemented a diagnostics item crawler to validate and repair mailboxes with invalid Work Hours data.",
        website: "https://www.microsoft.com/en-us/", organization: "Microsoft", date: "2022 - 2024"
    },
    {
        projectName: "Bruin SuperMileage EV", image: "img/BruinRacing.jpg", imageAlt: "SMV Image Not Available",
        projectText: "As Team Director of Bruin Racing, I led 50+ engineers to design and manufacture an electric vehicle achieving 130+ mi/kwh, 50x better than a Tesla Model 3. I developed an embedded data acquisition system with a React pit crew interface for real-time telemetry and raised $42k through grants to fund the annual operating budget, a 300% increase compared to 2020.",
        website: "https://www.bruinracing.com/smv/", organization: "Bruin Racing | SMV", date: "2018 - 2022"
    },
    {
        projectName: "UberKuber", image: "img/BoozAllen.jpg", imageAlt: "Booz Allen Image Not Available",
        projectText: "My team developed a cluster visualization tool for containerized applications using Kubernetes. It serves as an enterprise level tool to monitor the real time status of nodes and containers of a system. We won 1st Place Overall out of 81 teams judged by leadership at McLean HQ for providing insight on the health and performance of an infrastructure with a customizable UI for the needs of clients using React, Redux, JavaScript, and Enterprise Architect.",
        website: "https://www.boozallen.com/", organization: "Booz Allen Hamilton", date: "2019"
    },
];

var moreProjArray = [
    {
        projectName: "Cisco Systems", image: "img/Cisco.jpg", imageAlt: "Cisco Image Not Available",
        projectText: "I worked on the WebEx Teams platform, used by millions of users every day for video conferencing. I created a service to leverage AWS cloud and Kubernetes infrastructure to dynamically scale resources based on anticipated traffic. I wrote an API that returns predictive data based on an additive regression ML model and created an internal debug tool that displays the route of media from endpoints in Python.",
        website: "https://www.cisco.com/", organization: "Cisco Systems", date: "2020"
    },
    {
        projectName: "CHIPS Research Lab", image: "img/CHIPS.jpg", imageAlt: "CHIPS Image Not Available",
        projectText: "In the CHIPS research lab, I worked with a postdoc to develop a prototype flexible gas sensor that can detect any changes in air quality for use as a personal environment monitor. The sensor is small enough to be embedded within a watch, construction mask, or other wearable technologies. I developed the software so that the sensor can communicate information to the user via Bluetooth Low Energy at a frequency of 2 kHz. I also created a JavaScript website to demo the Bluetooth information in real time. Our work was recently published at the 2020 IEEE ECTC conference.",
        website: "https://chips.ucla.edu", organization: "CHIPS Research Lab", date: "2019 - 2020"
    },
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
];

function createProjectCard(project) {
    var hasImage = project.image && project.image.length > 0;
    var hasVideo = project.video && project.video.length > 0;
    var mediaHtml = '';

    if (hasVideo) {
        mediaHtml = '<video class="project-card__video" src="' + project.video + '" autoplay muted loop playsinline></video>';
    } else if (hasImage) {
        mediaHtml = '<img class="project-card__img" src="' + project.image + '" alt="' + project.imageAlt + '" loading="lazy">';
    }

    return '<div class="project-card reveal">' +
        mediaHtml +
        '<div class="project-card__body">' +
            '<h3 class="project-card__title">' + project.projectName + '</h3>' +
            '<p class="project-card__text">' + project.projectText + '</p>' +
        '</div>' +
        '<div class="project-card__footer">' +
            '<a class="project-card__org" href="' + project.website + '" target="_blank">' + project.organization + '</a>' +
            '<span class="project-card__date">' + project.date + '</span>' +
        '</div>' +
    '</div>';
}

// Render main projects
var projectsGrid = document.getElementById('projects-grid');
for (var i = 0; i < projectArray.length; i++) {
    projectsGrid.insertAdjacentHTML('beforeend', createProjectCard(projectArray[i]));
}

// Toggle more projects
var toggleProjectsBtn = document.getElementById('toggle-projects');
var moreProjectsGrid = document.getElementById('more-projects');
var projectsExpanded = false;

toggleProjectsBtn.addEventListener('click', function() {
    projectsExpanded = !projectsExpanded;

    if (projectsExpanded) {
        if (moreProjectsGrid.children.length === 0) {
            for (var i = 0; i < moreProjArray.length; i++) {
                moreProjectsGrid.insertAdjacentHTML('beforeend', createProjectCard(moreProjArray[i]));
            }
        }
        moreProjectsGrid.classList.remove('is-hidden');
        toggleProjectsBtn.textContent = 'Show Fewer';
        observeRevealElements();
    } else {
        moreProjectsGrid.classList.add('is-hidden');
        toggleProjectsBtn.textContent = 'More Projects';
    }
});
