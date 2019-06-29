var imgArray = [
    "img/11.jpg",
    "img/13.jpg",
    "img/14.jpg",
    "img/15.jpg",
    "img/16.jpg",
    "img/17.jpg",
    "img/18.jpg",
    "img/20.jpg",
    "img/23.jpg",
    "img/24.jpg",
    "img/25.jpg",
    "img/26.jpg",
    "img/27.jpg",
    "img/29.jpg",
    "img/30.jpg",
    "img/31.jpg",
    "img/32.jpg",
    "img/33.jpg",
    "img/34.jpg",
    "img/35.jpg",
    "img/37.jpg",
    "img/38.jpg",
    "img/39.jpg",
    "img/43.jpg",
    "img/46.jpg",
    "img/48.jpg",
    "img/49.jpg",
    "img/50.jpg",
    "img/52.jpg",
    "img/53.jpg",
    "img/56.jpg",
    "img/57.jpg",
    "img/58.jpg",
    "img/59.jpg",
    "img/62.jpg",
    "img/1.png",
    "../img/2.png",
    "../img/3.png",
    "img/5.PNG"
];

var picContainer = "#pics";

function append(img, container)
{
    var tag = 
        "<div class=\"grid-item\">" +
            "<img src=\"" + img + "\"/>" + 
        "</div>";
    $(container).append(tag);
}

for(var i = 0; i < imgArray.length;i++)
{
    append(imgArray[i], picContainer);
}

