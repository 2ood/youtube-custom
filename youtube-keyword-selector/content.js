
class YoutubeAccount{
  constructor(name, list) {
      this.name = name;
      this.list = list;
  }

  has(param) {
    return this.list.includes(param);
  }

  list_length() {
    return this.list.length;
  }
}

const lists = {
  "coder-time" : ["Computer programming", "AI", "Javascript"],
  "coffee-time" : ["Coffee","Espresso"],
  "music-time" : ["Guitar","Playlists","Soundtracks"],
  "KYUNGMIN CHOI" : ["Guitar"]
};

setTimeout(()=>{
  const button = document.getElementById("avatar-btn");
  button.click();
},3000);

setTimeout(()=>{
  const account_dom = document.querySelector("ytd-popup-container #channel-container #account-name");
  const list = document.querySelectorAll("iron-selector yt-chip-cloud-chip-renderer yt-formatted-string");

  const name = account_dom.innerHTML;
  const account =  new YoutubeAccount(name,lists[name]);
  console.log(account.name);
  const length = account.list_length();

  for(let i = 0;i<list.length;i++) {
    if(account.has(list[i].innerHTML)) {
      list[i].click();
      break;
    }
  }
},5000);
