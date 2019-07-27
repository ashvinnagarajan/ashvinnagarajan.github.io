var imgArray = [
    {img_url: "img/11.jpg", title: "High School Graduation", people: "Ashvin, Yugantar", date: "6/22/18"},
    {img_url: "img/13.jpg", title: "High School Gradutation", people: "Praveen, Dr. Trause, Ashvin", date: "6/22/18"},
    {img_url: "img/14.jpg", title: "Ballin' Suit", people: "Baby Ashvin", date: "long time ago"},
    {img_url: "img/15.jpg", title: "Celebratory Toast", people: "Mom, Praveen, Ashvin", date: "1/2/2016"},
    {img_url: "img/16.jpg", title: "Brothers", people: "Praveen, Ashvin", date: "5/21/2016"},
    {img_url: "img/17.jpg", title: "Picnic in West Orange", people: "Mom, Praveen, Ashvin", date: "7/16/2016"},
    {img_url: "img/18.jpg", title: "Matching", people: "Dad, Ashvin, Praveen", date: "1/8/2017"},
    {img_url: "img/20.jpg", title: "Blue", people: "Ashvin, Mom, Praveen", date: "7/19/2017"},
    {img_url: "img/23.jpg", title: "Yosemite National Park", people: "Ashvin, Praveen", date: "8/11/2018"},
    {img_url: "img/24.jpg", title: "Golden Gate Bridge", people: "Ashvin, Praveen", date: "7/25/2017"},
    {img_url: "img/25.jpg", title: "Golden Gate Bridge", people: "Ashvin", date: "7/25/2017"},
    {img_url: "img/26.jpg", title: "Verona Park", people: "Mom, Ashvin", date: "9/10/2017"},
    {img_url: "img/27.jpg", title: "Flannel Friends", people: "Jordan, Vincent, Ashvin", date: "7/14/2017"},
    {img_url: "img/29.jpg", title: "Student Council Board", people: "Ashvin, Charlee, Ben, Jess", date: "1/5/2018"},
    {img_url: "img/30.jpg", title: "Rebound", people: "Ashvin, Paul, Cameron", date: ""},
    {img_url: "img/31.jpg", title: "JCHS Varsity Tennis Team", people: "Tennis Team", date: ""},
    {img_url: "img/32.jpg", title: "Habitat for Humanity", people: "H4H Board", date: ""},
    {img_url: "img/33.jpg", title: "JCHS Chemistry Olympics", people: "Chem Olympics Team", date: ""},
    {img_url: "img/34.jpg", title: "JCHS Math Bowl", people: "Math Team", date: ""},
    {img_url: "img/35.jpg", title: "JCHS Math Bowl", people: "Math Team", date: ""},
    {img_url: "img/37.jpg", title: "Academic Banquet", people: "Jordan, Josh, Ashvin", date: "5/23/2018"},
    {img_url: "img/38.jpg", title: "High School Graduation", people: "Vincent, Ashvin", date: "6/22/2018"},
    {img_url: "img/39.jpg", title: "Academic Banquet", people: "Friends", date: "5/23/2018"},
    {img_url: "img/40.jpg", title: "Prom", people: "Friends", date: ""},
    {img_url: "img/43.jpg", title: "Latin Honor Society Induction", people: "Ashvin, Dr. Trause", date: "4/10/2018"},
    {img_url: "img/50.jpg", title: "2018 NJ Chemistry Olympics", people: "Spencer, Cole, Ashvin", date: ""},
    {img_url: "img/52.jpg", title: "High School Graduation", people: "Dr. Trause, Ashvin", date: "6/22/2018"},
    {img_url: "img/53.jpg", title: "Senior Year", people: "Jordan, Ashvin", date: ""},
    {img_url: "img/56.jpg", title: "Study Time", people: "Juan, Ashvin", date: "10/21/2016"},
    {img_url: "img/57.jpg", title: "Senior Photo Day", people: "Jordan, Ashvin", date: "10/14/2017"},
    {img_url: "img/58.jpg", title: "JCHS Varsity Tennis", people: "Ashvin", date: "4/26/2018"},
    {img_url: "img/59.jpg", title: "JCHS Varsity Tennis", people: "Ashvin", date: "4/26/2018"},
    {img_url: "img/62.jpg", title: "JCHS Graduation Ceremony", people: "JCHS Class of 2018", date: "6/22/2018"},
    {img_url: "img/63.jpg", title: "Suited Up", people: "Ashvin", date: "5/17/2017"},
    {img_url: "img/1.png", title: "Eagle Court of Honor", people: "Dad, Ashvin, Mom", date: ""},
    {img_url: "img/2.png", title: "Eagle Court of Honor", people: "Ashvin, Jordan, J-B, Mr. Stevens", date: ""},
    {img_url: "img/3.png", title: "Eagle Court of Honor", people: "Ashvin", date: ""},
    {img_url: "img/5.png", title: "JCHS Orchestra", people: "Orchestra", date: ""}
];

var initialLength = imgArray.length;
var appendArray = [];
var arrayLength = 8;
var picContainer = "#pics";
var imgNum;
var timesClicked = 1;

function append(img, container)
{
    var tag = 
        "<div class=\"card pics-card\">" +
            "<a href=\"" + img[0] + "\">" + 
                "<img class=\"card-img-top\" alt=\"Sorry image not available\" style=\"height:100%;\" src=\"" + img.img_url + "\"/>" + 

                "<div class=\"img-middle\" >" + 
                    "<div class=\"pic-text\">" + img.title + "</div>" + 
                    "<hr/>" + 
                    "<div class=\"pic-text\">" + img.people + "</div>" + 
                    "<hr/>" + 
                    "<div class=\"pic-text\">" + img.date + "</div>" + 
                "</div>" + 
            "</a>" +
        "</div>";
    $(container).append(tag);
}

function populate()
{
    var randNum;

    for (var i = 0; i < arrayLength; i++){
        randNum = randInt();

        appendArray[i] = imgArray[randNum];

        imgArray.splice(randNum,1);
    }
}

//Picks a random number between 0(inclusive) and imgArray.length() (exclusive)
function randInt()
{
    var num;
    num = (Math.random() * (imgArray.length-1))
    num = num.toFixed(0);

    return num;
}

function main() {
    for(var i = 0; i < arrayLength; i++)
    {
        append(appendArray[i], picContainer);
    }
}

populate();
main();

function morePics(){

    timesClicked += 1;

    if ((timesClicked * appendArray.length) > initialLength)
    {
        arrayLength = 0;

        document.getElementById("showItem").textContent = "No More Pictures";
        document.getElementById("showItem").disabled = true;
    }

    populate();
    main();
}