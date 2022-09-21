
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
// and displays it as a section, unorederd list, and list item (but not in DOM(?))

var orient;
//The next 3 lines copy the image to HTML body W/O interfering with hamburger menu
const myImage = new Image();
 if (myImage.naturalWidth > 0.67 * myImage.naturalHeight) {
  orient = "landscape"; 
  //consol.log("orientation');
/* } else if (img.naturalWidth < 0.67 * img.naturalHeight) { 
  orient = "portrait"; */
 } else {
  orient = "portrait";
}; 
myImage.src = "https://manfredcomau.files.wordpress.com/2018/02/krautschneidermselfie.jpg";

myImage.src =
  "https://manfredcomau.files.wordpress.com/2019/04/krautschneider_manfred_listeningtothelandscapewp.jpg";

myImage.src =
  "https://manfredcomau.files.wordpress.com/2018/02/krautschneiderm_sresistanceweb.jpg";

//  document.body.appendChild(myImage);
 
/* // THIS CODE creates a mock Grid Fragment and appends it including the fact it is panorama or portrait (CSS formatted)
//const newfirstel = document.getElementById('noclash');
const fragment = document.createDocumentFragment();

const li = fragment
  .appendChild(document.createElement('section'))
  // add class="tilt-grid-item"
  .appendChild(document.createElement('div'))
  .appendChild(document.createElement('ul'))
  .appendChild(document.createElement('li'));
 // div.imgSource = myImage;
 li.textContent = orient;
 
 document.body.appendChild(fragment);
 document.body.appendChild(myImage);

// fragment.classList.add('tilt-grid'); */

 //NEW next - THIS inserts a new section (grid element) at top of GRID
// Get the parent element
let parentElement = document.getElementById('maingrid')
// Get the parent's first child
let theFirstChild = parentElement.firstChild
// Create a new element
let newElement = document.createElement("section")
//let newElement = document.createElement("div")  //works the same as "section"
// Insert the new element before the first child
parentElement.insertBefore(newElement, theFirstChild)
// document.section.appendChild(fragment);

//END New next

//NEW new The ADDITION OF THIS CODE PLACES image specified here (CSS formatted) In NEW SECTION Created above.
//document.querySelector('.unformed');
//const gal = document.querySelector('div.tilt-arts-image1')
const gal = document.querySelector('section')
//console.log(gal)
// gal.textContent = "LOOK";
gal.innerHTML = '<img src= "https://manfredcomau.files.wordpress.com/2018/02/krautschneiderm_sresistanceweb.jpg" id="tilt-arts-image" align="left" alt="" width=67%;>';
//end NEW new

/* //NEW next - THIS inserts a new section (grid element) at top of GRID
// Get the parent element
let parentElement = document.getElementById('maingrid')
// Get the parent's first child
let theFirstChild = parentElement.firstChild
// Create a new element
let newElement = document.createElement("section")
// Insert the new element before the first child
parentElement.insertBefore(newElement, theFirstChild)
// document.section.appendChild(fragment);

//END New next */

//NEXT
//const newNode = document.createElement("li");
//const textNode = document.createTextNode("Water");
//newNode.appendChild(textNode);

//const list = document.getElementById("myList");
//list.insertBefore(newNode, list.children[0]);
//END NEXT

//Following 2 lines reqd for image and orientation to appear at end of body
//document.body.appendChild(myImage);
//document.body.appendChild(fragment);

//fragment.classList.add('tilt-grid');

//document.body.appendChild(myImage);

// document.querySelector('.container').appendChild(myImage)

/* document.body.appendChild("orient"); WRONG */
 // BELOW WORKS BUT INTERFERES WITH HAMBURGER AND "RESISTANCE" image !!!!!?????
/* document.body.innerHTML +=
    '<img src="' + myImage.src + '"/><h1>' + orient + "</h1>"; 
*/


// Following Goes to last in list of images submitted to decide it's orientation (portrait or landscape)
// BELOW CODE INRTERFERS WITH HAMBURGER MENU

// let i = 0;
   // img = new Image();
// while (i < 4) {i++;   
//console.log("img")
//document.addEventListener('DOMContentLoaded', () => {
  /* img.onload = function () {
   
  console.log(img);
  if (img.naturalWidth > 0.67 * img.naturalHeight) {
    orient = "landscape"; */
    //consol.log("orientation');
  /* } else if (img.naturalWidth < 0.67 * img.naturalHeight) { 
    orient = "portrait"; */
     /*} else {
    orient = "portrait";
  };
     console.log(orient);
  document.body.innerHTML +=
    '<img src="' + img.src + '"/><h1>' + orient + "</h1>";
};
   //document.body.innerHTML +=
      //'<img src="' + img.src + '"/><h1>' + orient + "</h1>";
    
//});

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
