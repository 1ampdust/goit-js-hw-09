let t;document.querySelector("[data-start]").addEventListener("click",(function(){const e=document.querySelector("[data-start]"),a=document.querySelector("[data-stop]");e.disabled=!0,a.disabled=!1,t=setInterval((()=>{document.body.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,"0")}`}),1e3)})),document.querySelector("[data-stop]").addEventListener("click",(function(){const e=document.querySelector("[data-start]"),a=document.querySelector("[data-stop]");e.disabled=!1,a.disabled=!0,clearInterval(t)}));
//# sourceMappingURL=01-color-switcher.050e06a4.js.map
