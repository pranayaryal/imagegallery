//Problem: User when clicking on image goes to a dead end
//Solution: Create an overlay with the large image

var $overlay = $('<div id="overlay"></div>')
var $image = $("<img>");
var $caption = $("<p></p>");

$overlay.append($image);

$overlay.append($caption);
//Add overlay
$("body").append($overlay)
  //2.1 An image
  //2.2 A caption
//1. Capture the click event on a link to an image
$("#imageGallery a").click(function(event){
   event.preventDefault();
   var href=$(this).attr("href");
   var imageLocation = $(this).attr("href");
   $image.attr("src",imageLocation);
   $overlay.show();
   var captionText = $(this).children("img").attr("alt");

   $caption.text(captionText);
 });
   //1.1 Show ther overlay
   //1.2 Update overlay with the image linked in the link
   //1.3 Get child's alt attribute and set caption
//2. Add overlay
  
//3. When overlay is clicked,
  //3.1 Hide the overlay
 $overlay.click(function(){
   //hide the overlay
   $overlay.hide();
 
 
 
 
 });
