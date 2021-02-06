

window.onload = function () {
    var posts=document.getElementsByClassName('posts');
    var btn=document.getElementById('button');
    for (let i=4;i<posts.length;i++) {
        posts[i].style.display = "none";
    }

    var countD = 4;
    btn.addEventListener("click", function() {
        var posts=document.getElementsByClassName('posts');
        countD += 4;
        if (countD <= posts.length){
            for(let i=0;i<countD;i++){
                posts[i].style.display = "flex";
            } 
        }	else {
                btn.style.display = "none";
            } 

    })
    
}



 $('.button').one('mouseout', function () { $(this).addClass('alt-animation'); });



window.onload = function aud_play_pouse() {
    var myAudio = document.getElementById("myAudio");
    if (myAudio.paused) {
      myAudio.play();
    }
}

 function aud_play_pause() {
  var myAudio = document.getElementById("myAudio");
  if (myAudio.played) {
    myAudio.pause();
  }
}


 function aud_play_play() {
  var myAudio = document.getElementById("myAudio");
  if (myAudio.paused) {
    myAudio.play();
  }
}


// var ok = confirm('Включите рождественскую музыку для рождественского настроения');
//   function play_music() {
//   var myAudio = document.getElementById("myAudio");
//     if (ok == true) {
//       myAudio.play();
//     }
// }
   

    // alert('Включите рождественскую музыку для рождественского настроения');




// window.onload = function nottification() {
//     var nott = document.getElementById("nottificatoin");
//     if (nott.style.display == "none") {
//       nott.style.display = "block";
//     }
        

//     var nott = document.getElementById("nottificatoin");
//     nott.addEventListener("click", function() {
//         nott.style.display = "none";
//     }
// }

// window.onload = function showing_notti() {
//     if (document.getElementById("nottificatoin").style.display == 'block') { 
//       document.getElementById("nottificatoin").style.display = "none";
//     }
// }



// var nott = document.getElementById("nottificatoin");

// function hide() {
//  document.getElementById("nottificatoin").style.display = "none";
// }


let content = document.getElementById("nottification")

content.addEventListener("click", () => {
  if (content.style.display === "block") {
    content.style.display = "none"
  } else {
    content.style.display = "block"
  }
})







// var xaxaliq = document.getElementById('xaxaliq');

// xaxaliq.onmousedown = function(e) {

//   var coords = getCoords(xaxaliq);
//   var shiftX = e.pageX - coords.left;
//   var shiftY = e.pageY - coords.top;

//   xaxaliq.style.position = 'absolute';
//   document.body.appendChild(xaxaliq);
//   moveAt(e);

//   xaxaliq.style.zIndex = 1000; // над другими элементами

//   function moveAt(e) {
//     xaxaliq.style.left = e.pageX - shiftX + 'px';
//     xaxaliq.style.top = e.pageY - shiftY + 'px';
//   }

//   document.onmousemove = function(e) {
//     moveAt(e);
//   };

//   xaxaliq.onmouseup = function() {
//     document.onmousemove = null;
//     xaxaliq.onmouseup = null;
//   };

// }

// xaxaliq.ondragstart = function() {
//   return false;
// };

// function getCoords(elem) {   // кроме IE8-
//   var box = elem.getBoundingClientRect();
//   return {
//     top: box.top + pageYOffset,
//     left: box.left + pageXOffset
//   };
// }