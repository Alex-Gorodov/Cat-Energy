const catContainer=document.querySelector(".example__image-container"),catToggler=catContainer.querySelector(".example__image-toggler");let mousePosition,offset=0,isDown=!1;const catBefore=catContainer.querySelector(".example__image--before"),catAfter=catContainer.querySelector(".example__image--after");window.innerWidth<768?(catBefore.style.maxWidth="280px",catAfter.style.maxWidth="280px"):(catBefore.style.maxWidth="560px",catAfter.style.maxWidth="560px");const pushBtn=function(e){isDown=!0,offset=catToggler.offsetLeft-e.clientX},moving=function(e){e.preventDefault(),isDown&&(mousePosition=e.clientX,catToggler.style.left=mousePosition+offset+"px",catBefore.style.width=mousePosition+offset+"px",catAfter.style.width=-mousePosition+offset+"px")},unPushBtn=function(){isDown=!1};catToggler.addEventListener("mousedown",pushBtn,!0),document.addEventListener("mouseup",unPushBtn,!0),catContainer.addEventListener("mouseup",unPushBtn,!0),catContainer.addEventListener("mousemove",moving,!0),catContainer.addEventListener("touchstart",(e=>{isDown=!0,console.log("start"),offset=catToggler.offsetLeft-e.clientX}),!0),catContainer.addEventListener("touchmove",(e=>{e.stopImmediatePropagation(),e.preventDefault(),isDown&&(console.log("moves"),mousePosition=e.clientX,catToggler.style.left=mousePosition+offset+"px",catBefore.style.width=mousePosition+offset+"px",catAfter.style.width=-mousePosition+offset+"px")}),!1),catContainer.addEventListener("touchend",(()=>{console.log("end"),isDown=!1}),!0);