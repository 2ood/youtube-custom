const video = document.getElementsByClassName("html5-main-video")[0];

const controls = document.getElementsByClassName("ytp-right-controls")[0];

const transform = "scaleX(-1)";

const button = buildButton();

controls.insertBefore(button, controls.firstChild);




function buildButton() {
  let result = document.createElement("div");
  let img = document.createElement("img");
  const path = chrome.runtime.getURL("mirror.svg");

  img.id="mirror-image";
  img.src=path;
  img.style.opacity ="0.5";

  result.appendChild(img);
  result.id = "mirror-button";
  result.addEventListener("click",()=>{
    if(video.style.transform!=transform) {
      video.style.transform = transform;
      img.style.opacity = "1";
    }
    else {
      video.style.transform="";
      img.style.opacity ="0.5";
    }
  });

  return result;
}
