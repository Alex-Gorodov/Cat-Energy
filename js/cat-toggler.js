const catContainer=document.querySelector(".example__image-container"),catToggler=catContainer.querySelector(".example__image-toggler"),catBefore=catContainer.querySelector(".example__image--before"),catAfter=catContainer.querySelector(".example__image--after");let mousePosition,alphaX=0,isDown=!1;window.innerWidth<768?(catBefore.style.maxWidth="280px",catAfter.style.maxWidth="280px"):(catBefore.style.maxWidth="560px",catAfter.style.maxWidth="560px");const pushBtn=function(e){isDown=!0,alphaX=catToggler.offsetLeft-e.clientX},moving=function(e){e.preventDefault(),isDown&&(mousePosition=e.clientX,catToggler.style.left=mousePosition+alphaX+"px",catBefore.style.width=mousePosition+alphaX+"px",catAfter.style.width=-mousePosition+alphaX+"px")},unPushBtn=function(){isDown=!1};catToggler.addEventListener("mousedown",pushBtn,!0),catContainer.addEventListener("mouseup",unPushBtn,!0),document.addEventListener("mouseup",unPushBtn,!0),catContainer.addEventListener("mousemove",moving,!0),catContainer.addEventListener("touchstart",(e=>{isDown=!0,alphaX=catToggler.offsetLeft-e.targetTouches[0].pageX}),!0),catContainer.addEventListener("touchmove",(e=>{e.stopImmediatePropagation(),e.preventDefault(),isDown&&e.target.closest(".example__image-toggler")&&(mousePosition=e.targetTouches[0].pageX,catToggler.style.left=mousePosition+alphaX+"px",catBefore.style.width=mousePosition+alphaX+"px",catAfter.style.width=-mousePosition+alphaX+"px")}),!1),catContainer.addEventListener("touchend",(()=>{isDown=!1}),!0);