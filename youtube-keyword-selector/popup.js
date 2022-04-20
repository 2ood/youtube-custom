const lists = {
  "coder-time" : ["Computer programming", "AI", "Javascript"],
  "coffee-time" : ["Coffee","Espresso"],
  "music-time" : ["Guitar","Playlists","Soundtracks"],
  "KYUNGMIN CHOI" : ["Music"]
};

const select = document.getElementById("avatar");

localStorage.setItem("lists",["sdf","sdfs"]);

select.addEventListener("change",()=>{
  console.log(localStorage.getItem("lists"));
});
