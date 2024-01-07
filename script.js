var profileMenu = document.getElementById("profileMenu");

function toggleMenu(){
    profileMenu.classList.toggle("open-menu");
}

// sidebar activity

var sideActivity = document.getElementById("sidebarActivity");
var moreLink = document.getElementById("ShowMoreLink");

function toggleActivity(){
    sideActivity.classList.toggle("open-activity");

    if(sideActivity.classList.contains("open-activity")){
        moreLink.innerHTML = "Show less <b>-</b>";
    }
    else{ 
        moreLink.innerHTML = "Show More <b>+</b>";
    }
}