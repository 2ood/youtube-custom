
var firebaseConfig = {
 apiKey: "AIzaSyBpoEOgyGHiSt5w07sh_KkSg852Bw34Qxc",
 databaseURL: "https://1:732775523621:web:b134125ad811e63aef66cc.firebaseio.com",
 storageBucket: "1:732775523621:web:b134125ad811e63aef66cc.appspot.com"
};

const app = firebase.initializeApp(firebaseConfig);
const db = app.firestore();
const storage = app.storage();

const textarea = document.getElementById("cite");
const save = document.getElementById("save");
let url ="123";

save.addEventListener("click",()=>{
  chrome.tabs.query({active: true, lastFocusedWindow: true}, tabs => {
      url = tabs[0].url;
      text = textarea.value;
      db.collection("youtube").add({video : url, text : text}).then((docRef) => {
        save.innerHTML="saved!";
        setTimeout(()=>{save.innerHTML="save";},2000);
      });
  });
});
