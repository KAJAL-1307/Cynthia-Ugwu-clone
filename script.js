const scroll = new LocomotiveScroll({
    el: document.querySelector('.main'),
    smooth: true
});
function circleMouseFollower(xscale,yscale){
    window.addEventListener("mousemove",function(dets){
        document.querySelector("#minicircle").style.transform=`translate(${dets.clientX}px,${dets.clientY}px) scale(${xscale},${yscale})`;
    })
}


function firstpageAni(){
    var tl=gsap.timeline();

    tl.from("#nav",{
        y:'-10',
        opacity:0,
        duration:1.5,
        ease:Expo.easeInOut
    })
    
    .to(".boundingelem",{
        y:0,
        ease:Expo.easeInOut,
        duration:1.5,
        delay:-1,
        stagger:.2
    })
    .from("#herofooter",{
        y:'-10',
        opacity:0,
        duration:1.5,
        delay:-1,
        ease:Expo.easeInOut
    })
}

function muouseElipse(){
    var xscale=1;
    var yscale=1;
    var xprev=0;
    var yprev=0;
    

    window.addEventListener("mousemove",function(dets){
        // clearTimeout(timeout);
        var xdiff=dets.clientX-xprev;
        var ydiff=dets.clientY-yprev;
        xprev=dets.clientX;
        yprev=dets.clientY;

        xscale=gsap.utils.clamp(.8,1.3,xdiff);
        yscale=gsap.utils.clamp(.8,1,ydiff);

        circleMouseFollower(xscale,yscale);

        // timeout=setTimeout(function(){
        //     document.querySelector("#minicircle").style.transform='translate(${dets.clientX}px,${dets.clientY}px),scale(1,1,)';
        // },100);

    });
}

document.querySelectorAll(".ele")
.forEach(function(ele){

    var rotate=0;
    var diffrow=0;

    ele.addEventListener("mousemove",function(dets){
        var diff=dets.clientY-ele.getBoundingClientRect().top;
        
        diffrow=dets.clientX-rotate;
        rotate=dets.clientX;
        
        // Hide images in all other divs
        document.querySelectorAll(".ele img").forEach((img) => {
            if (img !== ele.querySelector("img")) {
                gsap.to(img, {
                    opacity: 0,
                    ease: Power1.easeOut,
                });
            }

            ele.addEventListener("mouseleave", function () {
                // Hide the image when the mouse leaves the current div
                gsap.to(ele.querySelector("img"), {
                  opacity: 0,
                  ease: Power1.easeOut,
                });
              });
        });
        
        
        
        
        gsap.to(ele.querySelector("img"),{
            opacity:1,
            ease:Power1,
            top:diff,
            left:dets.clientX,
            rotate:gsap.utils.clamp(-20,20,diffrow),
 
        });
    });

    
});

muouseElipse();
firstpageAni();