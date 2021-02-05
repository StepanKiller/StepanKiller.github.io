

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



// window.onload = function aud_play_pouse() {
//     var myAudio = document.getElementById("myAudio");
//     if (myAudio.paused) {
//       myAudio.play();
//     }
// }

//  function aud_play_pause() {
//   var myAudio = document.getElementById("myAudio");
//   if (myAudio.played) {
//     myAudio.pause();
//   }
// }


//  function aud_play_play() {
//   var myAudio = document.getElementById("myAudio");
//   if (myAudio.paused) {
//     myAudio.play();
//   }
// }