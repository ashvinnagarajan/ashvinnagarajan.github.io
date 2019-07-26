var clickCount = 0;

function moreProjects(){
    if (clickCount % 2 === 0){
        console.log("Success");
        document.getElementById("moreProjects").textContent = "Show Fewer";
    }
    else {
        document.getElementById("moreProjects").textContent = "More Projects";
    }

    clickCount += 1;    
}

// When the user scrolls down 80px from the top of the document, resize the navbar's padding and the logo's font size
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 600 || document.documentElement.scrollTop > 600) {
    document.getElementById("Top").style.backgroundColor = "rgba(0,0,0,0.25)";
  } else {
    document.getElementById("Top").style.backgroundColor = "transparent";
  }
}