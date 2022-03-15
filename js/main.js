

// JavaScript element selector

// const btn = document.getElementsByTagName("button");
// const button = document.querySelector("button")
// console.log(btn);
// console.log(button);

// ==============================================

// Jquery element selector



//  const btn =   $(".btn:nth-child(3)");

// const span = $("span>a");

// console.log(span);


//  console.log(btn);


// JS
// const btn = document.getElementsByTagName("button");



// btn.onclick = function(){

// }


// ===========================


// Jquery


// $("document").ready(function(){
   
//     $("button").click(function(){
//         console.log("salam");
//     })
// });



// let btn = document.querySelector("button");
// let p = document.querySelector("p");

// btn.onclick = () => {
//     p.style.display = "none"
// }

// $( () => {
//     $("button").click(() => {
//         $("p").stop().slideUp();
//     })
// })


$( () => {
    $(".menu-btn").click( () => {
        $(".responsive-menu").stop().slideToggle("slow")
    })

    // responsive header end

})


let value = 0;

$( () => {
    function progressAni(){
        value +=1;
        $(".progress-bar").css("width", value + "%" );
        $("label").text(`HTML: ${value}`)
        let maxVal = $(".progress-bar").attr("aria-valuemax")
     
       
        if (value<maxVal) {
            return setTimeout(progressAni, 100)
        }

        
    }
   return progressAni()


  
    
    
})


$( () => {
    $( "#accordion" ).accordion();
  } );



