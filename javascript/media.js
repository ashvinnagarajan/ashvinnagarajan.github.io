var mediaClickCount = 0;

function moreMedia(){
    if (mediaClickCount % 2 === 0){
        document.getElementById("moreMedia").textContent = "Show Fewer";

        for(var i = 0; i < moreMediaArray.length; i++) {
            appendMedia(moreMediaArray[i], moreMediaContainer);
        }
    }
    else {
        document.getElementById("moreMedia").textContent = "More Media";
        
        document.getElementById("moreMedia").empty();
    }

    mediaClickCount += 1;    
}

var mediaArray = [
    {title: "Here’s who won at the annual Booz Allen Summer Games for interns", img_url:"img/BoozAllen_media.jpg", date: "8/15/19", description: "Out of hundreds of competitors, one team of five young technologists from the West Coast took home the trophy with their proof of concept for a visualization tool for containerized applications.", media_url: "https://technical.ly/dc/2019/08/29/heres-who-won-at-the-annual-booz-allen-summer-games-internship/"},
    {title: "Heterogenous Integration of MEMS Gas Sensor using FOWLP : Personal Environment Monitors", img_url:"img/ectc_media.jpg", date: "1/20/19", description: "In this paper, we have demonstrated the integration of MEMS gas sensors on flexible PDMS substrate...", media_url: "ECTC Paper.pdf"},
    {title: "James Caldwell students celebrate classics, inducts members", img_url:"img/celebrate_classics_media.jpg", date: "5/8/18", description: "The National Junior Classical League celebrated the study and appreciation of ancient Greek and Roman culture at James Caldwell High School and inducted new members on Friday, April 11.", media_url: "https://www.newjerseyhills.com/the_progress/news/james-caldwell-students-celebrate-classics-inducts-members/article_a6346c49-13b6-57b9-8414-0ebd3ec480e3.html"},
    {title: "Valedictory Address: Don't succumb to complacency, mediocrity", img_url:"img/dont_succumb_media.jpg", date: "6/28/20", description: "My name is Ashvin Nagarajan, and it is my true honor to address you, my peers, my friends. My honor to have interacted with all of you during the past four years. My honor to have heard your stories and shared my own.", media_url: "https://www.newjerseyhills.com/the_progress/opinion/columns/commentary-don-t-succumb-to-complacency-mediocrity/article_38086f47-189d-5b85-a51e-e3a5e29b29fc.html"},
    {title: "Top students bid farewell to 'transformative' James Caldwell High School", img_url:"img/bid_farewell_media.jpg", date: "6/28/18", description: " Looking back, James Caldwell High School Valedictorian Ashvin Nagarajan and Salutatorian Alyssa Krisinski agreed their time in high school was transformational.", media_url: "https://www.newjerseyhills.com/the_progress/news/top-students-bid-farewell-to-transformative-james-caldwell-high-school/article_21d31c67-9421-5967-961d-6b2e09419847.html"},
    {title: "UCLA Idea Hacks 2019", img_url:"img/idea_hacks_media.jpg", date: "1/20/19", description: "", description: "Over the weekend of January 18-20, UCLA IEEE and Theta Tau presented the fifth annual Idea Hacks hardware hackathon.", media_url: "https://www.ee.ucla.edu/ucla-idea-hacks-2019/"},
];

var moreMediaArray = [
    {title: "James Caldwell Students Earn Top Spots in Compete in National Math Competition", img_url:"img/math_con_media.jpg", date: "4/30/15", description: "Six students from James Caldwell High School in West Caldwell qualified as national finalists to compete in MathCON", media_url: "https://www.tapinto.net/articles/james-caldwell-students-earn-top-spots-in-compete"},
    {title: "15 James Caldwell Students Inducted into National Latin Honor Society", img_url:"img/inducted_media.jpg", date: "3/31/17", description: "The World Languages Department honored 15 Junior Classical League students who have demonstrated outstanding academic achievement and citizenship in Latin class.", media_url: "https://www.tapinto.net/towns/west-essex/articles/15-james-caldwell-students-inducted-into-national"},
    {title: "James Caldwell graduates 214", img_url:"img/graduates_214_media.jpg", date: "6/28/18", description: "Crowds of parents, grandparents and siblings packed into the stands on Bonnel Field to cheer for the James Caldwell High School graduating class of 2018 on Thursday, June 21.", media_url: "https://www.newjerseyhills.com/the_progress/news/video-james-caldwell-graduates/article_119c7a6c-deaf-5706-be8d-f9b90fa94d6b.html"},
    {title: "Local Seventh Graders Win Chess Tournament", img_url:"img/chess_tournament_media.jpg", date: "11/20/12", description: "Grover Cleveland Middle School students Ashvin Nagarajan and Alex Rosa get gold in Essex County's Team Chess Tournament.", media_url: "https://patch.com/new-jersey/caldwells/local-seventh-graders-win-chess-tournament"},
    {title: "James Caldwell High School selects ShopRite Stars", img_url:"img/shoprite_stars_media.jpg", date: "11/10/17", description: " James Caldwell High School has named seniors Joseph Lombardi, Ashvin Nagarajan, Amanda Herzig, Jack Payne and James Miller as ShopRite Stars.", media_url: "https://www.newjerseyhills.com/the_progress/news/james-caldwell-high-school-selects-shoprite-stars/article_58176886-4eda-5bf0-b7a4-46f41010a31b.html"},
    {title: "Students shine in Caldwell-West Caldwell", img_url:"img/students_shine_media.jpg", date: "2/21/17", description: "Superintendent Dr. James Heinegg presented Eagle Scouts Jean Louis Mollet, Jordan Whiting, and Ashvin Nagarajan, students at James Caldwell High School, with resolutions honoring their recently attained Eagle Scout status.", media_url: "https://www.newjerseyhills.com/the_progress/news/students-shine-in-caldwell-west-caldwell/article_2e78cd56-2a20-5f21-90e6-3864862dfc4d.html"},
];

var mediaContainer = "#media";
var moreMediaContainer = "#collapseMedia";

function appendMedia(media, container)
{
    var tag = 
        "<a target=\"_blank\" href=\"" + media.media_url + "\"  \>" + 
            "<div class=\"media\">" + 

                "<img class=\"mr-3 img-media\" src=\"" + media.img_url + "\" alt=\"Generic placeholder image\">" +
                "<div class=\"media-body\">" +
                    "<h5 class=\"mt-0 lead\">" + media.title + "</h5>" + 
                        "<p class=\"card-text\">" + media.description + "</p>" +
                "</div>" +
            "</div>" + 
        "</a>";
    $(container).append(tag);
}

function mainMedia() {
    for(var i = 0; i < mediaArray.length; i++)
    {
        appendMedia(mediaArray[i], mediaContainer);
    }
}

mainMedia();
