// PRODUCT PICS
var elements = document.getElementsByClassName('add-pic');
function displayPic(addPic) {
    for (var i=0;i<elements.length;i++) {
        elements[i].style.border = "1px solid rgb(205, 205, 205)";
    }
    addPic.style.border = "1px solid rgb(255, 68, 0)";
    var target = document.querySelector('.main-pic');
    for (var i=0;i<elements.length;i++) {
        if (elements[i] == addPic) {
            target.style.backgroundImage = window.getComputedStyle(elements[i]).backgroundImage;
            target.style.backgroundSize = window.getComputedStyle(elements[i]).backgroundSize;
        }
    } 
}

elements[0].click(); // to show default pic


//POP UP
const popup = document.querySelector(".popup");
function openPopup() {
    popup.classList.add('open');
}
function closePopup() {
    popup.classList.remove('open');
}

// RATING SYSTEM

const starElements = document.getElementsByClassName("rating fas fa-star");
var clicked = 0;
function ratingEnter(star) {
    clicked = 0;
    for (var i=0;i<starElements.length;i++) {
        starElements[i].style.color = "lightgray";
        starElements[i].style.textShadow = "none"
    }
    document.getElementById("stars").innerHTML = "";
    var index=0;
    for (var i=0;i<starElements.length;i++) {
        if (starElements[i] == star) {
            index=i;
        }
    }
    document.getElementById("stars").innerHTML = index+1 + " stars";
    for (var i=0;i<=index;i++) {
        starElements[i].style.color = "gold";
    }
}

function ratingLeave() {
    if (clicked == 0) {
        for (var i=0;i<starElements.length;i++) {
            starElements[i].style.color = "lightgray";
            starElements[i].style.textShadow = "none"
        }
        document.getElementById("stars").innerHTML = "";
    }
}

function ratingClick(star) {
    var index=0;
    for (var i=0;i<starElements.length;i++) {
        if (starElements[i] == star) {
            index=i;
        }
    }

    for (var i=0;i<=index;i++) {
        starElements[i].style.color = "gold";
        starElements[i].style.textShadow = "1px 1px 2px black"
    }
    document.getElementById("stars").innerHTML = index+1 + " stars";
    clicked = 1;
}


//APPEND REVIEWS

const nameField = document.querySelector("#name");
const starsField = document.querySelector("#stars");
const headlineField = document.getElementById("headline");
const content = document.getElementById("reviewContent");
const appendButton = document.getElementById("submitBtn");
const container = document.querySelector("#new-reviews")

appendButton.addEventListener("click", function() {
    // Get data from 
    const customerName = nameField.value;
    const stars = starsField.innerHTML[0];
    const headline = headlineField.value;
    const reviewContent = content.value;

    const reviewDiv = document.createElement("div");
    reviewDiv.className = "review";

    const reviewHeadingDiv = document.createElement("div");
    reviewHeadingDiv.className = "review-heading";


    const reviewRatingDiv = document.createElement("div");
    reviewRatingDiv.className = "review-rating";
    for (var i=0;i<stars;i++) {
        var icon = document.createElement("i");
        icon.className = "fas fa-star";
        reviewRatingDiv.appendChild(icon);
        var space = document.createElement("span");
        space.textContent = " ";
        reviewRatingDiv.appendChild(space);
    }
    for (var i=0;i<5-stars;i++) {
        var icon = document.createElement("i");
        icon.className = "far fa-star";
        reviewRatingDiv.appendChild(icon);
        var space = document.createElement("span");
        space.textContent = " ";
        reviewRatingDiv.appendChild(space);
    }
    
    const headingDiv = document.createElement("div");
    headingDiv.className = "heading";
    headingDiv.textContent = headline;

    reviewHeadingDiv.appendChild(reviewRatingDiv);
    reviewHeadingDiv.appendChild(headingDiv);
    reviewDiv.appendChild(reviewHeadingDiv);
    
    const reviewTimeDiv = document.createElement("div");
    const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    const currentTime = new Date();
    const day = currentTime.getDate();
    const month = months[currentTime.getMonth()];
    const year = currentTime.getFullYear();

    reviewTimeDiv.className = "review-time";
    reviewTimeDiv.textContent = `Reviewed on ${day} ${month} ${year} `
    reviewDiv.appendChild(reviewTimeDiv); 

    const reviewContentDiv = document.createElement("div");
    reviewContentDiv.className = "review-content";
    reviewContentDiv.textContent = reviewContent;

    reviewDiv.appendChild(reviewContentDiv);

    const reviewCustomerDiv = document.createElement("div");
    reviewCustomerDiv.className = "review-customer";
    reviewCustomerDiv.textContent = customerName+ ", Certified Buyer✅";
    reviewDiv.appendChild(reviewCustomerDiv);

    container.appendChild(reviewDiv);
    popup.classList.remove('open');

    document.querySelector("#name").value = "";
    clicked = 0;
    ratingLeave();
    document.getElementById("headline").value = "";
    document.getElementById("reviewContent").value = "";
});