
/* NAV */
//document.addEventListener('DOMContentLoaded', () => {
  // …


const hamburgerx = document.querySelector('.hamburgerx');

const navLink = document.querySelector('.nav_link');


hamburgerx.addEventListener('click', () => { 
  navLink.classList.toggle('hide');
  
});

//});

// ABOVE WORKING hamburger menu at PHONE size

//-------------------------------------------------------

// Following Goes to last in list of images submitted to decide it's orientation (portrait or landscape)

// let i = 0;

var orient;
   img = new Image();
// while (i < 4) {i++;   
//console.log("img")

   img.onload = function () {

  console.log(img);
  if (img.naturalWidth > 0.67 * img.naturalHeight) {
    orient = "landscape";
    //consol.log("orientation');
  } else if (img.naturalWidth < 0.67 * img.naturalHeight) {
    orient = "portrait"; 
   
  } else {
    orient = "even";
  }
  
   console.log(orient);
  document.body.innerHTML +=
    '<img src="' + img.src + '"/><h1>' + orient + "</h1>";
}

/*
img.src =
  "https://manfredcomau.files.wordpress.com/2021/09/krautschneider_manfred_shiftingground_2020_pigmentprint_60x86wpproj.jpg";
 */
  
/* img.src =
  "https://manfredcomau.files.wordpress.com/2018/02/krautschneidermselfie.jpg";

img.src =
  "https://manfredcomau.files.wordpress.com/2019/04/krautschneider_manfred_listeningtothelandscapewp.jpg";

img.src =
  "https://manfredcomau.files.wordpress.com/2018/02/krautschneiderm_sresistanceweb.jpg";

img.src =
  "https://manfredcomau.files.wordpress.com/2018/01/krautschneider_disturbingbeauty_wppostpix350w.jpg";

img.src =
  "https://manfredcomau.files.wordpress.com/2018/02/manfredkrautschneider_terriblebeauty2_wp_sq.jpg";
 //};

 //-----------------------------------------

*/

//This version interrogates element to see if Portrait Note my 67% rule for extremes

/* let artss=document.getElementById("tilt-arts-image");
console.log(artss);
console.log(artss.src);
//let img=artss;
if (artss.naturalWidth > 0.67*artss.naturalHeight) {
orientation = 'landscape';
} else if (artss.naturalWidth < 0.67*artss.naturalHeight) {
orientation = 'portrait';
} else {
orientation = 'even';
}
  
document.body.innerHTML += '<img src="' + artss.src + '"/><h1>' + orientation + '</h1>';
*/
// ----------------------
// new
/*let artss2=document.getElementById("tilt-arts-image");
console.log(artss2);
console.log(artss2.src);
            
if (artss2.naturalWidth > 0.67*artss2.naturalHeight) {
orientation = 'landscape';
} else if (artss2.naturalWidth < 0.67*artss2.naturalHeight) {
orientation = 'portrait';
} else {
orientation = 'even';
}
  
document.body.innerHTML += '<img src="' + artss2.src + '"/><h1>' + orientation + '</h1>'; */

/* document.getElementById(“man”).addEventListener(“submit”)
function(event){
// event.preventDefault() prevents the browser from refreshing
event.preventDefault();
}
);
*/
