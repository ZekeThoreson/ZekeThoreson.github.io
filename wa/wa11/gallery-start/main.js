const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const imgs = ["images/pic1.jpeg","images/pic2.jpeg","images/pic3.jpeg","images/pic4.jpeg","images/pic5.jpeg"]
/* Declaring the alternative text for each image file */
const altText = ["Eye close-up","place holder alt2","place holder alt3","place holder alt4","place holder alt5",]
/* Looping through images */
for (let i = 0; i < 5; i++){
    const newImage = document.createElement('img');
    newImage.setAttribute('src', imgs[i]);
    newImage.setAttribute('alt', altText[i]);
    thumbBar.appendChild(newImage);
    newImage.addEventListener('click',() => {displayedImage.setAttribute('src',imgs[i])});
    newImage.addEventListener('click',() => {displayedImage.setAttribute('alt',altText[i])});
}

/* Wiring up the Darken/Lighten button */
btn.addEventListener('click', () => {
    if (btn.getAttribute("class") == "dark"){
        btn.setAttribute("class","light");
        btn.textContent = "Lighten";
        overlay.style.backgroundColor = "rgba(0,0,0,0.5)";
    }
    else{
        btn.setAttribute("class","dark");
        btn.textContent = "Darken";
        overlay.style.backgroundColor = "rgba(0,0,0,0)";
    }
})

