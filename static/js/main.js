const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
    
// toggle burget menu
    burger.addEventListener('click',()=>{
        nav.classList.toggle('nav-active')

// animated links
        navLinks.forEach((link,index)=>{
        if(link.style.animation){
            link.style.animation  = "none"
        }else{
            link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
        }
      });
      //burger animation
      burger.classList.toggle('toggle');
    });
}


    navSlide();
// code for truncation in index.html
function showMore(id) {
   var truncateReviews = document.getElementById(id+"_truncated"); 
  var fullReviews = document.getElementById(id+"_full");
  var show = document.getElementById(id+"_show");
document.getElementById(id+"_show");
 if (truncateReviews.style.display =="block") {
   fullReviews.style.display = "block";
   truncateReviews.style.display = "none";
   show.innerText = "Show Less";
   
    
 } else{
   truncateReviews.style.display ="block"; 
   fullReviews.style.display ="none";
   show.innerText = "show More";
 
 }

 }

    //  this code is to make the nav bar stiky
  $(window).scroll(function(){
        var sc = $(window).scrollTop();
        if( sc > 100){
            $("#navbar").addClass("sticky")
        }
        else{
            $("#navbar").removeClass("sticky")
        }

    });
    // this code is for style and animation of the indexpage
    var storyId = document.getElementById('story')
   $(window).scroll(function(){
        var sc = $(window).scrollTop();
        if( sc > storyId){
            $("#story").addClass("icon-animation")
        }
        else{
            $("#story").removeClass("icon-animation")
        }

    });
       // this code is for opening the main burger menu for more information
 $(".nav-icon").click(function(){
        $(".full-navegation").addClass(".open-burger-menu");
        $(".full-navegation").css("visibility", "visible");
        $(".full-navegation").css("opacity", "1");
    });
    $(".close-nav").click(function(){
        $(".full-navegation").removeClass(".open-burger-menu");
        $(".full-navegation").css("visibility", "hidden");
        $(".full-navegation").css("opacity", "0");
    });