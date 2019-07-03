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